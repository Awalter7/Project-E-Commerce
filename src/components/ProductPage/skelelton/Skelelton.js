import React, {useEffect, useState} from 'react'
import {
    ActionContainer,
    Container,
    Discription,
    H1,
    H2, NumItemsButton,
    PImage,
    TextContainer,
    Wrapper
} from './SkeleltonElements'
import {Button, Typography} from "@material-ui/core";
import {CartButton} from "../../Products/Product/Components/ProductElements";

const ProductSkelelton = () => {


    return (
        <>

            <Container>
                <Wrapper>
                    <PImage>
                        <img   style={{height: "500px", color: "white"}} />
                    </PImage>
                    <TextContainer>
                        <H1 style={{paddingBottom: '30px'}}>

                        </H1>
                        <H1 style={{paddingBottom: '20px', fontSize: '20px'}}>

                        </H1>
                        <Discription color="secondary">
                        </Discription>
                        <ActionContainer>
                            <NumItemsButton>
                                <Button type="button" size="small">-</Button>
                                <Typography>1</Typography>
                                <Button type="button" size="small">+</Button>
                            </NumItemsButton>
                            <CartButton area-label="Add to Cart" >Add to Cart</CartButton>
                        </ActionContainer>
                        <H1 style={{paddingBottom: '20px', fontSize: '20px'}}>
                        </H1>

                    </TextContainer>
                </Wrapper>
            </Container>
        </>
    )
}

export default ProductSkelelton;