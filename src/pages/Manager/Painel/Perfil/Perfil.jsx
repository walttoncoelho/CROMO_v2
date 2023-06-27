import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import AdministrativePanel from '../../components/AdministrativePanel/AdministrativePanel'
import { Container, ContainerSidebar, ContainerStage } from '../../components/Global/StyleGlobal'
import CardListPerfil from './ListaPErfil/CardListPerfil/CardListPerfil'



export default function Perfil() {
  return (
    <>
    <NavBar />
    <Container>
      <ContainerSidebar>
        <AdministrativePanel />
      </ContainerSidebar>
      <ContainerStage>      
        <h3><stong>Painel</stong> - Perfil</h3>    
        <CardListPerfil/>
    
      </ContainerStage>
    </Container>
  </>
  )
}
