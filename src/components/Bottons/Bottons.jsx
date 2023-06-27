import styled from "styled-components";

export const ButtonSucess = styled.button`
  display: flex;
  width: 130px;
  height: 50px;
  max-width: 130px;
  max-height: 50px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-style: none;
  background-color: #ffffff;
  p {
    color: #0c0c0c;
    font-size: 1.2em;
  }

  &:hover {
    background-color: #05254e;
    p {
    color: #ffffff;
    font-size: 1.3em;
  }
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 56px;
  left: 32px;
  top: 185px;
  background-color: #22272e;
  color: #fff;
  border: 1px dashed #4d5055;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
  background-color: #11922d;
  }
`;

export const SubMenu = styled.button`
  width: 100%;
  height: 56px;
  left: 32px;
  top: 185px;
  background-color: #393b3d;
  color: #fff;
  border: 1px dashed #4d5055;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
  background-color: #11922d;
  }
`;

export const ButtonSite = styled.button`
  box-sizing: border-box;
  width: 183px;
  height: 56px;
  border-radius: 5px;
  color: #fff;
  background-color: #22272e;
  border: 1px dashed #20b941;
  cursor: pointer;

  &:hover {
  background-color: #11922d;
  }
`;

export const ButtonSair = styled.button`
  box-sizing: border-box;
  width: 183px;
  height: 56px;
  border-radius: 5px;
  color: #fff;
  background-color: #22272e;
  border: 1px dashed #cecece;
  cursor: pointer;

  &:hover {
  border: 1px dashed #20b941;
  }
`;

export const ButtonVerMais = styled.button`
  box-sizing: border-box;
  width: 150px;
  height: 48px;
  border-radius: 10px;
  background-color: #ffffff;
  border: 2px solid #0a0a0a;
  cursor: pointer;

  p {
    margin: auto;
    font-weight: 700;
    font-size: 14px;
    line-height: 120%;
    letter-spacing: 0.05em;

    a {
      text-decoration: none;
      color: #0a0a0a;
    }
  }

  &:hover {
    background-color: #118faa;
    color: #fff;
    border-style: none;
    transition: background-color 0.3s ease-in-out;

    a {
      color: #ffffff;
    }
  }
`;


export const ButtonSaibaMais = styled.button`
  box-sizing: border-box;
  width: 101px;
  height: 41px;
  border-radius: 12px;
  background-color: #007F9B;
  border-style: none;
  text-decoration: none;
  color: #111111;
  transition: background-color 0.3s, color 0.3s, border-style 0.3s;
  cursor: pointer;

  a {
    color: #ffffff;
    text-decoration: none;
    font-weight: 600;
    font-size: 14;
  }

  &:hover {
    background-color: #118faa;
    color: #fff;
    border-style: none;
  }
`;

export const ButtonFaleConosco = styled.button`
  width: 294px;
  height: 56px;
  border-radius: 8px;
  background-color: transparent;
  border: 1px solid #ffffff;
  margin-bottom: 20px;
  align-items: center;
  transition: background-color 0.4s ease-out, color 0.3s ease-out, border-style 0.2s ease-out; 
  

  p {
    display: flex;
    margin: auto;
    a {      

      margin-top: 15px;
      font-weight: 700;
      font-size: 14px;
      line-height: 120%;
      letter-spacing: 0.05em;
      text-decoration: none;
      align-items: center;
    }
  }

  &:hover {
    cursor: pointer;
    background-color: #ffffff;
    color: #118faa;
    border-style: none;

    p {
      color: #118faa;
      
    }

    fill{
      color: #118faa;

    }
  }
`;
export const RowImput = styled.div`
display: flex;
flex-direction: row;
gap: 10px;
margin-left: 35px;
align-items: center;

p{
  display: flex;
  align-items: center;
  
  a{
    margin-top: 17px;
    display: flex;
    align-items: center;
    font-weight: 500;
    color: #ffffff;
  
  }


}



svg{
  width: 20px;
  fill: #ffffff;      
  height: 20px;
    }


&:hover {
    svg{
      fill: #118faa;   

    }
    a{
      color: #118faa;
    }
  }
`;