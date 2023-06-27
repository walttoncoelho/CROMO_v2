import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import AdministrativePanel from '../../components/AdministrativePanel/AdministrativePanel'
import { Container, ContainerSidebar, ContainerStage } from '../../components/Global/StyleGlobal'
import Cards from '../../components/Cards/Cards'


export default function Painel() {
  return (
    <>
      <NavBar />
      <Container>
        <ContainerSidebar>
          <AdministrativePanel />
        </ContainerSidebar>
        <ContainerStage>
        <h3><strong>Painel</strong> - Estatísticas</h3>
          <Cards />
        </ContainerStage>
      </Container>
    </>
  )
}
