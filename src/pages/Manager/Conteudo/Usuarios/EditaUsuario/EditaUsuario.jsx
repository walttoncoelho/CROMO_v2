import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import NavBar from '../../../components/NavBar/NavBar'
import AdministrativePanel from '../../../components/AdministrativePanel/AdministrativePanel'
import { Container, ContainerSidebar, ContainerStage, Input, Label } from '../../../components/Global/StyleGlobal'
import api from '../../../../../services/api'
import { BotaoNormal } from '../../../components/Buttons/Buttons'

export default function EditaUsuario() {
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

  let { usuarioId } = useParams();
  useEffect(() => {
    async function obterUsuario() {
      let { data: usuario } = await api.get(`/manager/users/${usuarioId}`, {
        headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` }
      });
      setStatus(usuario.status);
      setName(usuario.name);
    };
    obterUsuario();
  }, [usuarioId]);

  let handleSubmit = () => {
    let formIsValid = true;
    if (!formIsValid) {
      return;
    }
    let formData = {
      status,
      name,
    };
    api.patch(`/manager/users/${usuarioId}`, formData, {
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
      <h3><strong>Conteúdo</strong> - Atualizar registro de Usuário</h3>
          <form style={{ display: "flex", flexDirection: "column" }}>
            <div>
              <input onChange={handleStatusCheck} checked={status} type="checkbox" id="status" name="status" />
              <Label for="status">Ativo</Label>
            </div>

            <Label for="name">Nome</Label>
            <Input onChange={handleNameInput} value={name} type="text" id="name" name="name" />
            <br/>
    
          <BotaoNormal type="button" onClick={handleSubmit} disabled={false}>Atualizar</BotaoNormal>
        </form>
      </ContainerStage>
    </Container>
  </>
  )
}
