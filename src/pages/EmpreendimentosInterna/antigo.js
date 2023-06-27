/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect, useState } from 'react';
/* import GoogleMapReact from 'google-map-react'; */
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import {
  SectionDescription,
  ContainerHeader,
  ContainerIcons,
  ContainerPlanta,
} from "./Style";
import {
  ContainerSobre,
  SobreStyleText,
  ContainerDescription,
  SectionGalery
} from "./Style";
import ButtonContact from "../../components/ButtonContact/ButtonContact";
import { useParams } from 'react-router-dom';
import api from "../../services/api";

/* const AnyReactComponent = ({ text }) => <div>{text}</div>; */

export default function EmpreendimentoInterna() {
/*   const defaultProps = {
    zoom: 15
  };
 */
  const { empreendimentoSlug } = useParams();
  const [empreendimento, setEmpreendimento] = useState(null);

  useEffect(() => {
    async function obterEmpreendimento() {
      try {
        const { data } = await api.get(`/empreendimentos/?populate=*&slug=${empreendimentoSlug}`);
        const empreendimentoData = data && data.data && data.data.attributes;
        setEmpreendimento(empreendimentoData);
      } catch (error) {
        console.log(error);
      }
    }
    obterEmpreendimento();
  }, [empreendimentoSlug]);

  return empreendimento && (
    <>
      <Navbar />
      <ContainerHeader>
        <div>
          <img src={empreendimento.capa_home} alt={"Logo"} />
        </div>
      </ContainerHeader>
      <SectionDescription>
        <ContainerPlanta>
          <div>
            <img src={empreendimento.imagemPlantaBaixa} alt={"Planta Baixa"} />
          </div>
        </ContainerPlanta>

        <ContainerDescription>
          <ContainerSobre>
            <SobreStyleText>
              <div>
                <h2>{empreendimento.titulo}</h2>
                <p>{empreendimento.descricao}</p>
                <br />
                <br />
                <p className="numeros">
                  <strong>{empreendimento.quantidade_lote}</strong> lotes com até{" "}
                  <strong>{empreendimento.area_lote}</strong>
                </p>
              </div>
            </SobreStyleText>
          </ContainerSobre>

          <ContainerIcons>
            {empreendimento.infraestrutura.map(item => (
              <div className="styleIcons" key={item.icone}>
                <img src={item.icone} alt={item.titulo} />
                <p>{item.titulo}</p>
              </div>
            ))}
          </ContainerIcons>
        </ContainerDescription>
      </SectionDescription>

      <SectionGalery>
        {empreendimento.galeria.map(item => (
          <div key={item.imagem}>
            <img src={item.imagem} alt={item.legenda ?? "Imagem da galeria"} />
          </div>
        ))}
      </SectionGalery>
      
      <div style={{ height: '60vh', width: '100%' }}>
{/*         <GoogleMapReact
          bootstrapURLKeys={{ key: "YOUR_GOOGLE_MAPS_API_KEY" }}
          defaultCenter={{
            lat: empreendimento.latitude,
            lng: empreendimento.longitude
          }}
          defaultZoom={defaultProps.zoom}
        >
    
          <AnyReactComponent
            lat={empreendimento.localizacao.latitude}
            lng={empreendimento.localizacao.longitude}
            
          />
        </GoogleMapReact> */}
      </div>

      <ButtonContact />
      <Footer />
    </>
  );
}
