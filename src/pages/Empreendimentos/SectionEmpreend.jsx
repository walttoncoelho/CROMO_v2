import React, { useEffect, useState } from "react";

import { ContainerEmpreend } from "./Style";
import { CardEmpreend } from "./data/galery";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";

import ButtonContact from "../../components/ButtonContact/ButtonContact";
/* import data from "../../../data/api/empreendimentos" */
import api from "../../services/api";

export default function Empreendimentos() {
  let [empreendimentos, setEmpreendimentos] = useState(null);

  useEffect(() => {
    async function obterEmpreendimentos() {
      let { data } = await api.get("/empreendimentos", {
        params: {
          empreendimentosPorPagina: 6
        }
      });
      setEmpreendimentos(data.empreendimentos);
    };
    obterEmpreendimentos().catch(error => setEmpreendimentos([]));
  }, []);

  return (
    <>
    <Navbar/>
      <ContainerEmpreend >
        {empreendimentos && <CardEmpreend empreendimentos={empreendimentos} />}
      </ContainerEmpreend>
    
      <ButtonContact/>
      <Footer />

    </>
  );
}
