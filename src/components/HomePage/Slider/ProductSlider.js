import React, {useEffect, useState} from 'react';
import useWindowSize from "../../Hooks/useWindowSize";
import Product from "./Product/Product";
import useStyles from './Styles/styles'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {A11y, Navigation, Pagination, Scrollbar} from "swiper";
import { Link } from 'react-router-dom'
import {Button} from "@mui/material";
import {H1} from "../../Elements/HomePageElements";




const ProductSlider = ({ products, onAddToCart, type, header}) => {
    const [productList, setProductList] = useState([])
    const [pass, setPass] = useState(true)

    const classes = useStyles();
    const size = useWindowSize();

    let productWidth = "auto";
    let slidesPerView = 4;

    console.log(size.width)
    if(size.width <= 810){
        slidesPerView = 1;
    } else if (size.width <= 1190){
        slidesPerView = 2;

    } else if (size.width <= 1590){
        slidesPerView = 3;
    } else{
        slidesPerView = 4;
    }

    useEffect(() => {
        if (type != null){
            if (pass === true && products.length != 0) {
                for (let i = 0; i < products.length; i++) {
                    if (products[i].categories.length !== 0) {
                        if (products[i].categories[0].name == type) {
                            setProductList(productList => [...productList, products[i]]);
                        }
                    }
                }
                setPass(false);
            }
        }else{
            setProductList(products)
        }
    })


    return(
        <main style={{backgroundColor: "black"}} className={classes.main}>

                <H1 className={classes.header} style={{color: 'white', paddingBottom: '75px'}}>
                    {header}
                </H1>


            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={0}
                slidesPerView={slidesPerView}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                style={{position: "relative", width: '80%', padding: '20px', margin: '0 auto'}}
            >

                    {productList.map((product) => (
                        <SwiperSlide>
                            <Product  className={classes.proC} product={product} onAddToCart={onAddToCart}/>
                        </SwiperSlide>
                    ))}

                ...

            </Swiper>

            <Link to="/shop" style={{width: 'min-content'}}><Button style={{display:"flex", flexDirection: "row", alignItems: "center",    height: '65px', width: '200px', color: "#ffc863", border: "2px solid #ffc863", borderRadius: "50px", marginBottom: '10px', marginTop: '10px'}}> View All Products</Button></Link>
        </main>
    )
}

export default ProductSlider;