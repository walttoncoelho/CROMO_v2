import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import ButtonContact from "../../components/ButtonContact/ButtonContact";
import GoogleMapReact from 'google-map-react';

import { API_BASE_URL } from '../../../src/data/api/api';
import {
  ContainerDescription,
  ContainerHeader,
  ContainerIcons,
  ContainerPlanta,
  ContainerSobre,
  SectionDescription,
  SectionGalery,
  SobreStyleText
} from './Style';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function EmpreendimentoInterna() {
  const defaultProps = {
    zoom: 15
  };
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [empreendimento, setEmpreendimento] = useState(null);
  const [infraestruturas, setInfraestruturas] = useState([]);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  useEffect(() => {
    async function fetchEmpreendimentoData() {
      try {
        const response = await fetch(`${API_BASE_URL}/api/empreendimentos/${id}/?populate=*`);
        const data = await response.json();
        if (response.ok && data && data.data && data.data.attributes) {
          const { latitude, longitude, ...empreendimentoData } = data.data.attributes;
          setEmpreendimento(empreendimentoData);
          setLatitude(latitude);
          setLongitude(longitude);
        } else {
          setError('Failed to fetch empreendimento data.');
        }
      } catch (error) {
        setError('An error occurred while making the request.');
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }

    async function fetchInfraestruturasData() {
      try {
        const response = await fetch(`${API_BASE_URL}/api/infraestruturas?populate=*`);
        const data = await response.json();
        if (response.ok && data && data.data) {
          setInfraestruturas(data.data);
        } else {
          setError('Failed to fetch infraestruturas data.');
        }
      } catch (error) {
        setError('An error occurred while making the request for infraestruturas.');
        console.error(error);
      }
    }

    fetchEmpreendimentoData();
    fetchInfraestruturasData();
  }, [id]);

  useEffect(() => {
    console.log('isLoading:', isLoading);
    console.log('error:', error);
    console.log('empreendimento:', empreendimento);
    console.log('infraestruturas:', infraestruturas);
  }, [isLoading, error, empreendimento, infraestruturas]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (empreendimento) {
    const { planta_baixa, logo_empreendimento, galeria_empreendimento } = empreendimento;

    return (
      <>
        <Navbar />
        <ContainerHeader>
        {logo_empreendimento && logo_empreendimento.data && (
          <img src={`${API_BASE_URL}${logo_empreendimento.data.attributes.url}`} alt="Logo do empreendimento" />
        )}
      </ContainerHeader>
        <SectionDescription>
          <ContainerPlanta>
            {planta_baixa?.data?.attributes?.formats?.thumbnail && (
              <img
                src={`${API_BASE_URL}${planta_baixa.data.attributes.formats.thumbnail.url}`}
                alt="Planta Baixa"
              />
            )}
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
            {/* Ícones de Infraestrutura */}
            <ContainerIcons>
              {infraestruturas.map((imagem, index) => (
                <div className="styleIcons" key={index}>
                  <img
                    src={`${API_BASE_URL}${imagem.attributes.imagem_infra.data.attributes.url}`}
                    alt={`Imagem ${index + 1}`}
                  />
                  <p>{imagem.attributes.titulo}</p>
                </div>
              ))}
            </ContainerIcons>
          </ContainerDescription>
        </SectionDescription>
        <SectionGalery>
          {galeria_empreendimento?.data?.map((imagem, index) => (
            <img
              key={index}
              src={`${API_BASE_URL}${imagem.attributes.formats.thumbnail.url}`}
              alt={`Imagem ${index + 1}`}
            />
          ))}
        </SectionGalery>
        <div style={{ height: '60vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyD8PKQ5Fmq_AJ3ew1lFO7r9OSup1Me9Wzc" }}
            defaultCenter={{
              lat: latitude,
              lng: longitude
            }}
            defaultZoom={defaultProps.zoom}
          >
            <AnyReactComponent lat={latitude} lng={longitude} />
          </GoogleMapReact>
        </div>
        <ButtonContact />
        <Footer />
      </>
    );
  }

  return null;
}

