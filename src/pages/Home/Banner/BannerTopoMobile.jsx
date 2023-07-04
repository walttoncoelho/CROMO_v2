import React, { useEffect, useState } from 'react';
import { BannerMobile, ContainerBannerMobile } from "./Style";

import { API_BASE_URL } from '../../../data/api/api';

export default function BannerTopoMobile() {
  const [bannerData, setBannerData] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/banner-topos/1/?populate=*`)
      .then(response => response.json())
      .then(json => json.data.attributes)
      .then(setBannerData)
      .catch(console.error);
  }, []);

  if (!bannerData) {
    return <div>Loading...</div>;
  }

  const { banner_mobile } = bannerData;
  const mobileImage = banner_mobile.data.attributes.formats.small;

  return (
    <>
      <ContainerBannerMobile>
        <BannerMobile>
          <img src={`${API_BASE_URL}${mobileImage.url}`} alt={mobileImage.name} />
        </BannerMobile>
      </ContainerBannerMobile>
    </>
  );
}
