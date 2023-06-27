import React from "react";
import MenuMobile from "../MenuMobile/MenuMobile";
import { Container, MenuContainer, Nav, NavItem, NavLinkStyled } from "./Style";
import logoImg from "./img/logo.png";

export default function Navbar() {
  return (
    <>
      <Container>
        <Nav>
          <a href="/">
            <img src={logoImg} alt="logo" />
          </a>
          <MenuContainer>

            <ul >
              <NavItem>
                <NavLinkStyled exact="true" to="/" activeclassname="active">
                  Home
                </NavLinkStyled>
              </NavItem>
              <NavItem>
                <NavLinkStyled to="/empreendimentos" activeclassname="active">
                  Empreendimentos
                </NavLinkStyled>
              </NavItem>
              <NavItem>
                <NavLinkStyled to="/sobre" activeclassname="active">
                  Quem somos
                </NavLinkStyled>
              </NavItem>
              <NavItem>
                <NavLinkStyled to="/faleconosco" activeclassname="active">
                  Fale conosco
                </NavLinkStyled>
              </NavItem>
            </ul>
          </MenuContainer>
        </Nav>

        <MenuMobile />
      </Container>
    </>
  );
}
