import React, { useEffect, useState } from 'react';
import { API_BASE_URL } from '../../../../data/api/api';
import {
  CardContainer,
  CardDescription,
  CardGalery,
  ContainerStatus
} from "../Style";
import Arrow from "./img/arrow.svg";
import "./styles.css";

export function CardEmpreend() {
  const [empreendimentos, setEmpreendimentos] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/empreendimentos/?populate=*`)
      .then(response => response.json())
      .then(data => setEmpreendimentos(data.data))
      .catch(error => console.error(error));
  }, []);

  if (!empreendimentos) {
    return <div>Loading...</div>;
  }

  // Filtra os empreendimentos que estão em destaque
  const empreendimentosEmDestaque = empreendimentos.filter(empreendimento => {
    const { attributes } = empreendimento;
    return attributes.destaque === true;
  });

  return (
    <CardContainer>
      {empreendimentosEmDestaque.map(empreendimento => {
        const { attributes, id } = empreendimento;
        const capaHomeUrl = attributes.capa_home?.data?.attributes?.url;

        return (
          <CardGalery key={attributes.id}>
            {capaHomeUrl && (
              <img
                className={"destaque"}
                src={`${API_BASE_URL}${capaHomeUrl}`}
                alt={attributes.capa_home.data.attributes.altText ?? "Imagem do empreendimento"}
              />
            )}
            {attributes.completamenteVendido && (
              <img
                className={"selo"}
                src={"../images/selo-100-porcento-vendido.png"}
                alt={"Empreendimento Completamente Vendido"}
              />
            )}
            <ContainerStatus
              className={
                attributes.status_construcao === "Obra entregue" ? "green" : "orange"
              }
            >
              <p>{attributes.status_construcao}</p>
            </ContainerStatus>
            <CardDescription d={id}>
              <h3>{attributes.titulo}</h3>
              <h4>{attributes.tipo_empreendimento}</h4>
              <a href={`empreendimentos/${id}`} rel="noopener noreferrer">
                {" "}
                Conhecer
                <img src={Arrow} alt="Arrow" />
              </a>
            </CardDescription>
          </CardGalery>
        );
      })}
    </CardContainer>
  );
}
