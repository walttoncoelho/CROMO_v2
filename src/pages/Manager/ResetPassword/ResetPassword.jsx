import React, { useState } from 'react';
import { ButtonSucess } from '../../../components/Bottons/Bottons';
import { BgPopUp,  FormReset } from './Style';


export default function ResetPassword() {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // adicione aqui o código para enviar o email para a API de redefinição de senha
    setSuccess(true);
  };

  if (success) {
    return <div>Um email com instruções para redefinir sua senha foi enviado para {email}.</div>;
  }

  return (
    <BgPopUp>

      <FormReset onSubmit={handleSubmit} >
        <div>
          <h2>
            Redefina a sua senha
          </h2>
          <h5>
            Digite o email cadastrado para redefinir a senha.
          </h5>
      
          <label >
            <input type="email" placeholder='E-mail' value={email} onChange={handleEmailChange} />
          </label>

            <ButtonSucess type="submit">
              <p>Redefinir senha</p>
            </ButtonSucess>
       

        </div>
      </FormReset>


    </BgPopUp>
  );
}


