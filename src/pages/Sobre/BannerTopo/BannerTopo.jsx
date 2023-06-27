import React, { useEffect, useState } from 'react';
import { API_BASE_URL } from '../../../data/api/api';
import { ContainerBanner } from './Style';

export default function BannerTopo({ banner }) {
  const [bannerData, setBannerData] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/banner-sobres/?populate=*`)
      .then(response => response.json())
      .then(data => setBannerData(data.data[0].attributes)) // Alteração feita aqui para acessar os atributos corretamente
      .catch(error => console.error(error));
  }, []);

  if (!bannerData) {
    return <div>Loading...</div>;
  }

  const { banner_desktop } = bannerData; // Alteração feita aqui para corrigir o nome do atributo
  const desktopImage = banner_desktop.data.attributes;

  return (
    <>
      <ContainerBanner>    
        <img
          key={desktopImage.id}
          src={`${API_BASE_URL}${desktopImage.url}`}
          alt={desktopImage.name}
        />
      </ContainerBanner>
    </>
  );
}
