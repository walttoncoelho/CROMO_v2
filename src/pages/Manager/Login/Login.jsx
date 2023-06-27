import React, { useState } from 'react';
import { ButtonSucess } from '../../../components/Bottons/Bottons';
import api from '../../../services/api';
/* import PopupSenha from './PopUpSenha'; */
import { Container, Form } from './Style';
import { useNavigate } from "react-router-dom";


export default function Login() {
  let navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();  
 
    const { formIsValid, errors } = validateForm();
    
    if (!formIsValid) {
      setErrors(errors);
      console.error(errors);
      return;
    }
    let extractToken = response => { 
      let { data: { accessToken } } = response; 
      return accessToken;
    };
    let persistIntoLocalStorage = token => {
      localStorage.setItem("token", token);
    };
    let redirectToManager = () => {
      // return <Navigate to="/manager/painel" />;
      navigate("/manager/painel")
    };
    let responseErrors = (response) => {
      let { response: { data: { message } } } = response;
      setErrors({ message });
      console.error(message);
    }
    let data = { email, password }; 
    api.post("/auth/login", data)
      .then(extractToken)
      .then(persistIntoLocalStorage)
      .then(redirectToManager)
      .catch(responseErrors);
  };

  function validateForm() {
    let errors = {};
    let formIsValid = true;
  
    // Validar o campo email
    if (!email) {
      formIsValid = false;
      errors["email"] = "Por favor, insira seu email.";
    }
  
    if (typeof email !== "undefined") {
      // expressão regular para validar o email
      let lastAtPos = email.lastIndexOf('@');
      let lastDotPos = email.lastIndexOf('.');
  
      if (!(lastAtPos < lastDotPos && lastAtPos > 0 && email.indexOf('@@') === -1 && lastDotPos > 2 && (email.length - lastDotPos) > 2)) {
        formIsValid = false;
        errors["email"] = "Por favor, insira um email válido.";
      }
    }
  
    // Validar o campo senha
    if (!password) {
      formIsValid = false;
      errors["password"] = "Por favor, insira sua senha.";
    }
  
    if (typeof password !== "undefined") {
      if (password.length < 6) {
        formIsValid = false;
        errors["password"] = "A senha deve ter pelo menos 6 caracteres.";
      }
    }
  
    return { formIsValid, errors };
  }
  

  return (
    <Container>

    <Form onSubmit={handleSubmit}>
      <h2>
        Painel administrativo
      </h2>
      <br/>
      <h5>
        Insira os seus dados
      </h5>
      <br/>
   
      <label>       
        <input type="email" placeholder="E-mail"  value={email} onChange={handleEmailChange} />
        {errors.email && <span>{errors.email}</span>}
      </label>
      <label>        
        <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
        {errors.password && <span>{errors.password}</span>}
      </label>
<div className='row__div'>
    {/*   <PopupSenha/>  */}    
      <ButtonSucess type="submit">
        <p>Login</p>
      </ButtonSucess>   


</div>
    </Form>
    </Container>
  );
}
