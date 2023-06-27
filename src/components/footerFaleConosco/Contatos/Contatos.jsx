import React, { useEffect, useState } from 'react'
import {
  ColumContato,
  ContainerContato,
} from "./Style";

import { ButtonFaleConosco, RowImput } from "../../Bottons/Bottons";
import RedesSociais from '../../RedesSociais/RedesSociais';
import api from '../../../services/api';

export default function Contatos() {
  let [whatsapp, setWhatsapp] = useState(null);
  let [email, setEmail] = useState(null);

  useEffect(() => {
    async function obterWhatsapp() {
      let { data } = await api.get("whatsapp");
      setWhatsapp(data);
    };
    obterWhatsapp().catch(error => {
      setWhatsapp({
        link: "https://api.whatsapp.com/send?phone=5599992239558",
        titulo: "Whatsapp",
        numero: "+55 (99) 99223-9558",
      });
    });
  }, []);

  let redirectWhatsapp = (event) => {
    event.preventDefault();
    window.open(whatsapp.link);
  };

  useEffect(() => {
    async function obterEmail() {
      let { data } = await api.get("email");
      setEmail(data);
    };
    obterEmail().catch(error => {
      setEmail({
        link: "mailto:contato@cromoconstrutora.com.br",
        titulo: "Email",
        endereco: "contato@cromoconstrutora.com.br",
      });
    });
  }, []);

  let mailTo = (event) => {
    event.preventDefault();
    window.location = email.link
  };

  return (
    <>
      <ColumContato>
        <ContainerContato>
          <h1>Fale conosco</h1>
          <p>
            Você pode entrar em contato direto com nossa equipe comercial.
          </p>

          {whatsapp && <ButtonFaleConosco onClick={redirectWhatsapp}>
            <RowImput>
              <svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.7963 16.8072L17.9075 14.1685L17.8913 14.161C17.5856 14.0302 17.2521 13.9778 16.921 14.0083C16.5899 14.0389 16.2716 14.1515 15.995 14.336C15.9624 14.3575 15.9311 14.3809 15.9013 14.406L12.8588 16.9997C10.9313 16.0635 8.94126 14.0885 8.00501 12.186L10.6025 9.09725C10.6275 9.066 10.6513 9.03475 10.6738 9.001C10.8543 8.72512 10.9638 8.4089 10.9926 8.08046C11.0214 7.75203 10.9686 7.42157 10.8388 7.1185V7.1035L8.19251 1.20475C8.02094 0.808828 7.72592 0.479016 7.35149 0.264545C6.97707 0.0500744 6.54333 -0.0375518 6.11501 0.0147471C4.42122 0.23763 2.86649 1.06946 1.74118 2.35487C0.61587 3.64028 -0.00305116 5.29136 1.13108e-05 6.99975C1.13108e-05 16.9247 8.07501 24.9997 18 24.9997C19.7084 25.0028 21.3595 24.3839 22.6449 23.2586C23.9303 22.1333 24.7621 20.5785 24.985 18.8847C25.0374 18.4566 24.95 18.0229 24.7357 17.6485C24.5215 17.2741 24.1919 16.979 23.7963 16.8072ZM18 22.9997C13.758 22.9951 9.691 21.3079 6.69142 18.3083C3.69184 15.3088 2.00464 11.2418 2.00001 6.99975C1.99531 5.77911 2.43507 4.59849 3.23718 3.67838C4.03929 2.75827 5.14889 2.16158 6.35876 1.99975C6.35827 2.00473 6.35827 2.00976 6.35876 2.01475L8.98376 7.88975L6.40001 10.9822C6.37379 11.0124 6.34996 11.0446 6.32876 11.0785C6.14066 11.3671 6.0303 11.6995 6.0084 12.0433C5.9865 12.3872 6.0538 12.7308 6.20376 13.041C7.33626 15.3572 9.67001 17.6735 12.0113 18.8047C12.3237 18.9533 12.6694 19.0183 13.0144 18.9933C13.3595 18.9683 13.6922 18.8543 13.98 18.6622C14.0121 18.6406 14.043 18.6173 14.0725 18.5922L17.1113 15.9997L22.9863 18.631C22.9863 18.631 22.9963 18.631 23 18.631C22.8402 19.8426 22.2444 20.9544 21.3241 21.7585C20.4038 22.5626 19.2221 23.0039 18 22.9997Z" />
              </svg>
              <p>
                <a href={whatsapp.link}>{whatsapp.numero}</a>
              </p>
            </RowImput>
          </ButtonFaleConosco>}

          {email && <ButtonFaleConosco onClick={mailTo}>
            <RowImput>
              <svg viewBox="0 0 26 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M25 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1V18C0 18.5304 0.210714 19.0391 0.585786 19.4142C0.960859 19.7893 1.46957 20 2 20H24C24.5304 20 25.0391 19.7893 25.4142 19.4142C25.7893 19.0391 26 18.5304 26 18V1C26 0.734784 25.8946 0.48043 25.7071 0.292893C25.5196 0.105357 25.2652 0 25 0ZM22.4287 2L13 10.6437L3.57125 2H22.4287ZM24 18H2V3.27375L12.3237 12.7375C12.5082 12.9069 12.7496 13.0008 13 13.0008C13.2504 13.0008 13.4918 12.9069 13.6763 12.7375L24 3.27375V18Z" />
              </svg>
              <p>
                <a href={email.link}>Envie um E-mail</a>
              </p>
            </RowImput>
          </ButtonFaleConosco>}

          <RedesSociais />
        </ContainerContato>
      </ColumContato>

    </>
  );
}
