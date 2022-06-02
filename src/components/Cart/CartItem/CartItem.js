import React, {useEffect, useState} from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia} from '@material-ui/core';

import useStyles from './styles.js'
import {set} from "react-hook-form";
import {commerce} from "../../../lib/commerce";

const CartItem = ({ item, handleRemoveFromCart, handleUpdateCartQty}) => {
    const [variant, setVariant] = useState(item.name);



    useEffect(() => {
        if(item.variant){
            const rawVariant = commerce.products.getVariant(item.product_id, item.variant.id)
            console.log(rawVariant)
            setVariant(item.name + ' ' + rawVariant.name)
        }
    }, [])


    console.log()
    const classes = useStyles();
    console.log(item)
    return (
        <Card  className={classes.card}>
            <CardMedia image={item.image.url} alt={item.name} className={classes.media} />
            <CardContent className={classes.cardContent}>
                <Typography variant="h4" style={{fontSize: '17px', fontFamily: 'font2'}}>
                    {variant}
                    {item.selected_options.map((option) => (
                        " " + option.option_name + " "
                    ))}
                </Typography>
                <Typography variant="h5" style={{fontSize: '15px', fontFamily: 'font3'}}>
                    {item.line_total.formatted_with_symbol}
                </Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button variant="contained" type="button" style={{backgroundColor: 'inherit', boxShadow: 'none', textDecoration: 'underline', color: 'white'}} onClick={() => handleRemoveFromCart(item.id)}>Remove</Button>
                <div className={classes.buttons}>
                    <Button style={{color: 'white'}} type="button" size="small" onClick={() => handleUpdateCartQty(item.id, item.quantity-1)}>-</Button>
                    <Typography>{item.quantity}</Typography>
                    <Button style={{color: 'white'}} type="button" size="small" onClick={() => handleUpdateCartQty(item.id, item.quantity+1)}>+</Button>
                </div>

            </CardActions>
        </Card>
    )
}

export default CartItem