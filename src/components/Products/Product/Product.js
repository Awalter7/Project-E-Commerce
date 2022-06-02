import React, {useEffect, useRef, useState} from 'react'
import { CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core';
import useStyles from './Styles/styles'
import {CardContainer, PName, PPrice, CartButton} from './Components/ProductElements'
import {Link} from "react-router-dom";
import {useInView} from 'react-intersection-observer';
import {useAnimation, motion} from "framer-motion";


const Product = ({ product, onAddToCart }) => {
    const classes = useStyles();
    const [isIntersecting, setIsIntersecting] = useState(false);

    const animation = useAnimation();
    const {ref, inView} =  useInView()


    useEffect(() => {
        if(inView){
            animation.start({
                y: 0,
                transition:{
                    type: 'spring', duration: 1
                }
            })
        }
    }, [inView])



    return(

        <CardContainer animate={animation} initial={{y: 100}} component={motion.div} ref={ref}>
            <cards  className={classes.root}  >
                <Link to={`/product/${product.id}`} >
                    <CardMedia style={{backgroundColor: "white"}} className={classes.media} image={product.image.url} title={product.name}/>
                </Link>
                <CardContent>
                    <div className={classes.cardContent}>
                        <PName  style={{color: 'black'}}>
                            {product.name}
                        </PName>
                        <PPrice  style={{color: 'black'}} variant="h5">
                            {product.price.formatted_with_symbol}
                        </PPrice>
                    </div>
                </CardContent>

            </cards>

        </CardContainer>
    )
}

export default Product;