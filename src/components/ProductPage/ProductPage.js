import React, {useEffect, useState} from 'react'
import {
    ActionContainer,
    Container,
    Discription,
    H1,
    H2, NumItemsButton,
    PImage, Reviews,
    TextContainer,
    Wrapper
} from "./Components/ProductPageElements";
import {CartButton} from "../Products/Product/Components/ProductElements";
import ProductSkelelton from "./skelelton/Skelelton";
import {Button, Typography} from "@material-ui/core";
import {Swiper, SwiperSlide} from "swiper/react";
import {A11y, Navigation, Pagination, Scrollbar} from "swiper";
import {FormControl, getRadioUtilityClass, InputLabel, MenuItem, Select} from "@mui/material";
import {useForceUpdate} from "framer-motion";
import {commerce} from "../../lib/commerce";
import {ContainerCollumn, ContainerRow} from "../Elements/HomePageElements";






const ProductPage = ( {discounts, products, onAddToCart }) => {

    const [numItems, setNumItems] = useState(0);
    const [product, setProduct] = useState(null);
    const [variantGroups, setVariantGroups] = useState([]);
    const [selectValue, setSelectValue] = useState([]);
    const [selectedVariant, setSelectedVariant] = useState([]);
    const [selectedImage, setSelectedImage] = useState();
    const [discount, setDiscount] = useState(0);
    const [discountedPrice, setDiscountedPrice] = useState( 0);
    const [discountType, setDiscountType] = useState('none');

    let path = window.location.pathname;
    let paths = path.split("/");


    const length = products.length

    const handleChange= (e) => {

        let targetValue, targetGroup, targetGroupIndex;
        let newSelectedVariant = selectedVariant;

        let tempSelectValue = JSON.stringify(selectValue).split(" , ")

        let tempArray = JSON.stringify(selectedVariant).split(",")

        for(let i = 0; i < variantGroups.length; i++){
            targetGroup = variantGroups[i].id;
            targetGroupIndex = variantGroups[i].index;
            for(let x = 0; x < variantGroups[i].variants.length; x++){
                if(variantGroups[i].variants[x].value == e.target.value){
                    targetValue = e.target.value;
                    break;
                }
            }
            if(targetValue != null){
                break;
            }
        }

        tempSelectValue[targetGroupIndex] = e.target.value;

        for(let i = 0; i < tempSelectValue.length; i++){
            if(i != targetGroupIndex){
                tempSelectValue[i] = tempSelectValue[i].replace('/', '').replace('"', "");
            }
        }

        let selectStringValue = "";

        for(let s = 0; s < tempSelectValue.length; s++){
            if(selectStringValue == ""){
                selectStringValue = tempSelectValue[s]
            }else{
                selectStringValue = selectStringValue + ' , ' + tempSelectValue[s]
            }

        }
        console.log(selectStringValue)

        let tempArray1
        for(let i = 0; i < variantGroups.length; i++){
            if(tempArray[i].includes(targetGroup)){

                newSelectedVariant[targetGroup] = targetValue;

                tempArray1 = variantGroups
                tempArray1[i].active = targetValue
            }
        }

        setSelectValue(selectStringValue)
        setVariantGroups(tempArray1)
        setSelectedVariant(newSelectedVariant)
    }

    const fetchProductInfo = async () => {
        for (let i = 0; i < length; i++) {
            if (products[i].id === paths[2]){
                const productInfo = products[i]

                let p = 0;

                let finalVariantGroupsArray = products[i].variant_groups.map(groups => {
                    let groupInfo = {};

                    groupInfo.id = groups.id;
                    groupInfo.name = groups.name;
                    groupInfo.active = false;
                    groupInfo.index = p;

                    let c = 0;
                    let groupVariants = groups.options.map(options => {
                        let variant = {};

                        variant.text = groups.options[c].name;
                        variant.value = groups.options[c].id;

                        c++;
                        return variant;
                    })
                    groupInfo.variants = groupVariants;
                    p++;

                    return groupInfo;
                })

                let variantInfo = {}
                let tempArray1 = {}
                let selectStringValue = "";
                for(let s = 0; s < finalVariantGroupsArray.length; s++){
                    variantInfo[products[i].variant_groups[s].id] = products[i].variant_groups[s].options[0].id
                    tempArray1 = finalVariantGroupsArray
                    tempArray1[s].active = products[i].variant_groups[s].options[0].id;
                }
                for(let s = 0; s < tempArray1.length; s++){
                    if(selectStringValue == ""){
                        selectStringValue = tempArray1[s].active
                    }else{
                        selectStringValue = selectStringValue + ' , ' + tempArray1[s].active
                    }

                }


                const defaultProductImage = productInfo.assets[0].url;


                setProduct(productInfo);
                setVariantGroups(tempArray1);
                setSelectValue(selectStringValue)
                setSelectedImage(defaultProductImage)
                setSelectedVariant( variantInfo)

            }
        }
    }
    const fetchDiscount = () => {

        let includedId;
        let discountType = "none"
        let discountAmount = 0;
        let discountedPrice = product.price.raw;

        for(let x = 0; x < discounts.data.length; x++){
            for(let i = 0; i < discounts.data[x].product_ids.length; i++){
                if(discounts.data[x].product_ids[i] === product.id) {
                    if (includedId != null) {
                        break;
                    }
                    includedId = product.id

                    if (discounts.data[x].type === "percentage") {
                        console.log(discountedPrice)
                        if ((discounts.data[x].value / 100) === 1) {
                            discountType = "percentage";
                            discountedPrice = 0;
                            discountAmount = '100%'
                        } else if (product.price.raw - (discounts.data[x].value / 100 * product.price.raw) < discountedPrice) {
                            discountType = "percentage";
                            discountedPrice = (product.price.raw - (discounts.data[x].value / 100 * product.price.raw)).toFixed(2)
                            discountAmount = discounts.data[x].value;

                        }
                    } else if (discounts.data[x].type === "fixed") {
                        if (product.price.raw - ((discounts.data[x].value / 100) * product.price.raw) < discountedPrice) {
                            discountType = "fixed"
                            discountAmount = discounts.data[x].value;
                            discountedPrice = (product.price.raw - discounts.data[x].value).toFixed(2)
                        }
                    }
                }
            }
            includedId = null;
        }

        setDiscountType(discountType);
        setDiscount(discountAmount);
        setDiscountedPrice(discountedPrice);
    }

    useEffect(() => {
        if(!product){

        }else{
            fetchDiscount();
        }


    })

    if (!product){
        fetchProductInfo();
         return (
            <>
                <ProductSkelelton/>
            </>
        )

    }



    if (numItems == 0) {
        setNumItems(numItems + 1)
    }

    const VariantDropDown = ( group ) => {
        console.log(JSON.stringify(selectValue).split(" , ")[group.group.index].replace('/', '').replace('"', "").replace('"', ""))
        return (
            <FormControl sx={{m: 1, minWidth: 120}}>
                <InputLabel id="flavor-selector-label">{group.group.name}</InputLabel>

                <Select

                    labelId="flavor-selector-label"
                    id="demo-simple-select"
                    onChange={handleChange}
                    value={JSON.stringify(selectValue).split(" , ")[group.group.index].replace('/', '').replace('"', "").replace('"', "")}
                    label={group.group.name}

                >
                    {group.group.variants.map((variant) => {
                            return (
                                <MenuItem value={variant.value} key={variant.text}>
                                    {variant.text}
                                </MenuItem>
                            )

                    })}

                </Select>
            </FormControl>
        )
    }


    const costFormated = () => {
        if(discountType == "percentage") {
            return(
                <ContainerCollumn>
                    <span style={{fontSize: "18px",  color: "red"}}>Take {discount}%  off </span>
                    <span><span style = {{ fontSize: "18px", textDecorationLine: 'line-through', color: "red", textDecorationStyle: 'solid' }}>{product.price.formatted_with_symbol}</span>ㅤ<span style={{fontSize: "18px", color: "black"}}>{discountedPrice}</span></span>
                </ContainerCollumn>
            )
        }else if(discountType == "fixed") {
            return(
                <ContainerCollumn>
                    <span style={{fontSize: "18px", color: "red"}}>Take ${discount} off </span>
                    <span><span style={{
                        fontSize: "18px",
                        textDecorationLine: 'line-through',
                        color: "red",
                        textDecorationStyle: 'solid'
                    }}>{product.price.formatted_with_symbol}</span>ㅤ<span
                        style={{fontSize: "18px", color: "black"}}>${discountedPrice}</span></span>
                </ContainerCollumn>
            )
        }else{
            return(
                <ContainerCollumn>
                    <span style={{color: 'black'}}>{product.price.formatted_with_symbol}</span>
                </ContainerCollumn>
            )
        }
    }


    const dropDownFormated = () => {
        if(variantGroups.length != undefined){
            return(

                    variantGroups.map((group) => (
                        <VariantDropDown  key={group.id} group={group}/>
                    ))

            )
        }else{
            return(
                <></>
            )
        }
    }

    const attributesFormated = () => {
        if(product.attributes.length > 0){
            console.log(product.attributes)
            return(

                product.attributes.map((attribute) => (
                    attribute.value != null
                    &&
                    <ContainerRow style={{ justifyContent: 'left',  color: 'black'}}>
                        <span style={{color: 'red'}}>{attribute.name}:</span>
                        &nbsp;{attribute.value}
                    </ContainerRow>
                ))

            )
        }else{
            return(
                <></>
            )
        }

    }

    console.log(product)

        return (
            <>
                <Container>
                    <Wrapper>
                        <PImage>
                            <img  src={selectedImage}/>
                            <Swiper
                                style={{height: '20%',  width: '100%'}}
                                modules={[Navigation, Pagination, Scrollbar, A11y]}
                                spaceBetween={0}
                                slidesPerView={5}
                                navigation

                                scrollbar={{ draggable: true }}
                            >
                                {product.assets.map((variant) => (
                                    <SwiperSlide onClick={() => (setSelectedImage(variant.url))} key={variant.id} style={{width: '50px', height: '50px'}}>
                                        <a>
                                            <img  style={{width: '50px', height: '50px'}} src={variant.url} ></img>
                                        </a>
                                    </SwiperSlide>
                                ))}

                                ...
                            </Swiper>

                        </PImage>
                        <TextContainer>
                            <H1 style={{paddingBottom: '30px'}}>
                                {product.name}
                            </H1>

                            <H1 style={{paddingBottom: '20px', fontSize: '20px'}}>
                                {costFormated()}
                            </H1>
                            <ContainerRow style={{justifyContent: 'left', width: 'auto'}}>
                                {dropDownFormated()}
                            </ContainerRow>

                            <Discription color="secondary" dangerouslySetInnerHTML={{__html: product.description}}></Discription>

                            {attributesFormated()}

                            { product.sku != null &&
                                <ContainerRow  style={{justifyContent: 'left', width: 'auto', paddingTop: '20px', paddingBottom: '20px'}}>

                                    <span >
                                        SKU:
                                    </span>
                                    &nbsp;
                                    <span>
                                        {product.sku}
                                    </span>

                                </ContainerRow>
                            }
                            <ActionContainer>
                                <NumItemsButton>
                                    <Button type="button" size="small"
                                            onClick={() => setNumItems(numItems - 1)}>-</Button>
                                    <Typography>{numItems}</Typography>
                                    <Button type="button" size="small"
                                            onClick={() => setNumItems(numItems + 1)}>+</Button>
                                </NumItemsButton>
                                <CartButton area-label="Add to Cart" onClick={() => onAddToCart(product.id, numItems, selectedVariant)}>Add to Cart</CartButton>
                            </ActionContainer>
                            <H1 style={{paddingBottom: '20px', fontSize: '20px'}}>
                                {product.price.sku}
                            </H1>
                        </TextContainer>
                    </Wrapper>
                </Container>
            </>
        )
    }
export default ProductPage;