import React, { useEffect, useState } from "react";
import NavBar from '../../../components/NavBar/NavBar'
import AdministrativePanel from '../../../components/AdministrativePanel/AdministrativePanel'
import CardListContato from '../../../components/CardListContato/CardListContato'
import { Container, ContainerSidebar, ContainerStage } from '../../../components/Global/StyleGlobal'
import api from "../../../../../services/api";


export default function ListaContatos() {
  let [contatos, setContatos] = useState(null);

  useEffect(() => {
    async function obterContatos() {
      let { data } = await api.get("/manager/leads", {
        headers: { "Authorization": `Bearer ${ localStorage.getItem("token") }` }
      });
      setContatos(data);
    };
    obterContatos().catch(error => setContatos({}));
  }, []);
  return (
    <>
    <NavBar />    
    <Container>
      <ContainerSidebar>
        <AdministrativePanel />
      </ContainerSidebar>
      <ContainerStage>
      <h3><strong>Fomrulário</strong> - Listagem de Contatos</h3>
        {contatos && <CardListContato dados={contatos} />}
      </ContainerStage>
    </Container>
    </>
  )
}
