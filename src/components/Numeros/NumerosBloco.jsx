import React, { useState, useEffect } from "react";
import { BlocoNumbers, ContainerNumeros, StyleNumbers } from "./Style";

export default function NumerosBloco({ numerosIniciais }) {

  const [lotes, setLotes] = useState(0);
  const [asfalto, setAsfalto] = useState(0);
  const [rua, setRua] = useState(0);
  const [familias, setFamilias] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setLotes((prevLotes) => {
        const diff = numerosIniciais.lotes - prevLotes;
        const increment = diff < 10 ? diff : Math.ceil(diff / 10);
        return prevLotes + increment;
      });
      setAsfalto((prevAsfalto) => {
        const diff = numerosIniciais.asfalto - prevAsfalto;
        const increment = diff < 10 ? diff : Math.ceil(diff / 10);
        return prevAsfalto + increment;
      });
      setRua((prevRua) => {
        const diff = numerosIniciais.rua - prevRua;
        const increment = diff < 10 ? diff : Math.ceil(diff / 10);
        return prevRua + increment;
      });
      setFamilias((prevFamilias) => {
        const diff = numerosIniciais.familias - prevFamilias;
        const increment = diff < 10 ? diff : Math.ceil(diff / 10);
        return prevFamilias + increment;
      });
    }, 70);

    return () => clearInterval(interval);
  });

  return (
    <ContainerNumeros>
      <BlocoNumbers>
        <StyleNumbers>
          <h1>+{lotes}</h1>
          <p>lotes vendidos</p>
        </StyleNumbers>
        <StyleNumbers>
          <h1>+{asfalto}Km</h1>
          <p>de asfalto</p>
        </StyleNumbers>
        <StyleNumbers>
          <h1>+{rua}</h1>
          <p>casas construidas</p>
        </StyleNumbers>
        <StyleNumbers>
          <h1>+{familias}</h1>
          <p>sonhos realizados</p>
        </StyleNumbers>
      </BlocoNumbers>
    </ContainerNumeros>
  );
}
