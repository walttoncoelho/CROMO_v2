import styled from "styled-components";

export const Container = styled.div`

@media (max-width: 550px) { 
background-color: #007F9B;
height: 1050px;
  }
  display: flex;
  flex-wrap: wrap;
  max-width: 100%; 
  justify-content: center;
  background-color: #007F9B;
  align-items: flex-start;
  height: 100%;
`;

export const SectionFaleconosco = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  max-width: 1440px;
  height: 770px;
  flex-direction: row; 
  align-items: center;

  @media (max-width: 550px) {   
    margin-top: -10PX;

  }
`;

export const ColunaFormulario = styled.div`
  margin-left: 20px;
  margin-top: 86px;
  flex-direction: column;
  width: 100%;
  justify-content: center; 
  background-color: #ffffff;
  width: 400px;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

  h2 {
    display: flex;
  }

  @media (max-width: 550px) {  
    display: flex;
    align-items: center;
    justify-content: center; 
    width: 100%;
    max-width: 330px;
    margin: 0px;
  }
`;

export const ByGoodApp = styled.div`
  margin: auto;
  display: flex;
  background-color: #007F9B;
  width: 100%; 
  height: 35px;
  border-top: 1px solid #2f93aa;
  padding: 32px;

  a {
    text-decoration: none;
  }

  p {
    color: #fff;
    align-items: center;
    justify-content: center;
    margin: auto;
    font-size: 12px;
    text-decoration: none;
  }

  strong {
    color: #fff;
    text-decoration: none;   
  }

  @media (max-width: 550px) {    
    align-items: center;
    justify-content: center; 
    width: 100%;
    max-width: 320px;

  
  }
`;




