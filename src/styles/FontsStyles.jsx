import { createGlobalStyle } from "styled-components";
import Blogger from "../fonts/BloggerSans.ttf";
import BloggerBold from "../fonts/BloggerSans-Bold.ttf";
import BloggerBoldItalic from "../fonts/BloggerSans-BoldItalic.ttf";
import BloggerItalic from "../fonts/BloggerSans-Italic.ttf";
import BloggerLight from "../fonts/BloggerSans-Light.ttf";
import BloggerLightItalic from "../fonts/BloggerSans-LightItalic.ttf";
import BloggerMedium from "../fonts/BloggerSans-Medium.ttf";
import BloggerMediumItalic from "../fonts/BloggerSans-MediumItalic.ttf";
import Licorice from "../fonts/Licorice.ttf";



const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'Blogger';
  src: url(${Blogger}) format('truetype'),
  url(${BloggerBold}) format('truetype'), 
  url(${BloggerBoldItalic}) format('truetype'),  
  url(${BloggerItalic}) format('truetype'),   
  url(${BloggerLight}) format('truetype'),  
  url(${BloggerLightItalic}) format('truetype'),  
  url(${BloggerMedium}) format('truetype'), 
  url(${BloggerMediumItalic}) format('truetype'),
  url(${Licorice}) format('truetype');
}

@font-face {
  font-family: 'Licorice';
  src: url(${Licorice}) format('truetype');  
}
`;

export default FontStyles