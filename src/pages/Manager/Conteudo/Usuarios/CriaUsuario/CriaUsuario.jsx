import React, { useState } from 'react'
import NavBar from '../../../components/NavBar/NavBar'
import AdministrativePanel from '../../../components/AdministrativePanel/AdministrativePanel'
import { Container, ContainerSidebar, ContainerStage, Input, Label } from '../../../components/Global/StyleGlobal'
import api from '../../../../../services/api'
import { BotaoNormal } from '../../../components/Buttons/Buttons'

export default function CriaUsuario() {
  let [status, setStatus] = useState(null);
  let handleStatusCheck = function (event) {
    let { checked } = event.target;
    setStatus(checked);
  };

  let [name, setName] = useState(null);
  let handleNameInput = function (event) {
    let { value } = event.target;
    setName(value);
  };

  let [email, setEmail] = useState(null);
  let handleEmailInput = function (event) {
    let { value } = event.target;
    setEmail(value);
  };

  let [password, setPassword] = useState(null);
  let handlePasswordInput = function (event) {
    let { value } = event.target;
    setPassword(value);
  };

  let handleSubmit = () => {
    let formIsValid = true;
    if (!formIsValid) {
      return;
    }
    let formData = {
      status,
      name,
      username: email,
      email,
      password,
    };
    api.post("/manager/users", formData, {
      headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` }
    })
      .then(_ => window.location.href = "/manager/usuarios")
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
      <h3><strong>Conteúdo</strong> - Adicionar novo registro de Usuário</h3>
          <form style={{ display: "flex", flexDirection: "column" }}>
            <div>
              <input onChange={handleStatusCheck} value="false" type="checkbox" id="status" name="status" />
              <Label for="status">Ativo</Label>
            </div>

            <Label for="name">Nome</Label>
            <Input onChange={handleNameInput} type="text" id="name" name="name" />

            <Label for="email">Email</Label>
            <Input onChange={handleEmailInput} type="email" id="email" name="email" />

            <Label for="password">Senha</Label>
            <Input onChange={handlePasswordInput} type="password" id="password" name="password" />
            <br/>
    
          <BotaoNormal type="button" onClick={handleSubmit} disabled={false}>Salvar</BotaoNormal>
        </form>
      </ContainerStage>
    </Container>
  </>
  )
}
