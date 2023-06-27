import React from 'react'
import Mapa from "./img/MAPA.png";
import { ColunaMapa, MapaDescription } from './Style';
import { Container } from './Style';
import Arrow from "./img/arrow.svg";


export default function MapaFooter() {
  return (
    <>
      <Container>

        <ColunaMapa>
          <a href="/">
            <img src={Mapa} alt="logo" />
          </a>
        </ColunaMapa>
        <MapaDescription>
          <p>
            Visite nosso escritório em Balsas na Rua Vitória N32, Barro XYZ
          </p>
          <a
            href="https://www.google.com/maps/place/Balsas,+MA,+65800-000/@-7.5206636,-46.0530322,15z/data=!4m6!3m5!1s0x92d5ef9625fb9fa5:0x697ed5cde68bbfe7!8m2!3d-7.5335065!4d-46.0406425!16s%2Fg%2F11bxftrzcq"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Conhecer
            <img src={Arrow} alt="Arrow" />
          </a>
        </MapaDescription>
      </Container>
    </>
  )
}
