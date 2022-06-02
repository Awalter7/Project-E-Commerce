import React from 'react'
import {InstagramEmbed} from "react-social-media-embed";
import {Button, Tooltip} from "@mui/material";
import {H2, H1, TextContainer, ContainerRow, Wrapper} from "../../Elements/HomePageElements"
import {Instagram} from "@material-ui/icons";
import Footer from "../../Footer/Components/Footer/Footer";

import useStyles from "./styles"

const Social = () => {
    const classes = useStyles();

    return (
        <>
            <ContainerRow className={classes.container}>
                <Wrapper className={classes.wrapper}>
                    <TextContainer className={classes.textContainer}>
                        <H1>
                            Follow Nubas Atlas
                        </H1 >
                        <H1>
                            on Instagram
                        </H1>
                        <H2 className={classes.subHeader}>
                            #NubasAtlas
                        </H2>
                        <Button  style={{ height: '65px', width: 'max-content', color: "#feae66", border: "2px solid #feae66", borderRadius: "50px", marginBottom: '10px', marginTop: '10px'}}><Footer.Link href="#"><Tooltip title='Instagram' arrow={true}><Instagram style={{marginTop: '5px', color: "#feae66"}}/></Tooltip></Footer.Link> Follow us on Instagram</Button>
                    </TextContainer>
                    <Wrapper style={{padding: '0px', minWidth: '200px'}}>
                    <InstagramEmbed url="https://www.instagram.com/p/CUbHfhpswxt/" style={{display: 'flex', flexWrap: 'wrap', flexShrink: '1', padding: '50px', width: 'auto'}} height={300}/>

                    </Wrapper>
                </Wrapper>
            </ContainerRow>
        </>
    )
}

export default Social