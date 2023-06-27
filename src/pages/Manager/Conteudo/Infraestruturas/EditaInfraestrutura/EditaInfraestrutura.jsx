import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import NavBar from '../../../components/NavBar/NavBar'
import AdministrativePanel from '../../../components/AdministrativePanel/AdministrativePanel'
import { Container, ContainerSidebar, ContainerStage, Input, Label } from '../../../components/Global/StyleGlobal'
import api from "../../../../../services/api"
import { BotaoNormal } from '../../../components/Buttons/Buttons'


export default function EditaInfraestrutura() {
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

  let [iconeAtual, setIconeAtual] = useState(null);

  let { infraestruturaId } = useParams();
  useEffect(() => {
    async function obterInfraestrutura() {
      let { data: infraestrutura } = await api.get(`/manager/infraestruturas/${infraestruturaId}`, {
        headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` }
      });
      setTitulo(infraestrutura.titulo);
      setIconeAtual(infraestrutura.iconeUrl);
    };
    obterInfraestrutura();
  }, [infraestruturaId]);

  let handleSubmit = () => {
    let formIsValid = true;
    if (!formIsValid) {
      return;
    }

    if (icone) {
      let formData = new FormData();
      formData.append("icone", icone);

      api.post(`/manager/infraestruturas/${infraestruturaId}`, formData, {
        headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` }
      })
      .catch(console.error);
    }
    
    api.patch(`/manager/infraestruturas/${infraestruturaId}`, { titulo }, {
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
      <h3><strong>Conteúdo</strong> - Atualizar registro de Infraestrutura</h3>
        <form style={{display: "flex", flexDirection: "column"}}>
          <Label for="titulo">Título da Infraestrutura</Label>
          <Input onChange={handleTituloInput} value={titulo ?? ""} type="text" id="titulo" name="titulo" /> 
          <Label for="icone">Novo Ícone</Label>
          <Input onChange={handleIconeUpload} type="file" id="icone" name="icone" />
          <Label for="iconeAtual">Ícone atual</Label>
          <img width={"50px"} id="iconeAtual" src={iconeAtual} alt={"Imagem do ícone atual"}></img>
          <br/>
          <BotaoNormal type="button" onClick={handleSubmit} disabled={false} >Salvar</BotaoNormal>
        </form>
      </ContainerStage>
    </Container>
  </>
  )
}
