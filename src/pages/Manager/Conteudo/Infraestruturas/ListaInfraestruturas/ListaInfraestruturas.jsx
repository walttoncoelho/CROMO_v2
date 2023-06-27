import React, { useEffect, useState } from "react";
import NavBar from '../../../components/NavBar/NavBar'
import AdministrativePanel from '../../../components/AdministrativePanel/AdministrativePanel'
import CardListInfraestrutura from '../../../components/CardListInfraestrutura/CardListInfraestrutura'
import { Container, ContainerSidebar, ContainerStage } from '../../../components/Global/StyleGlobal'
import api from "../../../../../services/api";


export default function ListaInfraestruturas() {
  let [infraestruturas, setInfraestruturas] = useState(null);

  useEffect(() => {
    async function obterInfraestruturas() {
      let { data } = await api.get("/manager/infraestruturas", {
        headers: { "Authorization": `Bearer ${ localStorage.getItem("token") }` }
      });
      setInfraestruturas(data);
    };
    obterInfraestruturas().catch(error => setInfraestruturas({}));
  }, []);
  return (
    <>
    <NavBar />
    
    <Container>
      <ContainerSidebar>
        <AdministrativePanel />
      </ContainerSidebar>
      <ContainerStage>
      <h3><strong>Conteúdo</strong> - Listagem de Infraestrutura</h3>
        {infraestruturas && <CardListInfraestrutura dados={infraestruturas} />}
      </ContainerStage>
    </Container>
    </>
  )
}
