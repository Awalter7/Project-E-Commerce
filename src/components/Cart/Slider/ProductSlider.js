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
import {Button, Tooltip} from "@mui/material";




const ProductSlider = ({ products, onAddToCart, type}) => {
    const [productList, setProductList] = useState([])
    const [pass, setPass] = useState(true)

    const classes = useStyles();
    const size = useWindowSize();


    let slidesPerView = 4;

    console.log(size.width)
    if(size.width <= 650){
        slidesPerView = 1;
    } else if (size.width <= 970){
        slidesPerView = 2;

    } else if (size.width <= 1270){
        slidesPerView = 3;
    } else{
        slidesPerView = 4;
    }

    useEffect(() => {
        if (type == "Featured"){
            if (pass === true && products.length != 0) {
                for (let i = 0; i < products.length; i++) {
                    if (products[i].categories.length !== 0) {
                        if (products[i].categories[0].name == "Featured") {
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




            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={0}
                slidesPerView={slidesPerView}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >

                    {productList.map((product) => (
                        <SwiperSlide>
                            <Product className={classes.proC} product={product} onAddToCart={onAddToCart}/>
                        </SwiperSlide>
                    ))}

                ...
            </Swiper>
            <Link to="/shop"><Button style={{ height: '65px', width: '200px', color: "#caa989", border: "2px solid #caa989", borderRadius: "50px", marginBottom: '10px', marginTop: '10px'}}> View All Products</Button></Link>
        </main>
    )
}

export default ProductSlider;