import React, { useEffect, useState } from 'react';
import { ContainerBanner } from './Style';
import BtnExplorar from './ButtonExplorar/BtnExplorar';
import { API_BASE_URL } from '../../../data/api/api';

export default function BannerPrincipal() {
  const [bannerData, setBannerData] = useState(null);
  const [cachedImages, setCachedImages] = useState({});

  useEffect(() => {
    const cacheImages = (data) => {
      const { banner_desktop } = data;
      const desktopImage = banner_desktop.data.attributes.formats.large;
      const imageUrl = `${API_BASE_URL}${desktopImage.url}`;

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

  const { banner_desktop } = bannerData;
  const desktopImage = banner_desktop.data.attributes.formats.large;
  const imageUrl = `${API_BASE_URL}${desktopImage.url}`;

  return (
    <>
      <ContainerBanner>
        <BtnExplorar />
        <ContainerBanner>
          <img src={imageUrl} alt={desktopImage.name} />
        </ContainerBanner>
      </ContainerBanner>
    </>
  );
}
