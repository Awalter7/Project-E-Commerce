import React from 'react'
import PaymentIcon from 'react-payment-icons';
import {
    Wrapper,
    Row,
    FooterHeader,
    Contactinput,
    RowFlexGrow,
    ContainerCollumn
} from '../../../Elements/HomePageElements';
import {Button, Input} from "@mui/material";
import {BlankSpacer} from "../../../index";

import useStyles from './styles'

const Contact = () => {

    const classes = useStyles();

    return (
        <>
            <ContainerCollumn className={classes.container}>
                <Wrapper className={classes.wrapper}>
                    <Row className={classes.row}>
                        <FooterHeader> Subscribe to our Newsletter </FooterHeader>
                    </Row>
                    <RowFlexGrow>
                        <Contactinput></Contactinput>
                    </RowFlexGrow>
                    <Row className={classes.row}>
                       <Button style={{height: '55px', width: '180px', color: "#caa989", border: "2px solid #caa989", borderRadius: "30px"}}>Submit</Button>
                    </Row>
                </Wrapper>
            </ContainerCollumn>

        </>
    )
}

export default Contact