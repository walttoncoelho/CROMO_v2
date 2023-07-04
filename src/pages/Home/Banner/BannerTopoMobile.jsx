import React, { useEffect, useState } from 'react';
import { BannerMobile, ContainerBannerMobile } from './Style';
import { API_BASE_URL } from '../../../data/api/api';

export default function BannerTopoMobile() {
  const [bannerData, setBannerData] = useState(null);
  const [cachedImages, setCachedImages] = useState({});

  useEffect(() => {
    const cacheImages = (data) => {
      const { banner_mobile } = data;
      const mobileImage = banner_mobile.data.attributes.formats.small;
      const imageUrl = `${API_BASE_URL}${mobileImage.url}`;

      // Verifica se a imagem já está em cache
      if (!cachedImages[imageUrl]) {
        const img = new Image();
        img.src = imageUrl;
        img.onload = () => {
          setCachedImages(prevCachedImages => ({
            ...prevCachedImages,
            [imageUrl]: img
          }));
        };
      }
    };

    fetch(`${API_BASE_URL}/api/banner-topos/2/?populate=*`)
      .then(response => response.json())
      .then(json => json.data.attributes)
      .then(data => {
        setBannerData(data);
        cacheImages(data);
      })
      .catch(console.error);
  }, [cachedImages]);

  if (!bannerData) {
    return <div>Loading...</div>;
  }

  const { banner_mobile } = bannerData;
  const mobileImage = banner_mobile.data.attributes.formats.small;
  const imageUrl = `${API_BASE_URL}${mobileImage.url}`;

  return (
    <>
      <ContainerBannerMobile>
        <BannerMobile>
          <img src={imageUrl} alt={mobileImage.name} />
        </BannerMobile>
      </ContainerBannerMobile>
    </>
  );
}
