import {createGlobalStyle} from "styled-components";
import FontName400 from "../components/Products/assets/AdventPro-Thin.ttf";
import FontName500 from "../components/Products/assets/Montserrat-Medium.ttf"
import FontName100 from "../components/Products/assets/Montserrat-Thin.ttf"
import FontName300 from "../components/Products/assets/Montserrat-Light.ttf"

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: Font1;
    font-style: normal;
    font-weight: 400;
    src: url(${FontName400});
  }

  @font-face {
    font-family: Font2;
    font-style: normal;
    src: url(${FontName500});
  }
  @font-face {
    font-family: Font4;
    font-style: normal;
    src: url(${FontName300});
  }
  @font-face {
    font-family: Font3;
    font-style: normal;
    src: url(${FontName100});
  }
  
  
`


export default GlobalStyles;