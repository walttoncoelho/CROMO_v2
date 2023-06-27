import React, { useState } from 'react'
import NavBar from '../../../components/NavBar/NavBar'
import AdministrativePanel from '../../../components/AdministrativePanel/AdministrativePanel'
import { Container, ContainerSidebar, ContainerStage, Input, Label } from '../../../components/Global/StyleGlobal'
import api from "../../../../../services/api"
import { BotaoNormal } from '../../../components/Buttons/Buttons'


export default function CriaInfraestruturas() {
  let [titulo, setTitulo] = useState(null);
  let handleTituloInput = function (event) {
    let { value } = event.target;
    setTitulo(value);
  };

  let [icone, setIcone] = useState(null);
  let handleIconeUpload = function (event) {
    let { files } = event.target;
    setIcone(files[0]);
  };

  let handleSubmit = () => {
    let formIsValid = true;
    if (!formIsValid) {
      return;
    }
    let formData = new FormData();
    formData.append("titulo", titulo);
    formData.append("icone", icone);

    api.post("/manager/infraestruturas", formData, {
      headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` }
    })
    .then(_ => window.location.href = "/manager/infraestruturalist")
    .catch(console.error);
  }
  return (
    <>
    <NavBar />
    <Container>
      <ContainerSidebar>
        <AdministrativePanel />
      </ContainerSidebar>
      <ContainerStage>
      <h3><strong>Conteúdo</strong> - Adicionar novo registro de Infraestrutura</h3>
        <form style={{display: "flex", flexDirection: "column"}}>
          <Label for="titulo">Título da Infraestrutura</Label>
          <Input onChange={handleTituloInput} type="text" id="titulo" name="titulo" /> 
          <Label for="icone">Ícone</Label>
          <Input onChange={handleIconeUpload} type="file" id="icone" name="icone" />
          <br/>
          <BotaoNormal type="button" onClick={handleSubmit} disabled={false} >Salvar</BotaoNormal>
        </form>
      </ContainerStage>
    </Container>
  </>
  )
}
