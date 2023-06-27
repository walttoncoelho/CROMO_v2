import React, { useEffect, useState } from "react";
import NavBar from '../../../components/NavBar/NavBar'
import AdministrativePanel from '../../../components/AdministrativePanel/AdministrativePanel'
import { Container, ContainerSidebar, ContainerStage, Label, Input, TextArea } from '../../../components/Global/StyleGlobal'
import api from "../../../../../services/api";
import {  Popup } from "../../../../../components/footerFaleConosco/Formulario/Style";
import { BotaoNormal } from "../../../components/Buttons/Buttons";


export default function EditaNumeros() {
  let [titulo, setTitulo] = useState(null);
  let [descricao, setDescricao] = useState(null);
  let [lotes, setLotes] = useState(null);
  let [asfalto, setAsfalto] = useState(null);
  let [rua, setRua] = useState(null);
  let [familias, setFamilias] = useState(null);

  let handleTituloChange = (event) => setTitulo(event.target.value)
  let handleDescricaoChange = (event) => setDescricao(event.target.value);
  let handleLotesChange = (event) => setLotes(Number.parseInt(event.target.value));
  let handleAsfaltoChange = (event) => setAsfalto(Number.parseInt(event.target.value));
  let handleRuaChange = (event) => setRua(Number.parseInt(event.target.value));
  let handleFamiliasChange = (event) => setFamilias(Number.parseInt(event.target.value));

  useEffect(() => {
    async function obterNumeros() {
      let { data } = await api.get("/manager/numeros", {
        headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` }
      });
      setTitulo(data.titulo)
      setDescricao(data.descricao)
      setLotes(data.lotes)
      setAsfalto(data.asfalto)
      setRua(data.rua)
      setFamilias(data.familias)
    };
    obterNumeros().catch(error => {
      setTitulo("")
      setDescricao("")
      setLotes(0)
      setAsfalto(0)
      setRua(0)
      setFamilias(0)
    });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (titulo === "" || descricao === "") {
      setError("Por favor, preencha todos os campos.");
      return;
    }
    let numeros = { titulo, descricao, lotes, asfalto, rua, familias };
    try {
      await api.patch('/manager/numeros', numeros, {
        headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` }
      });
      setStatusMessage("Números atualizados com sucesso!");
    } catch (error) {
      setError("Houve algum erro na atualização dos números.");
    }
  };

  const [statusMessage, setStatusMessage] = useState("");
  const [error, setError] = useState("");
  return (
    <>
    <NavBar />
    <Container>
      {statusMessage && (
        <Popup className="show">
          <p>SUCESSO!</p>
          {statusMessage}
          <button onClick={() => { setStatusMessage(""); setError(""); }}>
            Fechar
          </button>
        </Popup>
      )}
      {error && (
        <Popup className="show">
          <p>X</p>
          {error}
          <button onClick={() => { setStatusMessage(""); setError(""); }}>
            Fechar
          </button>
        </Popup>
      )}
      <ContainerSidebar>
        <AdministrativePanel />
      </ContainerSidebar>
      <ContainerStage>
      <h3><strong>Conteúdo</strong> - Editar números</h3>
        <form style={{ display: "flex", flexDirection: "column" }}>      
        
          <Label for="titulo">Título</Label>
          <Input value={titulo} onChange={handleTituloChange} type="text" id="titulo" name="titulo" />

          <Label for="descricao">Descrição</Label>
          <TextArea value={descricao} onChange={handleDescricaoChange} id="descricao" name="descricao" />    

          <Label for="lotes">Lotes vendidos</Label>
          <Input value={lotes} onChange={handleLotesChange} type="number" id="lotes" name="lotes" />

          <Label for="asfalto">Km Asfaltados</Label>
          <Input value={asfalto} onChange={handleAsfaltoChange} type="number" id="asfalto" name="asfalto" />

          <Label for="rua">Casas Construidas</Label>
          <Input value={rua} onChange={handleRuaChange} type="number" id="rua" name="rua" />

          <Label for="familias">Sonhos realizados</Label>
          <Input value={familias} onChange={handleFamiliasChange} type="number" id="familias" name="familias" />
          <br/>
          <BotaoNormal type="button" onClick={handleSubmit} disabled={ false }>Salvar</BotaoNormal>
        </form>
    
      </ContainerStage>
    </Container>
  </>
  )
}
