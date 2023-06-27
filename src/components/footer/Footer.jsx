import React from "react";
import { ByGoodApp, Colum, Container, Grid1, Grid2 } from "./style";
import Formulario from "../Formulario/Formulário";
import RedesSociais from "../RedesSociais/RedesSociais";
import RedesSociaisMobile from "../RedesSociais/RedeSocialMobile";

export default function Footer() {
  return (
    <>
      <Container>
        <Colum>
          <Grid1>
            <h2>Fale conosco</h2><br/>
            <p>
              Deseja receber contato para conhecer melhor nossas ofertas
              comerciais e novidades? Preencha nosso formulário.
            </p>
            <RedesSociais />
          </Grid1>
          <Grid2>
            <>
              <Formulario />
            </>
          </Grid2>
        </Colum>
        <RedesSociaisMobile />
        <ByGoodApp>
          <p>
            ©2023 Cromo Construtora e Incorporadora | Todos os direitos
            reservados{" "}
            <a href="https://www.goodapp.com.br"
              target="_blank"
              rel="noopener noreferrer"
            >              
            </a>
          </p>
        </ByGoodApp>
      </Container>
    </>
  );
}
