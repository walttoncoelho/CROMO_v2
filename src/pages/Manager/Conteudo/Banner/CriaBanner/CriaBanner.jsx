import React, { useEffect, useState } from 'react'
import NavBar from '../../../components/NavBar/NavBar'
import AdministrativePanel from '../../../components/AdministrativePanel/AdministrativePanel'
import { Container, ContainerSidebar, ContainerStage, Input, Label, Select } from '../../../components/Global/StyleGlobal'
import api from '../../../../../services/api'
import { BotaoNormal } from '../../../components/Buttons/Buttons'

export default function CriaBanner() {
  let [categorias, setCategorias] = useState([]);
  useEffect(() => {
    async function obterCategorias() {
      let { data } = await api.get("/manager/banners/create-options", {
        headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` }
      });
      setCategorias(data.categoriaDoBanner);
    };
    obterCategorias().catch(error => setCategorias([]));
  }, []);

  let [status, setStatus] = useState(null);
  let handleStatusCheck = function (event) {
    let { checked } = event.target;
    setStatus(checked);
  };

  let [titulo, setTitulo] = useState(null);
  let handleTituloInput = function (event) {
    let { value } = event.target;
    setTitulo(value);
  };

  let [categoria, setCategoria] = useState(null);
  let handleCategoriaSelect = function (event) {
    let { value } = event.target;
    setCategoria(value);
  };

  let [redirectLink, setRedirectLink] = useState(null);
  let handleRedirectLinkInput = function (event) {
    let { value } = event.target;
    setRedirectLink(value);
  };

  let [desktop, setDesktop] = useState(null);
  let handleDesktopUpload = function (event) {
    let { files } = event.target;
    setDesktop(files[0]);
  };

  let [mobile, setMobile] = useState(null);
  let handleMobileUpload = function (event) {
    let { files } = event.target;
    setMobile(files[0]);
  };

  let handleSubmit = () => {
    let formIsValid = true;
    if (!formIsValid) {
      return;
    }
    let formData = new FormData();
    formData.append("status", status);
    formData.append("titulo", titulo);
    formData.append("categoria", categoria);
    formData.append("redirectLink", redirectLink);
    formData.append("mobile", mobile);
    formData.append("desktop", desktop);
    formData.append("inicioExibicao", new Date());
    formData.append("fimExibicao", new Date());

    api.post("/manager/banners", formData, {
      headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` }
    })
      .then(_ => window.location.href = "/manager/bannerlist")
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
      <h3><strong>Conteúdo</strong> - Adicionar novo registro de Banner</h3>
          <form style={{ display: "flex", flexDirection: "column" }}>
            <div>
             
              <input onChange={handleStatusCheck} value="false" type="checkbox" id="status" name="status" />
              <Label for="status">Em exibição</Label>
           
            </div>

            <Label for="titulo">Título</Label>
            <Input onChange={handleTituloInput} type="text" id="titulo" name="titulo" />

            <Label for="categoria">Categoria do Banner</Label>
            <Select onChange={handleCategoriaSelect} id="categoria" name="categoria">
              {categorias.map(categoria => (<option key={categoria.valor} value={categoria.valor}>{categoria.texto}</option>))}
            </Select>
            

            <Label for="redirectLink">Link para redirecionamento</Label>
            <Input onChange={handleRedirectLinkInput} type="url" id="redirectLink" name="redirectLink" />

            <Label for="mobile">Versão Mobile</Label>
            <Input onChange={handleMobileUpload} type="file" id="mobile" name="mobile" />

            <Label for="desktop">Versão Desktop</Label>
            <Input onChange={handleDesktopUpload} type="file" id="desktop" name="desktop" />
            <br/>
    
          <BotaoNormal type="button" onClick={handleSubmit} disabled={false}>Salvar</BotaoNormal>
        </form>
      </ContainerStage>
    </Container>
  </>
  )
}
