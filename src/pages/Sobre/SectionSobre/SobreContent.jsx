import React, { useEffect, useState } from "react";
import api from "../../../services/api";
import data from "../../../data/pageSobre/sobre";
import NumerosBloco from "../../../components/Numeros/NumerosBloco";
import numerosPlaceholder from "../../../data/api/numeros";

import controleQualidade from "../../../data/pageSobre/controleQualidade";
import {
  ContainerNumerero,
  ContainerNumererosQualidade,
  ContainerQualidade,
  ContainerSobre
} from "./Style.jsx";

export default function SobreContent() {
  let [numerosIniciais, setNumerosIniciais] = useState(null);

  useEffect(() => {
    async function obterNumerosIniciais() {
      let { data: numerosApi } = await api.get("/numeros");
      setNumerosIniciais(numerosApi);
    };
    obterNumerosIniciais().catch(error => setNumerosIniciais(numerosPlaceholder));
  }, []);

  return (
    <>
      <ContainerSobre>
        {data.map((item) => (
          <div key={item.id}><br/>
            <h1>{item.title}</h1><br/>
            <p>{item.descricao}</p><br/>
          </div>
        ))}
      </ContainerSobre>
      <ContainerNumererosQualidade>
        <ContainerNumerero>
          {numerosIniciais && <NumerosBloco numerosIniciais={numerosIniciais} />}
        </ContainerNumerero>
        <ContainerQualidade>
          {controleQualidade.map((item) => (
            <div key={item.id}>
              <h1>{item.title}</h1><br/>
              <p>{item.descricao}</p>
            </div>
          ))}
        </ContainerQualidade>
      </ContainerNumererosQualidade>
    </>
  );
}
