import React, {useEffect, useRef} from 'react';
import Product from "./Product/Product";
import {Grid} from "@material-ui/core";
import useStyles from './Styles/styles'
import ImageSpacer from "../Spacer/ImageSpacer"
import BlankSpacer from "../Spacer/BlankSpacer";
import {Link} from "react-router-dom";






const Products = ({ products, onAddToCart}) => {
    const classes = useStyles();
    const ref = useRef(null);



    return(
      <main class='' className={classes.main}>
          <ImageSpacer />

          <Grid ref={ref} container justifyContent="center"  spacing={2}>
              {products.map((product) => (
                  <Grid className={classes.grid + ' ' + 'animate-on-scroll-' + products.indexOf(product)}  item key={product.id} xs={6} sm={6} md={"auto"} lg={"auto"}>
                      <Product className={classes.proC} product={product} onAddToCart={onAddToCart} />
                  </Grid>
                  ))}
          </Grid>
      </main>
    )
}

export default Products;