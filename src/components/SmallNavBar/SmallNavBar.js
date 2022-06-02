import React, {useState} from 'react';
import {ContainerCollumn, Wrapper} from "../Elements/HomePageElements";
import {Button, Link} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import styled from "styled-components";

const SmallNavBar = ({toggleNavVisibility, NavVisibility }) => {



    return(
        <>
            <ContainerCollumn style={{zIndex: '500', overflow: 'hidden', fontFamily: 'font2', top: '0px', color: 'white', backgroundColor: 'black', height: '100%', width: '100%', position: 'fixed', visibility: NavVisibility}}>
                <Button onClick={() => (toggleNavVisibility())} style={{ padding: '20px', position: 'absolute', top: '0px', color: 'white'}}>
                    <CloseIcon style={{fontSize: '50'}}/>
                </Button>
                <Wrapper style={{width: '100%'}}>
                    <Link  class="navItem" href={'/'} style={{ textDecoration: 'none', textAlign: 'center', fontSize: '1.5rem', paddingTop: '25px', paddingBottom: '25px', width: '100%', }}>
                        <a  >Home</a>
                    </Link>
                    <Link  class="navItem" href={'/Shop'}  to='/Shop' style={{ textDecoration: 'none', textAlign: 'center', fontSize: '1.5rem', paddingTop: '25px', paddingBottom: '25px', width: '100%'}}>
                        <a >Products</a>
                    </Link>
                    <Link class="navItem" style={{textDecoration: 'none', textAlign: 'center', fontSize: '1.5rem', paddingTop: '25px', paddingBottom: '25px', width: '100%'}}>
                        <a>Whole Sale</a>
                    </Link>
                </Wrapper>
            </ContainerCollumn>
        </>
        )

}

export default SmallNavBar;