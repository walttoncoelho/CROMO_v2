import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import NavBar from '../../../components/NavBar/NavBar'
import AdministrativePanel from '../../../components/AdministrativePanel/AdministrativePanel'
import { Container, ContainerSidebar, ContainerStage, Input, Label, Select } from '../../../components/Global/StyleGlobal'
import api from '../../../../../services/api'
import { BotaoNormal } from '../../../components/Buttons/Buttons'

export default function EditaBanner() {
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

  let [imagemDesktopAtual, setImagemDesktopAtual] = useState(null);
  let [imagemMobileAtual, setImagemMobileAtual] = useState(null);

  let { bannerId } = useParams();
  useEffect(() => {
    async function obterBanner() {
      let { data: banner } = await api.get(`/manager/banner/${bannerId}`, {
        headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` }
      });
      setStatus(banner.status);
      setTitulo(banner.titulo);
      setCategoria(banner.categoria);
      setRedirectLink(banner.redirectLink);
      setImagemDesktopAtual(banner.desktop);
      setImagemMobileAtual(banner.mobile);
    };
    obterBanner();
  }, [bannerId]);

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

  let handleSubmit = () => {
    let formIsValid = true;
    if (!formIsValid) {
      return;
    }
    let formData = {
      status,
      titulo,
      categoria,
      redirectLink
    };

    api.patch(`/manager/banner/${bannerId}`, formData, {
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
      <h3><strong>Conteúdo</strong> - Atualizar registro de Banner</h3>
          <form style={{ display: "flex", flexDirection: "column" }}>
            <div>
              <input onChange={handleStatusCheck} checked={status} type="checkbox" id="status" name="status" />
              <Label for="status">Em exibição</Label>
            </div>

            <Label for="titulo">Título</Label>
            <Input onChange={handleTituloInput} value={titulo} type="text" id="titulo" name="titulo" />

            <Label for="categoria">Categoria do Banner</Label>
            <Select onChange={handleCategoriaSelect} id="categoria" name="categoria">
              {categorias.map(categoria => (<option key={categoria.valor} value={categoria.valor} selected={categoria === categoria.valor}>{categoria.texto}</option>))}
            </Select>
            

            <Label for="redirectLink">Link para redirecionamento</Label>
            <Input onChange={handleRedirectLinkInput} value={redirectLink} type="url" id="redirectLink" name="redirectLink" />
            <br />

            <Label for="imagemAtualDesktop">Imagem Atual (versão desktop)</Label>
            <img src={imagemDesktopAtual} alt={"Imagem Atual para Desktop"} id="imagemAtualDesktop"></img>
            <br />

            <Label for="imagemAtualMobile">Imagem Atual (versão mobile)</Label>
            <img src={imagemMobileAtual} alt={"Imagem Atual para Mobile"} id="imagemAtualMobile"></img>
    
          <BotaoNormal type="button" onClick={handleSubmit} disabled={false}>Salvar</BotaoNormal>
        </form>
      </ContainerStage>
    </Container>
  </>
  )
}
