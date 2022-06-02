import React from "react"
import Footer from './Components/Footer/Footer'
import { Facebook, Instagram, YouTube, Twitter } from "@material-ui/icons";
import {Link} from "react-router-dom";
import PaymentTypesBar from "./Components/PaymentTypesBar/PaymentTypesBar";
import Contact from "./Components/Contact/Contacts";
import {Tooltip} from "@mui/material";

const FooterContainer = () => {
    return (
        <Footer>
            <Contact />
            <Footer.Wrapper>
                <Footer.Row>
                    <img style={{width: "90px", marginTop: "-25px"}}src={require('../Assets/icon.png')} alt='logo' />
                </Footer.Row>
                <Footer.Row>
                        <Footer.Link href="#">CLIENTS</Footer.Link>
                        <Footer.Link href="#">TESTIMONIALS</Footer.Link>
                        <Footer.Link href="#">MARKETING</Footer.Link>
                        <Footer.Link href="#">CONSULTING</Footer.Link>
                        <Footer.Link href="#">DEVELOPMENT</Footer.Link>
                        <Footer.Link href="#">DESIGN</Footer.Link>
                </Footer.Row>
                <Footer.Row>
                    <Footer.Link href="#"><Tooltip title='Facebook' arrow={true}><Facebook /></Tooltip></Footer.Link>
                    <Footer.Link href="#"><Tooltip title='Instagram' arrow={true}><Instagram /></Tooltip></Footer.Link>
                    <Footer.Link href="#"><Tooltip title='Youtube' arrow={true}><YouTube /></Tooltip></Footer.Link>
                    <Footer.Link href="#"><Tooltip title='Twitter' arrow={true}><Twitter /></Tooltip></Footer.Link>
                </Footer.Row>

            </Footer.Wrapper>
            <PaymentTypesBar />

        </Footer>
    )
}

export default FooterContainer