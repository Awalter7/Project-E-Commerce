import React from 'react';
import { Typography, Button, Grid } from '@material-ui/core';
import {Bar, ContainerCollumn, TextContainer} from '../Elements/HomePageElements'
import { Link } from 'react-router-dom';
import useStyles from './styles';
import CartItem from "./CartItem/CartItem";
import ProductSlider from "../HomePage/Slider/ProductSlider";

const Cart = ({ handleAddToCart, products, cart, handleEmptyCart, handleRemoveFromCart, handleUpdateCartQty }) => {
    const classes = useStyles();
    console.log("test")

    if (!cart.line_items) return 'Loading';

    const isEmpty = cart.line_items.length == 0;
    console.log(cart.line_items.length)
    console.log(isEmpty)



    const EmptyCart = () => (
        <>
            <Typography style={{color: 'white'}} variant="subtitle1">You have no items in your shopping cart,
                <Link className={classes.link} to="/">start adding some</Link>!
            </Typography>

        </>
    );

    const FilledCart = () => (
        < >
            <Grid  container justifyContent="left" style={{maxWidth: '100%'}} spacing={3}>
                {cart.line_items.map((item) => (
                    <Grid  item>
                        <CartItem item={item} handleRemoveFromCart={handleRemoveFromCart} handleUpdateCartQty={handleUpdateCartQty}/>
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cartDetails}>
                <div  className={classes.subtotal}>
                    <Typography style={{fontFamily: 'font4'}}>
                        Subtotal:
                    </Typography>
                    <Typography style={{ fontFamily: 'font4'}}>
                        <TextContainer style={{ maxWidth: '150px'}}>
                            <div style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'left'}}>
                                {cart.subtotal.formatted_with_symbol}
                            </div>
                            <div style={{color: 'lightgray', fontSize: '10px'}}>
                                Taxes and shipping calculated at checkout
                            </div>


                        </TextContainer>

                    </Typography>
                </div>
                <div className={classes.buttonGroup}>
                    <Button style={{ fontFamily: 'font4', fontWeight: '200'}} className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Empty cart</Button>
                    <Button component={Link} style={{ fontFamily: 'font4', fontWeight: '200'}} className={classes.checkoutButton} to="/checkout" size="large" type="button" variant="contained" color="primary">Checkout</Button>
                </div>
            </div>
        </>
    );



    return (
        <>
            <ContainerCollumn className={classes.container}>
                <div className={classes.toolbar} />
                <Typography style={{fontFamily: 'font2'}} className={classes.title} variant="h3" gutterBottom>Your Shopping Cart</Typography>
                <div className={classes.toolbar} />
                { isEmpty ? < EmptyCart /> : <FilledCart /> }
            </ContainerCollumn>
            < ProductSlider products={products} onAddToCart={handleAddToCart} type={"Featured"} header={"Featured Products"}/>
        </>

    );
};

export default Cart;