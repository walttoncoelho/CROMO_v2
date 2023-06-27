import React, { useEffect, useState } from 'react';
import { API_BASE_URL } from '../../../data/api/api';

import Title from "../BannerSecundario/img/TituloBanner.png";
import { BannerMobile, BannerTitle, ContainerBannerMobile } from "./Style";

export default function BannerSecundarioMobile() {
  const [bannerData, setBannerData] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/banner-home-contents/1/?populate=*`)
      .then(response => response.json())
      .then(data => setBannerData(data.data.attributes))
      .catch(error => console.error(error));
  }, []);

  if (!bannerData) {
    return <div>Loading...</div>;
  }

  const { banner_Mobile} = bannerData;
  const desktopImages = banner_Mobile.data.map(image => image.attributes);
  return (
    <>
      <ContainerBannerMobile>
        <BannerTitle>
          <img src={Title} alt="title" />
        </BannerTitle>
        <BannerMobile>
        {desktopImages.map(image => (
            <img key={image.id} src={`${API_BASE_URL}${image.url}`} alt={image.name} />
          ))}
        </BannerMobile>
      </ContainerBannerMobile>
    </>
  );
}
