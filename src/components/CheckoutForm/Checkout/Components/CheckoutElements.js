import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  padding-left: 100px;
  padding-right: 100px;
  width: auto;
  height: 100%;
`
export const CheckoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  border-right: 1px solid grey;
  height: 100vh;
  flex-shrink: 1;
  max-width: 500px;
  padding-top: 50px;
  padding-right: 50px;
`
export const CartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  flex-shrink: 3;
  height: 100vh;
  max-width: 500px;
  padding-top: 50px;
  padding-left: 50px; 
`