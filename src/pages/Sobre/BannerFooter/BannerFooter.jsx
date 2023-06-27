import React, { useEffect, useState } from 'react';
import { API_BASE_URL } from '../../../data/api/api';
import { ContainerBanner } from './Style';

export default function BannerFooter() {
  const [desktopImage, setDesktopImage] = useState(null);
  const [mobileImage, setMobileImage] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/banner-sobre-contents/?populate=*`)
      .then(response => response.json())
      .then(data => {
        const { bannerDesktop, banner_mobile } = data.data[0].attributes;
        setDesktopImage(bannerDesktop.data.attributes);
        setMobileImage(banner_mobile.data.attributes);
      })
      .catch(error => console.error(error));
  }, []);

  if (!desktopImage || !mobileImage) {
    return <div>Loading...</div>;
  }

  return (
    <ContainerBanner>
      <div className="BannerDesktop">
        <img
          src={`${API_BASE_URL}${desktopImage.url}`}
          alt={desktopImage.name}
        />
      </div>

      <div className="BannerMobile">
        <img
          src={`${API_BASE_URL}${mobileImage.url}`}
          alt={mobileImage.name}
        />
      </div>
    </ContainerBanner>
  );
}
