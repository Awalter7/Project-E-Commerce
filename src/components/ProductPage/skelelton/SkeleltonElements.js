import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  padding-top: 100px;
  padding-bottom: 100px;
  width: 100%;
  height: 100%;
  background-color: white;
  @media screen and (max-width: 888px) {
  }
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 1200px;
  margin: 0 auto;
  @media screen and (max-width: 657px) {
    justify-content: space-around;
  }
`
export const PImage = styled.div`
  display: flex;
  justify-content: center;
  width: 500px;
  height: 300px;
  margin-bottom: 20px;

  animation : shimmer 2s infinite linear;
  background: linear-gradient(to right, #eff1f3 4%, #e2e2e2 25%, #eff1f3 36%);
  background-size: 1000px 100%;

  @keyframes shimmer {
    0% {
      background-position: -1000px 0;
    }
    100% {
      background-position: 1000px 0;
    }
  }
`
export const TextContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: black;
  width: 500px;
  flex-direction: column;
  align-items: center;
`
export const Discription = styled.div`
  width: 100%;
  display: flex;
  justify-content: left;
  font-family: font4;
  color: grey;
  text-align: left;
  font-size: 15px;
  margin-top: 10px;
  height: 100px;
  border-radius: 10px;
  animation : shimmer 2s infinite linear;
  background: linear-gradient(to right, #eff1f3 4%, #e2e2e2 25%, #eff1f3 36%);
  background-size: 1000px 100%;

  @keyframes shimmer {
    0% {
      background-position: -1000px 0;
    }
    100% {
      background-position: 1000px 0;
    }
  }
`
export const H1 = styled.div`
  width: 100%;
  display: flex;
  justify-content: left;
  font-family: font4;
  text-align: left;
  font-size: 30px;
  margin-top: 10px;
  height: 50px;
  
  animation : shimmer 2s infinite linear;
  background: linear-gradient(to right, #eff1f3 4%, #e2e2e2 25%, #eff1f3 36%);
  background-size: 1000px 100%;

  border-radius: 10px;
  
  @keyframes shimmer {
    0% {
      background-position: -1000px 0;
    }
    100% {
      background-position: 1000px 0;
    }
  }
`
export const H2 = styled.div`
  width: 100%;
  display: flex;
  justify-content: left;
  font-family: font1;
  text-align: left;
  font-weight: 100;
  font-size: 30px;
  margin-top: 10px;
  height: 50px;
  border-radius: 10px;
  animation : shimmer 2s infinite linear;
  background: linear-gradient(to right, #eff1f3 4%, #e2e2e2 25%, #eff1f3 36%);
  background-size: 1000px 100%;

  @keyframes shimmer {
    0% {
      background-position: -1000px 0;
    }
    100% {
      background-position: 1000px 0;
    }
  }
`
export const ActionContainer = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 500px;
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