import React from 'react'
import {Choose, Footer, Header, Social, VideoLoader, ProductSlider} from "./Index"


const HomePage = ({ products, handleAddToCart}) => {
    return(
        <>

            <Header />
            <Choose />
            <Social />
            <ProductSlider products={products} onAddToCart={handleAddToCart} header={'Popular Items'}/>
            <Footer />
        </>
    )
}

export default HomePage;