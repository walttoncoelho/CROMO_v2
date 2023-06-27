import React, { useEffect, useState } from "react";

import { ContainerEmpreend, ContainerVermais } from "./Style";
import { CardEmpreend } from "./data/galery";
import { ButtonVerMais } from "../../../components/Bottons/Bottons";
import api from "../../../services/api"

export default function SectionEmpreend() {
  let [empreendimentos, setEmpreendimentos] = useState(null);

  useEffect(() => {
    async function obterEmpreendimentos() {
      let { data } = await api.get("/empreendimentos", { params: { 
        empreendimentosPorPagina: 3 
      }});
      setEmpreendimentos(data.empreendimentos);
    };
    obterEmpreendimentos().catch(error => setEmpreendimentos([]));
  }, []);

  return (
    <>
    
    <ContainerEmpreend id="secao-abaixo">
      {empreendimentos && <CardEmpreend empreendimentos={empreendimentos} />}
    </ContainerEmpreend>
    <ContainerVermais>
      <ButtonVerMais>
        <p>
          <a href="/empreendimentos">Ver mais</a>
        </p>
      </ButtonVerMais>
    </ContainerVermais>
    </>
  );
}
