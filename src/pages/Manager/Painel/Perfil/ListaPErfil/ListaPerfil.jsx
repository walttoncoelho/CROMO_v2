import React from "react";
import NavBar from '../../../components/NavBar/NavBar'
import AdministrativePanel from '../../../components/AdministrativePanel/AdministrativePanel'
import { Container, ContainerSidebar, ContainerStage } from '../../../components/Global/StyleGlobal'

import CardListPerfil from "./CardListPerfil/CardListPerfil";


export default function Desativado() {

  return (
    <>
    <NavBar />
    
    <Container>
      <ContainerSidebar>
        <AdministrativePanel />
      </ContainerSidebar>
      <ContainerStage>
      <h3><strong>Painel</strong> - Perfil</h3>????????????????
        <CardListPerfil/>
      </ContainerStage>
    </Container>
    </>
  )
}
