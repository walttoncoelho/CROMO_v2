import React, { useEffect, useState } from 'react';
import { API_BASE_URL } from '../../../data/api/api';
import {
  CardContainer,
  CardDescription,
  CardGalery,
  CardImg,
  ContainerLoteButton,
  ContainerStatus
} from "../Style";
import "./styles.css"; // importa o arquivo CSS
import { ButtonSaibaMais } from "../../../components/Bottons/Bottons";

export function CardEmpreend() {
  const [empreendimentosData, setEmpreendimentosData] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/empreendimentos/?populate=*`)
      .then(response => response.json())
      .then(data => setEmpreendimentosData(data.data))
      .catch(error => console.error(error));
  }, []);

  if (!empreendimentosData) {
    return <div>Loading...</div>;
  }

  return (
    <CardContainer>
      <h1>Nossos empreendimentos</h1>
      {empreendimentosData.map(attributes => {
        const { attributes: empreendimentoAttributes, id } = attributes;
        const capaHomeUrl = empreendimentoAttributes.capa_home?.data?.attributes?.url;

        return (
          <CardGalery key={id}>
            <CardImg>
              {capaHomeUrl && (
                <img
                  className={"destaque"}
                  src={`${API_BASE_URL}${capaHomeUrl}`}
                  alt={empreendimentoAttributes.capa_home?.data?.attributes?.altText ?? "Imagem do empreendimento"}
                />
              )}
            
              <ContainerStatus
                className={
                  empreendimentoAttributes.status_construcao === "Obra entregue" ? "green" : "orange"
                }
              >
                <p>{empreendimentoAttributes.status_construcao}</p>
              </ContainerStatus>
            </CardImg>
            <CardDescription>
              {/* <img class={"selo"} src={"../images/selo-100-porcento-vendido.png"} alt={"Empreendimento Completamente Vendido"} /> */}
              {empreendimentoAttributes.vendido && (
                <img
                  className={"selo"}
                  src={"../images/selo-100-porcento-vendido.png"}
                  alt={"Empreendimento Completamente Vendido"}
                />
              )} 
              <h2>{empreendimentoAttributes.titulo}</h2>
              <p>{empreendimentoAttributes.descricao}</p>
              <br />
              <ContainerLoteButton>
                <p>
                  <strong>{empreendimentoAttributes.quantidade_lote}</strong> Lotes com até <strong>{empreendimentoAttributes.area_lote}</strong>
                </p>
                <br />
                <ButtonSaibaMais id={id}>
                  <a
                    href={`empreendimentos/${id}`}
                    rel="noopener noreferrer"
                  >
                    Saiba mais
                  </a>
                </ButtonSaibaMais>
              </ContainerLoteButton>
            </CardDescription>
          </CardGalery>
        );
      })}
    </CardContainer>
  );
}
