import React, { useEffect, useState } from 'react'
import NavBar from '../../../components/NavBar/NavBar'
import AdministrativePanel from '../../../components/AdministrativePanel/AdministrativePanel'
import {   Container,  ContainerSidebar, ContainerStage, Select, TextArea } from '../../../components/Global/StyleGlobal'
import api from "../../../../../services/api"
import { Input, InputCheckbox, Label } from '../../../components/Global/StyleGlobal'
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

export default function CriaEmpreendimentos() {
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

  let [infraestruturas, setInfraestruturas] = useState([]);
  let handleInfraestruturaCheck = function (event) {
    let { value, checked } = event.target;
    let updatedInfraestrutura = [...infraestruturas];
    (checked)
      ? updatedInfraestrutura.push(value)
      : updatedInfraestrutura.splice(infraestruturas.indexOf(value), 1)
    setInfraestruturas(updatedInfraestrutura);
  };

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

  let [logoEmpreendimento, setLogoEmpreendimento] = useState(null);
  let handleLogoEmpreendimentoUpload = function (event) {
    let { files } = event.target;
    setLogoEmpreendimento(files[0]);
  };

  let [imagemPlantaBaixa, setImagemPlantaBaixa] = useState(null);
  let handleImagemPlantaBaixaUpload = function (event) {
    let { files } = event.target;
    setImagemPlantaBaixa(files[0]);
  };

  let [imagemDestaque, setImagemDestaque] = useState(null);
  let handleImagemDestaqueUpload = function (event) {
    let { files } = event.target;
    setImagemDestaque(files[0]);
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

  let handleSubmit = () => {
    let formIsValid = true;
    if (!formIsValid) {
      return;
    }
    let formData = new FormData();
    formData.append("status", status);
    formData.append("completamenteVendido", completamenteVendido);
    formData.append("statusDaConstrucao", statusDaConstrucao);
    formData.append("titulo", titulo);
    formData.append("resumo", resumo);
    formData.append("descricao", descricao);
    formData.append("tipoEmpreendimento", tipoEmpreendimento);
    formData.append("slug", slug);
    formData.append("lotes", lotes);
    formData.append("areaLote", areaLote);
    formData.append("logoEmpreendimento", logoEmpreendimento);
    formData.append("imagemPlantaBaixa", imagemPlantaBaixa);
    formData.append("imagemDestaque", imagemDestaque);
    formData.append("latitude", latitude);
    formData.append("longitude", longitude);
    infraestruturas.forEach(infraestrutura => formData.append("infraestruturas[]", infraestrutura));

    api.post("/manager/empreendimentos", formData, {
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
      <h3><strong>Conteúdo</strong> - Adiconar novo de Empreendimento</h3>
        <form style={{ display: "flex", flexDirection: "column" }}>

          <div>
            <input onChange={handleStatusCheck} value="false" type="checkbox" id="status" name="status" />
            <label for="status">Em exibição</label>
          </div>
          
          <div>
            <input onChange={handleCompletamenteVendidoCheck} value="false" type="checkbox" id="completamenteVendido" name="completamenteVendido" />
            <label for="completamenteVendido">Lotes completamente vendidos</label>
          </div>
         
          <Label for="titulo">Título do Empreendimento</Label>
          <Input onChange={handleTituloInput}  placeholder='Título do empreendimento' type="text" id="titulo" name="titulo"  />

          <Label for="resumo">Resumo</Label>
          <Input onChange={handleResumoInput} type="text" id="resumo" name="resumo" />

          <Label for="descricao">Descrição</Label>
          <TextArea onChange={handleDescricaoInput} type="text" id="descricao" name="descricao"/>
      

          <Label for="tipoEmpreendimento">Tipo do Empreendimento</Label>
          <Input onChange={handleTipoEmpreendimentoInput} type="text" id="tipoEmpreendimento" name="tipoEmpreendimento" />

          <Label for="slug">Slug</Label>
          <Input onChange={handleSlugInput} value={slug} type="text" id="slug" name="slug" />

          <Label for="lotes">Quantidade de lotes</Label>
          <Input onChange={handleLotesInput} type="number" min="0" id="lotes" name="lotes" />

          <Label for="areaLote">Área de cada lote</Label>
          <Input onChange={handleAreaLoteInput} type="number" min="0" id="areaLote" name="areaLote" />
   
    
          
          <Label for="logoEmpreendimento">Logo</Label>
          <Input onChange={handleLogoEmpreendimentoUpload} type="file" id="logoEmpreendimento" name="logoEmpreendimento" />

          <Label for="imagemPlantaBaixa">Planta baixa</Label>
          <Input onChange={handleImagemPlantaBaixaUpload} type="file" id="imagemPlantaBaixa" name="imagemPlantaBaixa" />

          <Label for="imagemDestaque">Imagem de Destaque</Label>
          <Input onChange={handleImagemDestaqueUpload} type="file" id="imagemDestaque" name="imagemDestaque" />

          <fieldset style={{ display: "flex", flexDirection: "column" }}>
            <legend>Localização</legend>

            <Label for="latitude">Latitude</Label>
            <Input onChange={handleLatitudeInput} type="number" id="latitude" name="latitude" />
            
            <Label for="longitude">Longitude</Label>
            <Input onChange={handleLongitudeInput} type="number" id="longitude" name="longitude" />
          </fieldset>

          <Label>Status da Construção</Label>
          <Select id="statusConstrucao" value={statusDaConstrucao} onChange={handleStatusDaConstrucaoSelect}>
            <option value="">Selecione</option>
            <option value="emConstrucao">Em construção</option>
            <option value="entregue">Entregue</option>
          </Select>

          <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
            <Label>Infraestruturas</Label>

            {opcoes?.infraestruturas.map(infraestrutura => (
              <section key={infraestrutura.id} >
                <img src={infraestrutura.icone} alt={"Ícone da infraestrutura"} width={60} style={{ display: "flex", flexDirection: "column" }} />
                <InputCheckbox required type="checkbox" name="infraestruturas" value={infraestrutura.id} onChange={handleInfraestruturaCheck} />
                <Label>{infraestrutura.titulo}</Label>
              </section>
            ))}
          </div>


   
          <BotaoNormal type="button" onClick={handleSubmit} disabled={false} >Salvar</BotaoNormal>
        </form>

      </ContainerStage>
    </Container>
  </>
  )
}
