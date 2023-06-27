import React, { useEffect, useState } from 'react';
import {API_BASE_URL} from '../../../data/api/api';
import { ContainerBanner } from './Style';

export default function BannerSecundario() {
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

  const { banner_Desktop } = bannerData;
  const desktopImages = banner_Desktop.data.map(image => image.attributes);

  return (
    <>
      <ContainerBanner>    
          {desktopImages.map(image => (
            <img key={image.id} src={`${API_BASE_URL}${image.url}`} alt={image.name} />
          ))}      
      </ContainerBanner>
    </>
  );
}
