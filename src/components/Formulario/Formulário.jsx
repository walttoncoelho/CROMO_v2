import React, { useState } from "react";
import axios from "axios";
import { Button, Form, Input, InputArea, Popup, Radio } from "./Style";
import api from "../../services/api";

export default function Formulario() {
  const [state, setState] = useState({
    name: '',
    email: '',
    phone: '',
    mensagem: '',
    subscription: false,
    status: null
  });

  const [statusMessage, setStatusMessage] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);


  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    const newValue = name === 'subscription' ? checked : value;

    setState((prevState) => ({ ...prevState, [name]: newValue }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validar campos vazios
    if (state.name === '' || state.email === '' || state.phone === '' || state.mensagem === '') {
      setError("Por favor, preencha todos os campos.");
      return;
    }

    try {
      let data = {
        nome: state.name,
        email: state.email,
        telefone: state.phone.replace(["(", ")", "-", " "], ""),
        mensagem: state.mensagem,
        newsletter: state.subscription
      };
      await api.post("/manager/leads", data);
    }
    catch (error) {
      console.error(error)
    }
    
    try {
      setIsLoading(true); // Ativa o loading
      await axios.post('https://sea-turtle-app-zydld.ondigitalocean.app/send-email', state);
  
      setState((prevState) => ({ ...prevState, status: 'success' }));
      setStatusMessage("Obrigado, rececbemos o seu contato, retornaremos o mais breve possível.");
    } catch (error) {
      console.log(error);
      setState((prevState) => ({ ...prevState, status: 'error' }));
      setError("Ocorreu um erro ao enviar o e-mail.");
    }
    finally {
      setIsLoading(false); // Desativa o loading
    }
  };
  
  return (
    <Form onSubmit={handleSubmit}>
      {statusMessage && (
        <Popup className="show">
          <svg width="44" height="39" viewBox="0 0 44 39" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M43.3881 0.426696C43.1446 0.217982 42.8484 0.0791733 42.5313 0.0252247C42.2143 -0.0287239 41.8884 0.00423251 41.5888 0.120543L1.78089 15.5861C1.21672 15.8039 0.73909 16.1978 0.419898 16.7083C0.100705 17.2189 -0.0427689 17.8187 0.0110752 18.4172C0.0649193 19.0157 0.313167 19.5807 0.718446 20.0271C1.12372 20.4735 1.6641 20.777 2.25821 20.8921L12.5726 22.9026V34.32C12.5706 34.9419 12.7567 35.55 13.107 36.0656C13.4572 36.5813 13.9554 36.9806 14.5369 37.2118C15.1175 37.4472 15.756 37.5037 16.3694 37.374C16.9828 37.2443 17.5427 36.9343 17.9763 36.4845L22.9499 31.3637L30.8403 38.22C31.4096 38.7213 32.1438 38.9987 32.9048 39C33.2382 38.9997 33.5696 38.9478 33.8869 38.8459C34.4054 38.6826 34.8717 38.3873 35.2394 37.9894C35.6072 37.5915 35.8634 37.1049 35.9828 36.5781L43.9558 2.14466C44.0271 1.83412 44.0119 1.51017 43.9119 1.20752C43.8119 0.90488 43.6308 0.63496 43.3881 0.426696ZM31.3785 7.44676L13.7806 19.9581L4.03784 18.0607L31.3785 7.44676ZM15.7154 34.32V25.0613L20.5849 29.3006L15.7154 34.32ZM32.9087 35.88L16.6681 21.7423L40.0429 5.11064L32.9087 35.88Z" />
</svg>
          <p>SUCESSO!</p>
          {statusMessage}
          <button onClick={() => {setStatusMessage(""); setError("");}}>
            Fechar
          </button>
        </Popup>
      )}
      {error && (
        <Popup className="show">
          <p>X</p>
          {error}
          <button onClick={() => {setStatusMessage(""); setError("");}}>
            Fechar
          </button>
        </Popup>
      )}
  
      <label htmlFor="name" title="Digite seu nome completo">  
      </label>
      <Input
      
        type="text"
        id="name"
        name="name"
        placeholder="  Qual o seu nome"
        value={state.name}
        onChange={handleChange} 
        required
      />
      
      <br />
  
      <label htmlFor="email" title="Digite seu e-mail">   
      </label>
      <Input
        type="email"
        id="email"
        name="email"
        placeholder="  Digite seu e-mail"
        value={state.email}
        onChange={handleChange} 
        required
      />
      <br />
  
      <label htmlFor="phone" title="  Digite seu número de telefone com DDD">
      </label>
      <Input
        type="tel"
        id="phone"
        name="phone"
        placeholder="  Digite seu melhor telefone"
        value={state.phone}
        onChange={handleChange} 
        required
      />
      <br />
  
      <label htmlFor="mensagem" title="Digite sua mensagem">
      </label>
      <InputArea
        id="mensagem"
        name="mensagem"
        placeholder="  Quer deixar aqui uma mensagem?"
        value={state.mensagem}
        onChange={handleChange} 
      />
  
      <Radio>
        <label style={{ margin: '10px 0', fontWeight: 'bold' }}>
          <input type="checkbox" name="subscription" checked={state.subscription} onChange={handleChange} style={{ marginRight: '5px' }} />
          Quero receber conteúdo.
        </label>
      </Radio>
  
      <Button type="submit" disabled={isLoading || state.name === '' || state.email === '' || state.phone === '' || state.mensagem === ''}>
      {isLoading ? 'Enviando...' : 'Enviar'}
      </Button> 
  
    </Form>
  );
}
