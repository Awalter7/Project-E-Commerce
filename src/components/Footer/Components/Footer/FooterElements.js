import styled from 'styled-components';

export const Container = styled.div`
  background-image: linear-gradient(360deg, #fd1ed9 0%, rgba(0,0,0,1) 100%);
  background-size: auto;
  background-position: 0% 0%;
  background-repeat: repeat;
  background-color: rgba(8,174,234,1);
  padding: 10px 30px;
  padding-bottom: 90px;
  
`

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-evenly;
    max-width: 1500px;
    margin: 0 auto;
    /* background: red; */
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;

export const Row = styled.div`
  display: flex;
  max-width: max-content;
  flex-wrap: wrap;
  flex-direction: row;
`;

export const Link = styled.a`
  color: #fff;
  font-size: 15px;
  margin: 10px;
  text-decoration: none;
  &:hover {
      color: #caa989;
      transition: 200ms ease-in;
  }
`;

export const Title = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;