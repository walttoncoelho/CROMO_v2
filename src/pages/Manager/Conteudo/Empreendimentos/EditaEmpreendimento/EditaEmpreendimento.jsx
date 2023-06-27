import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import NavBar from '../../../components/NavBar/NavBar'
import AdministrativePanel from '../../../components/AdministrativePanel/AdministrativePanel'
import {   Container,  ContainerSidebar, ContainerStage, Select, TextArea } from '../../../components/Global/StyleGlobal'
import api from "../../../../../services/api"
import { Input, Label } from '../../../components/Global/StyleGlobal'
import { BotaoNormal } from '../../../components/Buttons/Buttons'

let slugify = function (string = "", separator = "-") {
  return string
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9- ]/g, '')
    .replace(/\s+/g, separator);
};

export default function EditaEmpreendimento() {
  let [statusDaConstrucao, setStatusDaConstrucao] = useState(null);
  let handleStatusDaConstrucaoSelect = function (event) {
    let { value } = event.target;
    setStatusDaConstrucao(value);
  };

  let [status, setStatus] = useState(null);
  let handleStatusCheck = function (event) {
    let { checked } = event.target;
    setStatus(checked);
  };

  let [completamenteVendido, setCompletamenteVendido] = useState(null);
  let handleCompletamenteVendidoCheck = function (event) {
    let { checked } = event.target;
    setCompletamenteVendido(checked);
  };

  let [titulo, setTitulo] = useState(null);
  let handleTituloInput = function (event) {
    let { value } = event.target;
    setTitulo(value);
    setSlug(slugify(value))
  };

  let [resumo, setResumo] = useState(null);
  let handleResumoInput = function (event) {
    let { value } = event.target;
    setResumo(value);
  };

  let [descricao, setDescricao] = useState(null);
  let handleDescricaoInput = function (event) {
    let { value } = event.target;
    setDescricao(value);
  };

  let [tipoEmpreendimento, setTipoEmpreendimento] = useState(null);
  let handleTipoEmpreendimentoInput = function (event) {
    let { value } = event.target;
    setTipoEmpreendimento(value);
  };

  let [slug, setSlug] = useState(null);
  let handleSlugInput = function (event) {
    let { value } = event.target;
    setSlug(slugify(value));
  };

  let [lotes, setLotes] = useState(null);
  let handleLotesInput = function (event) {
    let { value } = event.target;
    setLotes(value);
  };

  let [areaLote, setAreaLote] = useState(null);
  let handleAreaLoteInput = function (event) {
    let { value } = event.target;
    setAreaLote(value);
  };

  let [latitude, setLatitude] = useState(null);
  let handleLatitudeInput = function (event) {
    let { value } = event.target;
    setLatitude(value);
  };

  let [longitude, setLongitude] = useState(null);
  let handleLongitudeInput = function (event) {
    let { value } = event.target;
    setLongitude(value);
  };

  let [galeria, setGaleria] = useState(null);
  let handleFotoGaleriaUpload = function (event) {
    let { files } = event.target;
    let imagem = files[0];

    let formData = new FormData();
    formData.append("imagem", imagem);
    formData.append("status", true);
    formData.append("ordemExibicao", 1);
    
    api.post(`/manager/empreendimentos/${empreendimentoId}/galeria`, formData, {
      headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` }
    })
    .then(() => { window.location.href = `/manager/empreendimentoedit/${empreendimentoId}` })
  };

  let handleExcluirFotoGaleria = function (fotoId) {
    api.delete(`/manager/imagem/${fotoId}`, {
      headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` }
    })
    .then(() => { window.location.href = `/manager/empreendimentoedit/${empreendimentoId}` })
  };

  let { empreendimentoId } = useParams();
  useEffect(() => {
    async function obterEmpreendimento() {
      let { data: empreendimento } = await api.get(`/manager/empreendimentos/${empreendimentoId}`, {
        headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` }
      });
      setStatusDaConstrucao(empreendimento.statusDaConstrucao);
      setStatus(empreendimento.status);
      setCompletamenteVendido(empreendimento.completamenteVendido);
      setTitulo(empreendimento.titulo);
      setResumo(empreendimento.resumo);
      setDescricao(empreendimento.descricao);
      setTipoEmpreendimento(empreendimento.tipoEmpreendimento);
      setSlug(empreendimento.slug);
      setLotes(empreendimento.lotes);
      setAreaLote(empreendimento.areaLote);
      setLatitude(empreendimento.latitude);
      setLongitude(empreendimento.longitude);
      return empreendimento.slug;
    };
    async function obterGaleria(empreendimentoSlug) {
      let { data: empreendimento } = await api.get(`/empreendimentos/${empreendimentoSlug}`);
      setGaleria(empreendimento.galeria);
      return empreendimento.galeria;
    }
    obterEmpreendimento().then(obterGaleria);
  }, [empreendimentoId]);

  let [opcoes, setOpcoes] = useState(null);
  useEffect(() => {
    async function obterOpcoes() {
      let { data } = await api.get("/manager/empreendimento/create-options", {
        headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` }
      });
      setOpcoes(data);
    };
    obterOpcoes().catch(error => setOpcoes({
      statusDaConstrucao: [],
      infraestruturas: [],
    }));
  }, []);

  let handleSubmit = () => {
    let formIsValid = true;
    if (!formIsValid) {
      return;
    }
    let formData = {
      status,
      completamenteVendido,
      statusDaConstrucao,
      titulo,
      resumo,
      descricao,
      tipoEmpreendimento,
      slug,
      lotes,
      areaLote,
      latitude,
      longitude
    };

    api.patch(`/manager/empreendimentos/${empreendimentoId}`, formData, {
      headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` }
    })
    .then(_ => window.location.href = "/manager/empreendimentolist")
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
      <h3><strong>Conteúdo</strong> - Atualizar registro de Empreendimento</h3>
        <form style={{ display: "flex", flexDirection: "column" }}>
          <div>
            <input onChange={handleStatusCheck} checked={status} type="checkbox" id="status" name="status" />
            <label for="status">Em exibição</label>
          </div>
          
          <div>
            <input onChange={handleCompletamenteVendidoCheck} checked={completamenteVendido} type="checkbox" id="completamenteVendido" name="completamenteVendido" />
            <label for="completamenteVendido">Lotes completamente vendidos</label>
          </div>
         
          <Label for="titulo">Título do Empreendimento</Label>
          <Input onChange={handleTituloInput} value={titulo} placeholder='Título do empreendimento' type="text" id="titulo" name="titulo"  />

          <Label for="resumo">Resumo</Label>
          <Input onChange={handleResumoInput} value={resumo} type="text" id="resumo" name="resumo" />

          <Label for="descricao">Descrição</Label>
          <TextArea onChange={handleDescricaoInput} value={descricao} type="text" id="descricao" name="descricao"/>
      

          <Label for="tipoEmpreendimento">Tipo do Empreendimento</Label>
          <Input onChange={handleTipoEmpreendimentoInput} value={tipoEmpreendimento} type="text" id="tipoEmpreendimento" name="tipoEmpreendimento" />

          <Label for="slug">Slug</Label>
          <Input onChange={handleSlugInput} value={slug} type="text" id="slug" name="slug" />

          <Label for="lotes">Quantidade de lotes</Label>
          <Input onChange={handleLotesInput} value={lotes} type="number" min="0" id="lotes" name="lotes" />

          <Label for="areaLote">Área de cada lote</Label>
          <Input onChange={handleAreaLoteInput} value={areaLote} type="number" min="0" id="areaLote" name="areaLote" />
   
          <fieldset style={{ display: "flex", flexDirection: "column" }}>
            <legend>Localização</legend>

            <Label for="latitude">Latitude</Label>
            <Input onChange={handleLatitudeInput} value={latitude} type="number" id="latitude" name="latitude" />
            
            <Label for="longitude">Longitude</Label>
            <Input onChange={handleLongitudeInput} value={longitude} type="number" id="longitude" name="longitude" />
          </fieldset>

          <Label>Status da Construção</Label>
          <Select id="statusConstrucao" value={statusDaConstrucao} onChange={handleStatusDaConstrucaoSelect}>
            {opcoes?.statusDaConstrucao.map(status => (
              <option selected={status.valor === statusDaConstrucao } value={status.valor}>{status.texto}</option>
            ))}
          </Select>

          {/* <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
            <Label>Infraestruturas</Label>

            {opcoes?.infraestruturas.map(infraestrutura => (
              <section key={infraestrutura.id} >
                <img src={infraestrutura.icone} alt={"Ícone da infraestrutura"} width={60} style={{ display: "flex", flexDirection: "column" }} />
                <Input required type="checkbox" name="infraestruturas" value={infraestrutura.id} onChange={handleInfraestruturaCheck} />
                <Label>{infraestrutura.titulo}</Label>
              </section>
            ))}
          </div> */}

          <BotaoNormal type="button" onClick={handleSubmit} disabled={false} >Salvar</BotaoNormal>
        </form>

      </ContainerStage>
      <ContainerStage>

        <fieldset>
          <h4>Galeria do Empreendimento</h4>

          <Label for="fotoGaleria">Adicionar nova imagem</Label>
          <br></br>
          <Input onChange={handleFotoGaleriaUpload} type="file" id="fotoGaleria" name="fotoGaleria" />

          <section style={{display: "flex", flexWrap: "wrap"}}>
            {galeria?.map((item, index) => (
              <article style={{ display: "flex", flexDirection: "column", margin: "4px" }}>
                <img style={{ width: "164px", height: "164px" }} src={item.imagem} alt={`Imagem ${index}`}></img>
                <button style={{backgroundColor: "white"}} onClick={event => handleExcluirFotoGaleria(item.id)}>Excluir imagem</button>
              </article>
            ))}
          </section>
        </fieldset>
      </ContainerStage>
    </Container>
  </>
  )
}
