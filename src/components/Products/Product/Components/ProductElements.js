import styled from "styled-components";
import {motion} from "framer-motion";

export const CardContainer = styled(motion.div)`
    height: auto;
    border-radius: 10px;
    width: 300px;
    margin: 0 auto;
    margin-bottom: 80px;
    max-width: 300px;
    padding: 5px;
`;

export const PPrice = styled.span`
  font-family: Font2;
  font-weight: 200;
  font-size: 0.9rem;
`;

export const PName = styled.span`
  font-family: Font2;
  margin-bottom: 10px;
  height: auto;
  font-size: 1.5rem;
`;
export const CartButton = styled.button`
  height: 55px;
  width: 180px;

  border-radius: 30px;
  &:hover {
    background-color: #caa989;
    transition: 200ms ease-in;
  }
`
