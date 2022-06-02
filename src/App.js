
import React, { useState, useEffect} from "react";
import './App.css';
import { commerce } from "./lib/commerce"
import {
    Navbar,
    Products,
    Cart,
    Footer,
    ProductPage,
    Account,
    HomePage, PopUp
} from "./components";
import Checkout from './components/CheckoutForm/Checkout/Checkout'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import SmallNavBar from "./components/SmallNavBar/SmallNavBar";
import popUp from "./components/PopUp/PopUp";



function App() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});
    const [order, setOrder] = useState({});
    const [discounts, setDiscounts] = useState({})
    const [errorMessage, setErrorMessage] = useState('');
    const [cartVariants, setCartVariants] = useState([])
    const [navVisibility, setNavVisibility] = useState('hidden')
    const [confirmAgeVisibility, setConfirmAgeVisibility] = useState('visible')

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();
        setProducts(data);
    }

    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve());
    }

    const handleAddToCart = async (productId, quantity, variantInfo) => {

        if(variantInfo) {


            console.log(variantInfo);
            commerce.cart.add(productId, quantity, variantInfo)
                .then(res => {
                    setCart(res.cart)
                })
        } else {
            window.alert('Please Select a Flavor')
        }
    }

    const fetchDiscounts = async  () => {
        const url = new URL(
            "https://api.chec.io/v1/discounts"
        );

        let headers = {
            "X-Authorization": "sk_test_42760644b2a64f1d6eff5b45647771e37563f221c1f64",
            "Accept": "application/json",
            "Content-Type": "application/json",
        };

        fetch(url, {
            method: "GET",
            headers: headers,
        })
            .then(response => response.json())
            .then(json => setDiscounts(json));

    }

    const handleUpdateCartQty = async (productId, quantity) => {
        const { cart }  = await commerce.cart.update(productId, { quantity })

        setCart(cart)
    }

    const handleRemoveFromCart = async (productId) => {
        const { cart } = await commerce.cart.remove(productId);

        setCart(cart);
    }

    const handleEmptyCart = async () => {
        const { cart } = await commerce.cart.empty();

        setCart(cart)
    }

    const refreshCart = async () => {
        const newCart = await commerce.cart.refresh();

        setCart(newCart);
    };

    const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
        try {
            const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

            setOrder(incomingOrder);

            refreshCart();
        } catch (error) {
            setErrorMessage(error.data.error.message);
        }
    };

    const handleToggleBigNav = () => {
        if(navVisibility == 'visible'){
            setNavVisibility('hidden')
        }else{
            setNavVisibility('visible')
        }
    }
    const handleToggleConfirmAge = () => {
        if(confirmAgeVisibility == 'visible'){
            setConfirmAgeVisibility('hidden')
        }else{
            setConfirmAgeVisibility('visible')
        }

    }

    useEffect(() => {
        fetchProducts();
        fetchDiscounts();
        fetchCart();

    }, [])

    console.log(navVisibility)
      return (
          <Router >
              <Routes>
                  <Route path="/" element={
                      <>
                          <Navbar toggleNavVisibility={handleToggleBigNav} NavVisibility={navVisibility} totalItems={cart.total_items} />
                          <SmallNavBar toggleNavVisibility={handleToggleBigNav} NavVisibility={navVisibility}/>
                          <PopUp handleToggleConfirmAge={handleToggleConfirmAge} confirmAgeVisibility={confirmAgeVisibility}/>
                          <HomePage products={products} onAddToCart={handleAddToCart} />
                      </>
                  }>
                  </Route>
                  <Route path="/Shop" element={
                      <>
                          <Navbar  toggleNavVisibility={handleToggleBigNav} totalItems={cart.total_items} />
                          <SmallNavBar toggleNavVisibility={handleToggleBigNav} NavVisibility={navVisibility}/>
                          <PopUp handleToggleConfirmAge={handleToggleConfirmAge} confirmAgeVisibility={confirmAgeVisibility}/>
                          <Products  products={products} onAddToCart={handleAddToCart}/>
                          <Footer />
                      </>
                  }>
                  </Route>
                  <Route path="/cart" element={
                      <>
                          <Navbar toggleNavVisibility={handleToggleBigNav} totalItems={cart.total_items} />
                          <SmallNavBar toggleNavVisibility={handleToggleBigNav} NavVisibility={navVisibility}/>
                          <PopUp handleToggleConfirmAge={handleToggleConfirmAge} confirmAgeVisibility={confirmAgeVisibility}/>
                          <Cart  cart={cart}  products={products} onAddToCart={handleAddToCart} handleUpdateCartQty={handleUpdateCartQty} handleRemoveFromCart={handleRemoveFromCart} handleEmptyCart={handleEmptyCart} />
                          <Footer />
                      </>
                  }>
                  </Route>
                  <Route path="/checkout" element={
                      <>
                          <PopUp handleToggleConfirmAge={handleToggleConfirmAge} confirmAgeVisibility={confirmAgeVisibility}/>
                          <Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage} />
                      </>
                  }>
                  </Route>
                  <Route path="product/:productId" element={
                      <>
                          <Navbar toggleNavVisibility={handleToggleBigNav} totalItems={cart.total_items} />
                          <SmallNavBar toggleNavVisibility={handleToggleBigNav} NavVisibility={navVisibility}/>
                          <ProductPage  discounts={discounts} products={products} onAddToCart={handleAddToCart}/>
                          <Footer />
                      </>
                  }>

                  </Route>
                  <Route path="/account" element={
                      <>
                          <Navbar toggleNavVisibility={handleToggleBigNav} totalItems={cart.total_items} />
                          <SmallNavBar toggleNavVisibility={handleToggleBigNav} NavVisibility={navVisibility}/>
                          <Account/>
                          <Footer />
                      </>
                  }>
                  </Route>
              </Routes>
          </Router>
      );

}


export default App;
