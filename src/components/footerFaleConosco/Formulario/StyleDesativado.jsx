import styled from "styled-components";

export const FormContainer = styled.form`
background-color: #ffffff;
height: 100%;
height: 480px;

@media (max-width: 550px) {
  height: 620px;
  position: relative;  
}

width: 400px;
border-radius: 16px;
padding: 32px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;


export const TitleContato = styled.div`
display: flex;
justify-content: center;

`;

export const Radio = styled.div`
@media (max-width: 550px) {
  display: flex;
  margin: 30px;
  max-width: 360px;  
}

margin-top: 5px;
margin-bottom: 10px;
color: #222222;
font-size: 14px;
font-weight: 400px;
`;


export const Input = styled.input`  
@media (max-width: 550px) {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  max-width: 300px;  
}
    width: 100%;   
    min-width: 300px;
    height: 48px;
    border-radius: 8px;
    padding: 2px;
    margin-bottom: 10px;
    border-style: none;
    background-color: #F1F1F1;
    font-size: 14px;
    font-weight: 400;

    &:focus {
    outline: 2px solid #06aacf;
  }
    

`;

export const InputArea = styled.input`  

@media (max-width: 550px) {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  min-width: 300px;

}


height: 148px;
border-radius: 8px;
padding: 2px;
min-width: 400px;
margin-bottom: 10px;
border-style: none;
background-color: #F1F1F1;
font-size: 14px;
font-weight: 500;
    &:focus {
    outline: 2px solid #06aacf;
  }
    `;

export const Button = styled.button`

@media (max-width: 550px) {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  max-width: 300px;  
}

    width: 100%;
    height: 41px;
    border-radius: 8px;
    background-color: #000;
    color: #ffffffd8;
    border-style: none;

        &:hover {
      color: #000000;
      background-color: #06aacf;
      cursor: pointer;     
    }
    `;