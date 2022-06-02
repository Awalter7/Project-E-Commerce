import React from 'react'
import PaymentIcon from 'react-payment-icons';
import { ContainerRow , Wrapper, Row, Link } from '../../../Elements/HomePageElements';
import {Tooltip} from "@mui/material";

import useStyles from './styles'

const PaymentTypesBar = () => {
    const classes = useStyles();

    return (
        <ContainerRow className={classes.container}>
            <Wrapper className={classes.wrapper}>
                <Row>
                    <Link href="src/components/Footer/Components/PaymentTypesBar/PaymentTypesBar#">Copyright © 2022, Nubas Atlas
                        Design and Utility Patent(s) Pending</Link>
                </Row>
                <Row>
                    <Tooltip title='Visa' arrow={true}><Link href="src/components/Footer/Components/PaymentTypesBar/PaymentTypesBar#"><PaymentIcon id="visa" style={{ width: 40 }} className="payment-icon"/></Link></Tooltip>
                    <Tooltip title='MasterCard' arrow={true}><Link href="src/components/Footer/Components/PaymentTypesBar/PaymentTypesBar#"><PaymentIcon id="mastercard" style={{ width: 40 }} className="payment-icon"/></Link></Tooltip>
                    <Tooltip title='PayPal' arrow={true}><Link href="src/components/Footer/Components/PaymentTypesBar/PaymentTypesBar#"><PaymentIcon id="paypal" style={{ width: 40 }} className="payment-icon"/></Link></Tooltip>
                    <Tooltip title='Discover' arrow={true}><Link href="src/components/Footer/Components/PaymentTypesBar/PaymentTypesBar#"><PaymentIcon id="discover" style={{ width: 40 }} className="payment-icon"/></Link></Tooltip>
                    <Tooltip title='American Express' arrow={true}><Link href="src/components/Footer/Components/PaymentTypesBar/PaymentTypesBar#"><PaymentIcon id="amex" style={{ width: 40 }} className="payment-icon"/></Link></Tooltip>
                </Row>
            </Wrapper>
        </ContainerRow>
    )
}

export default PaymentTypesBar