import React, { useEffect, useState } from "react";

import numerosPlaceholder from "../../../data/api/numeros";
import NumerosBloco from "../../../components/Numeros/NumerosBloco";
import BigNumeros from "./BigNumeros";
import { BlocoDesc, BlocoNumbers, ContainerNumeros, ContainerVideoEnumeros } from "./Style";

import api from "../../../services/api";
import Youtube from "./Youtube";

export default function Numeros() {
  let [numerosIniciais, setNumerosIniciais] = useState(null);

  useEffect(() => {
    async function obterNumerosIniciais() {
      let { data } = await api.get("/numeros");
      setNumerosIniciais(data);
    };
    obterNumerosIniciais().catch(error => setNumerosIniciais(numerosPlaceholder));
  }, []);

  return (
    <>
    <ContainerVideoEnumeros>
      <Youtube/>

      <ContainerNumeros>
        <BlocoDesc>
          { numerosIniciais && <BigNumeros detalhes={ numerosIniciais } />}
        </BlocoDesc>
        <BlocoNumbers>
          { numerosIniciais && <NumerosBloco numerosIniciais={ numerosIniciais } />}
        </BlocoNumbers>
      </ContainerNumeros>
    </ContainerVideoEnumeros>
    </>
  );
}
