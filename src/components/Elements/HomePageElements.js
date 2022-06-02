import styled from "styled-components";
import {motion} from "framer-motion";

export const Contactinput = styled.input`
  min-width: 50px;
  display: flex;
  flex-grow: 1;
  border: none;
  margin-left: 10px;
  margin-right: 10px;
  min-height: 50px;
  background-color: rgb(41, 42, 43);
`
export const ContainerCollumn = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const ContainerRow = styled.div`
  display: flex;
  width: auto;
  flex-shrink: 1;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0 auto;
  padding-top: 100px;
  padding-bottom: 100px;
  @media screen and (max-width: 657px) {
    justify-content: space-around;
  }
  
  /* background: red; */
`
export const Row = styled.div`
  display: flex;
  max-width: max-content;
  flex-wrap: wrap;
  flex-direction: row;
`
export const RowFlexGrow = styled.div`
  padding-bottom: 25px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  flex-grow: 1;
`

export const TextContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: white;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;
`
export const FooterHeader = styled.div`
  font-size: 40px;
  font-family: font2;
`
export const H1 = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  text-align: center;
  flex-shrink: 1;
  font-family: font2;
  font-weight: 700;
  font-size: 50px;
`
export const H2 = styled.div`
  margin-top: 50px;
  width: 100%;
  display: flex;
  justify-content: space-around;

`
export const ImageContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  margin: 20px;
  width: 100%;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

export const Link = styled.a`
  color: #fff;
  font-size: 18px;
  margin: 10px;
  max-width: 200px;
  font-size: 12px;
  text-decoration: none;
  &:hover {
      color: #caa989;
      transition: 200ms ease-in;
  }
`;
