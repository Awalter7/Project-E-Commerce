import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {A11y, Navigation, Pagination, Scrollbar} from "swiper";
import { Link } from 'react-router-dom'
import {Button, Tooltip} from "@mui/material";

const images = [
    { id: 1, src: './assets/4Banner.webp', title: 'foo', description: 'bar' },
    { id: 2, src: './assets/3Banner.jpg', title: 'foo', description: 'bar' },
    { id: 3, src: './assets/2Banner.jpg', title: 'foo', description: 'bar' },
    { id: 4, src: './assets/1Banner.jpg', title: 'foo', description: 'bar' },
];


const ProductSlider = ({ products, onAddToCart}) => {

    let slidesPerView = null;

    return(
        <main style={{backgroundColor: "black"}}>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >

                {images.map((image) => (
                    <SwiperSlide>
                        <img src={require(image.src)}/>
                    </SwiperSlide>
                ))}

                ...
            </Swiper>

        </main>
    )
}

export default ProductSlider;