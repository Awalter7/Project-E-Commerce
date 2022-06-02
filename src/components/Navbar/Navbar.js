import React from 'react';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavImg } from './Components/NavElements';
import { Link } from 'react-router-dom'
import { ShoppingCart, AccountCircle, Search } from "@material-ui/icons";
import { IconButton, Badge } from '@material-ui/core'
import {Tooltip} from "@mui/material";

const Navbar = ({ totalItems, toggleNavVisibility}) => {



    return (
        <>
            <Nav>

                <NavImg to='/'>
                    <img style={{width: "90px"}}src={require('../Assets/icon.png')} alt='logo' />
                </NavImg>
                <Bars onClick={() => (toggleNavVisibility())}/>
                <NavMenu>
                    <NavLink to='/' activeStyle>
                        HOME
                    </NavLink>
                    <NavLink to='/Shop' activeStyle>
                        SHOP
                    </NavLink>
                    <NavLink to='/services' activeStyle>
                        CONTACT US
                    </NavLink>
                    <NavLink to='/contact-us' activeStyle>
                        WHOLE SALE
                    </NavLink>
                    <NavLink to='/contact-us' activeStyle>
                    </NavLink>
                    {/* Second Nav */}
                    {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
                </NavMenu>
                <NavBtn>
                    <Tooltip title="Search" arrow={true}>
                        <IconButton style={{color: "white"}} component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                            <Search/>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Account" arrow={true}>
                        <IconButton style={{color: "white"}} component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                            <AccountCircle />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Cart" arrow={true}>
                        <IconButton style={{color: "white"}} component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={totalItems} color={"secondary"} >
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </Tooltip>
                </NavBtn>
            </Nav>
        </>
    );
};

export default Navbar;