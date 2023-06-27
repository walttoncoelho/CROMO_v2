import React, { useEffect, useState } from "react";
import NavBar from '../../../components/NavBar/NavBar'
import AdministrativePanel from '../../../components/AdministrativePanel/AdministrativePanel'

import { Container, ContainerSidebar, ContainerStage } from '../../../components/Global/StyleGlobal'
import api from "../../../../../services/api";
import CardListUsuario from "../../../components/CardListUsuario/CardListUsuario";


export default function ListaUsuarios() {
  let [usuarios, setUsuarios] = useState(null);

  useEffect(() => {
    async function obterUsuarios() {
      let { data } = await api.get("/manager/users/paginate", {
        headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` }
      });
      setUsuarios(data);
    };
    obterUsuarios().catch(error => setUsuarios({}));
  }, []);
  return (
    <>
    <NavBar />
    
    <Container>
      <ContainerSidebar>
        <AdministrativePanel />
      </ContainerSidebar>
      <ContainerStage>
      <h3><strong>Conteúdo</strong> - Listagem de Usuários</h3>
        {usuarios && <CardListUsuario dados={usuarios} />}
      </ContainerStage>
    </Container>
  </>
  )
}
