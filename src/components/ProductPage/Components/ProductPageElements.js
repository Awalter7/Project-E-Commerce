import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  padding: 50px;
  padding-top: 100px;
  padding-bottom: 100px;
  width: auto;
  flex-shrink: 1;
  height: 100%;
  background-color: white;
  @media screen and (max-width: 888px) {
  }
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex-shrink: 1;
  justify-content: space-around;
  max-width: 1200px;
  margin: 0 auto;
  @media screen and (max-width: 657px) {
    justify-content: space-around;
  }
`
export const PImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;
  flex-shrink: 1;
  margin-bottom: 20px;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
  
`
export const TextContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-shrink: 1;
  color: black;
  width: 500px;
  flex-direction: column;
  align-items: flex-start;
`
export const Discription = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  flex-shrink: 1;
  font-family: font4;
  color: grey;
  text-align: left;
  font-size: 15px;
`
export const H1 = styled.div`
  width: auto;
  display: flex;
  justify-content: left;
  flex-shrink: 1;
  font-family: font4;
  text-align: left;
  font-size: 30px;
`
export const H2 = styled.div`
  width: auto;
  display: flex;
  justify-content: left;
  font-family: font1;
  flex-shrink: 1;
  text-align: left;
  font-weight: 100;
  font-size: 30px;
`
export const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  flex-shrink: 1;
  
`
export const CartButton = styled.button`
  height: 55px;
  width: 180px;
  color: black;
  border: 2px solid black;
  border-radius: 30px;
  &:hover {
    background-color: #caa989;
    transition: 200ms ease-in;
  }
`
export const NumItemsButton = styled.div`
  border: 1px solid black;
  height: 50px;
  display: flex;
  width: min-content;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
`
export const Reviews = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    margin-bottom: 10px;
    height: min-content;
    color: white;
    background-color: black;
`