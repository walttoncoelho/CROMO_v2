import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/footer/Footer'
import BannerTopo from './BannerTopo/BannerTopo'
import SobreContent from './SectionSobre/SobreContent'
import BannerFooter from './BannerFooter/BannerFooter'
import BannerSobreMobile from './BannerTopo/BannerSobreMobile'
import ButtonContact from '../../components/ButtonContact/ButtonContact'
import api from '../../services/api'
import banners from "../../data/api/banners";

export default function Sobre() {
  let [bannerPrincipal, setBannerPrincipal] = useState(null);
  let [bannerSecundario, setBannerSecundario] = useState(null);
  let placeholders = banners.sobre;

  useEffect(() => {
    async function obterBanners() {
      let { data: banners } = await api.get("banners/sobre");
      setBannerPrincipal(banners.SOBRE_TOPO ?? placeholders.SOBRE_TOPO);
      setBannerSecundario(banners.SOBRE_SECUNDARIO ?? placeholders.SOBRE_SECUNDARIO);
      return banners;
    };
    obterBanners().catch(_ => {
      setBannerPrincipal(placeholders.SOBRE_TOPO);
      setBannerSecundario(placeholders.SOBRE_SECUNDARIO);
    });
  }, [placeholders]);
  return (
    <>
      <Navbar />
      {bannerPrincipal && <BannerTopo banner={bannerPrincipal} />}
      {bannerPrincipal && <BannerSobreMobile banner={bannerPrincipal} />}
      <SobreContent />
      {bannerSecundario && <BannerFooter banner={bannerSecundario} />}
      <ButtonContact/>
      <Footer />
    </>
  )
}
