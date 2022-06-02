import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
export const NavAttachment = styled.div`
    width: 100%;
  height: 30px;
  background-color: rgb(6, 8, 74);
  color: white;
  padding-top: 10px;
  padding-bottom: 0px;
  text-align: center;
  font-family: Font2;
`

export const Nav = styled.nav`
  background: #000;
  height: 70px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1500px) / 2);
  z-index: 10;
  
  /* Third Nav */
  /* justify-content: flex-start; */
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  left: 50px;
  position: relative;
  cursor: pointer;
  font-family: Font2;

  &.active {
    color: #feae67;
  }
`;
export const NavImg = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  left: 50px;
  position: relative;
  cursor: pointer;
  font-family: Font2;

  @media screen and (max-width: 841px) {
    display: none;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 841px) {
    display: block;
    position: relative;
    top: 0;
    right: 0;
    transform: translate(100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  /* Second Nav */
  /* margin-right: 24px; */

  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */

  @media screen and (max-width: 841px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  /* Second Nav */
  margin-left: 24px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #caa989;
  }
`;