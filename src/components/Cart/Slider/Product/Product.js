import React from 'react'
import { CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core';
import useStyles from '../../../Products/Product/Styles/styles'
import {CardContainer, PName, PPrice, CartButton} from '../../../Products/Product/Components/ProductElements'
import {Link} from "react-router-dom";
const Product = ({ product, onAddToCart }) => {
    const classes = useStyles();




    return(

        <CardContainer style={{ border: '1px solid #caa989'}}>
            <cards  className={classes.root} >
                <Link to={`/product/${product.id}`} >
                    <CardMedia style={{backgroundColor: "white",}} className={classes.media} image={product.image.url} title={product.name}/>
                </Link>
                <CardContent>
                    <div className={classes.cardContent}>
                        <PName>
                            {product.name}
                        </PName>
                        <PPrice variant="h5">
                            {product.price.formatted_with_symbol}
                        </PPrice>
                    </div>
                </CardContent>
                <CardActions disableSpacing className={classes.cardActions}>
                </CardActions>
            </cards>

        </CardContainer>
    )
}

export default Product;