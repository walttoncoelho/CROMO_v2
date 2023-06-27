import React from 'react'
import {  IconSocialMobile } from './Style'
import Instagram from "./img/instagram.svg";
import Facebook from "./img/facebook.svg";

export default function RedesSociaisMobile() {
  return (
                  <IconSocialMobile>
                  <a href="/"> 
                    <img src={Instagram} alt="Instagram" />
                  </a>
                   <a href="/">
                    <img src={Facebook} alt="Facebook" />
                  </a>
                  </IconSocialMobile>
                   
               
  )
}
