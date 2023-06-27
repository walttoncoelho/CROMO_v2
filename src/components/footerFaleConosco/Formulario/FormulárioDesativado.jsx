import React, { useState } from "react";
import { Button, FormContainer, Input, Radio, InputArea, TitleContato } from "./Style";

export function FooterFormulario() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [subscription, setSubscription] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    console.log({
      name,
      email,
      phone,
      subscription,
    });
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <TitleContato>
        <h2>Entre em contato</h2>
      </TitleContato>

      <label htmlFor="name" title=" Ente em contato">

      </label>
      <Input
        type="text"
        id="name"
        name="name"
        placeholder=" Qual o seu nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />

      <label htmlFor="email" title=" Digite seu e-mail">

      </label>
      <Input
        type="email"
        id="email"
        name="email"
        placeholder=" Digite seu e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />

      <label htmlFor="phone" title=" Digite seu número de telefone com DDD">

      </label>
      <Input
        type="tel"
        id="phone"
        name="phone"
        placeholder="Digite seu melhor telefone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <br />
      <InputArea
        type="textarea"
        id="mensagem"
        name="mensagem"
        placeholder="Quer deixar aqui uma mensagem?"
        value={mensagem}
        onChange={(e) => setMensagem(e.target.mensagem)}
      />

      <Radio>


        <input
          type="radio"
          id="content"
          name="subscription"
          value="yes"
          checked={subscription}
          onChange={(e) => setSubscription(true)}
        />
        <label htmlFor="content"> Quero receber conteúdos</label>
        <br />
      </Radio>

      <Button type="submit" value="Enviar">
        Enviar
      </Button>
    </FormContainer>

  );
}


