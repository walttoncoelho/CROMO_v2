import React, { useEffect, useState } from 'react'
import Footer from "../../components/footer/Footer";

import Navbar from "../../components/Navbar/Navbar";

import ButtonContact from "../../components/ButtonContact/ButtonContact";
import { ContainerBanner } from "./Banner/Style";
import SectionEmpreend from "./Empreendimentos/SectionEmpreend";

import BannerPrincipal from "./Banner/BannerPrincipal";
import BannerSecundario from "./BannerSecundario/BannerSecundario";
import SectionNumeros from "./SectionNumeros/SectionNumeros";
import BannerSecundarioMobile from "./BannerSecundario/BannerSecundarioMobile";
import BannerTopoMobile from "./Banner/BannerTopoMobile";
import api from "../../services/api";
import banners from "../../data/api/banners";

export default function Home() {
  let [bannerPrincipal, setBannerPrincipal] = useState(null);
  let [bannerSecundario, setBannerSecundario] = useState(null);
  let placeholders = banners.home;

  useEffect(() => {
    async function obterBanners() {
      let { data: banners } = await api.get("banners/home");
      setBannerPrincipal(banners.HOME_TOPO ?? placeholders.HOME_TOPO);
      setBannerSecundario(banners.HOME_SECUNDARIO ?? placeholders.HOME_SECUNDARIO);
      return banners;
    };
    obterBanners().catch(_ => {
      setBannerPrincipal(placeholders.HOME_TOPO);
      setBannerSecundario(placeholders.HOME_SECUNDARIO);
    });
  }, [placeholders]);
  return (
    <>
      <Navbar />
      <ContainerBanner>
        {bannerPrincipal && <BannerPrincipal banner={bannerPrincipal} />}
      </ContainerBanner>
      {bannerPrincipal  && <BannerTopoMobile banner={bannerPrincipal} />}
      <SectionEmpreend />
      {bannerSecundario && <BannerSecundario banner={bannerSecundario} />}
      {bannerSecundario && <BannerSecundarioMobile banner={bannerSecundario} />}
      <SectionNumeros />
      <ButtonContact />
      <Footer />
    </>
  );
}
