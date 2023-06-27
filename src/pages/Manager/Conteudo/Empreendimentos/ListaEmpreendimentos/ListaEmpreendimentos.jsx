import React, { useEffect, useState } from "react";
import NavBar from '../../../components/NavBar/NavBar'
import AdministrativePanel from '../../../components/AdministrativePanel/AdministrativePanel'
import CardListEmpreendimento from '../../../components/CardListEmpreendimento/CardListEmpreendimento'

import {  Container, ContainerStage, ContainerSidebar } from '../../../components/Global/StyleGlobal'
import api from "../../../../../services/api";


export default function ListaEmpreendimentos() {
  let [empreendimentos, setEmpreendimentos] = useState(null);

  useEffect(() => {
    async function obterEmpreendimentos() {
      let { data } = await api.get("/manager/empreendimentos", {
        headers: { "Authorization": `Bearer ${ localStorage.getItem("token") }` }
      });
      setEmpreendimentos(data);
    };
    obterEmpreendimentos().catch(error => setEmpreendimentos({}));
  }, []);
  return (
    <>
    <NavBar />
    
    <Container>
      <ContainerSidebar>
        <AdministrativePanel />
      </ContainerSidebar>
      <ContainerStage>      
        <h3><strong>Conteúdo</strong> - Listagem de Empreendimentos</h3>
        {empreendimentos && <CardListEmpreendimento dados={empreendimentos} />}
      </ContainerStage>
    </Container>
    </>
  )
}
