import React from 'react'
import {ContainerRow, ImageContainer, Wrapper} from '../../Elements/HomePageElements'

import useStyles from "./styles"

const Header = () => {
    const classes = useStyles();

    return(
        <>
            <ContainerRow className={classes.container}>
                <ImageContainer className={classes.imageContainer}>
                    test
                </ImageContainer>
                <ImageContainer className={classes.imageContainer}>
                        test
                </ImageContainer>
            </ContainerRow>
        </>
    )
}

export default Header;