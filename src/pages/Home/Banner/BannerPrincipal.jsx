import React, { useEffect, useState } from 'react';
import { ContainerBanner } from './Style';
import BtnExplorar from './ButtonExplorar/BtnExplorar';
import { API_BASE_URL } from '../../../data/api/api';
import api from '../../../services/api';

export default function BannerPrincipal() {
  const [bannerData, setBannerData] = useState(null);

  useEffect(() => {
    api.get(`api/banner-topos/1/?populate=*`)
      .then(response => response.json())
      .then(data => setBannerData(data.data.attributes))
      .catch(error => console.error(error));
  }, []);

  if (!bannerData) {
    return <div>Loading...</div>;
  }

  const { banner_desktop } = bannerData;
  const desktopImage = banner_desktop.data.attributes.formats.large;

  return (
    <>
      <ContainerBanner>
        <BtnExplorar />
        <ContainerBanner>
          <img src={`${API_BASE_URL}${desktopImage.url}`} alt={desktopImage.name} />
        </ContainerBanner>
      </ContainerBanner>
    </>
  );
}
