import React from 'react'
import { CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core';
import useStyles from './styles'
import {CardContainer, PName, PPrice, CartButton} from '../../../Products/Product/Components/ProductElements'
import {Link} from "react-router-dom";
const Product = ({ product, onAddToCart }) => {
    const classes = useStyles();



    const url = new URL(
        "https://api.chec.io/v1/products/" + product.id
    );

    product.attributes[2].value = {name: ['test']};

    let headers = {
        "X-Authorization": "sk_test_42760644b2a64f1d6eff5b45647771e37563f221c1f64",
        "Content-Type": "application/json",
        "Accept": "application/json",
    };
    product.meta ="test";
    console.log(product)

    let body = {
        "attributes": [
            {
                "id": "attr_kpnNwAyzXwmXB3",
                "value": "Ohio"
            }
        ]
    }

    fetch(url, {
        method: "PUT",
        headers: headers,
        body: body
    })
        .then(response => response.json())
        .then(json => console.log(json), '-----');




    return(

        <CardContainer style={{ border: '1px solid #feae66'}}>
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

            </cards>

        </CardContainer>
    )
}

export default Product;