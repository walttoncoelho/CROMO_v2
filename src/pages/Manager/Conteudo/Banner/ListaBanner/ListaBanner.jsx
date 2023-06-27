import React, { useEffect, useState } from "react";
import NavBar from '../../../components/NavBar/NavBar'
import AdministrativePanel from '../../../components/AdministrativePanel/AdministrativePanel'

import { Container, ContainerSidebar, ContainerStage } from '../../../components/Global/StyleGlobal'
import api from "../../../../../services/api";
import CardListBanner from "../../../components/CardListBanner/CardListBanner";


export default function ListaBanners() {
  let [banners, setBanners] = useState(null);

  useEffect(() => {
    async function obterBanners() {
      let { data } = await api.get("/manager/banners", {
        headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` }
      });
      setBanners(data);
    };
    obterBanners().catch(error => setBanners({}));
  }, []);
  return (
    <>
    <NavBar />
    
    <Container>
      <ContainerSidebar>
        <AdministrativePanel />
      </ContainerSidebar>
      <ContainerStage>
      <h3><strong>Conteúdo</strong> - Listagem de Banners</h3>
        {banners && <CardListBanner dados={banners} />}
      </ContainerStage>
    </Container>
  </>
  )
}
