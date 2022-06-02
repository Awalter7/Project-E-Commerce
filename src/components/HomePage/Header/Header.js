import React from 'react'
import {ContainerRow, H1, H2, TextContainer, Wrapper} from '../../Elements/HomePageElements'

import useStyles from "./styles"

const Header = () => {

    const classes = useStyles();

    return(
        <>
            <ContainerRow className={classes.container}>
                <Wrapper className={classes.wrapper}>
                    <TextContainer>
                        <H1>
                            Nubas Atlas reinventing how you smoke.
                        </H1>
                        <H2 className={classes.subHeader} style={{}}>
                            Smoke responsibly
                        </H2>
                    </TextContainer>
                </Wrapper>
            </ContainerRow>
        </>
    )
}

export default Header;