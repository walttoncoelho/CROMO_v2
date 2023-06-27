import React from "react";
import { ByGoodApp, SectionFaleconosco, Container, ColunaFormulario} from "./style";

import FooterFormulario  from "./Formulario/FooterFormulário";
import { ColunaMapa } from "./Mapa/Style";
import Contatos from "./Contatos/Contatos";
import MapaFooter from "./Mapa/MapaFooter";


export default function FooterFaleConosco() {
  return (
    <>
    <Container>
      <SectionFaleconosco>
        <Contatos/>
        <ColunaFormulario>   
          <h2>Ente em contato</h2>    
          <br/>    
          <FooterFormulario />         
        </ColunaFormulario>
        <ColunaMapa>
          <MapaFooter/>
        </ColunaMapa>
      </SectionFaleconosco>
      <ByGoodApp>
        <p>
          ©2023 Cromo Construtora e Incorporadora | Todos os direitos
          reservados{" "}
          <a href="https://www.goodapp.com.br"
            target="_blank"
            rel="noopener noreferrer"
          > </a>
        </p>
      </ByGoodApp>
    </Container>
    </>
  );
}
