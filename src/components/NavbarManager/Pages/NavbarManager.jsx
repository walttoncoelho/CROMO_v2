import React from "react";
import {
  Container,
  ContainerLogo,
  ContainerSair,
  ContainerSitePerfil,
  ContainerSitePreview
} from "../Style";
import logo from "../image/logo.png";
import { ButtonSair, ButtonSite } from "../../Bottons/Bottons";

export default function NavbarManager() {
  return (
    <>
      <Container>
        <ContainerLogo>
          <img src={logo} alt="Logo" />
        </ContainerLogo>
        <ContainerSitePreview>
          <ButtonSite className="Colorgreen">          

            Ir para o Site
           
          </ButtonSite>
        </ContainerSitePreview>
        <ContainerSitePerfil>
          <p>
            Olá <strong>Nome do usuário</strong>
          </p>
        </ContainerSitePerfil>
        <ContainerSair>  
        
         <ButtonSair>Sair</ButtonSair>
        </ContainerSair>
      </Container>
    </>
  );
}
