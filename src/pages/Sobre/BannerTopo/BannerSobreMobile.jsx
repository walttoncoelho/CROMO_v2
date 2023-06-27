import React, { useEffect, useState } from 'react';
import { API_BASE_URL } from '../../../data/api/api';
import {  BannerMobile, ContainerBannerMobile } from './Style';

export default function BannerTopo({ banner }) {
  const [bannerData, setBannerData] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/banner-sobres/?populate=*`)
      .then(response => response.json())
      .then(data => setBannerData(data.data[0].attributes))
      .catch(error => console.error(error));
  }, []);

  if (!bannerData) {
    return <div>Loading...</div>;
  }

  const {  banner_mobile } = bannerData;

  const mobileImage = banner_mobile.data.attributes;

  return (
    <>


      <ContainerBannerMobile>
        <BannerMobile>
          <img
            key={mobileImage.id}
            src={`${API_BASE_URL}${mobileImage.url}`}
            alt={mobileImage.name}
          />
        </BannerMobile>
      </ContainerBannerMobile>
    </>
  );
}
