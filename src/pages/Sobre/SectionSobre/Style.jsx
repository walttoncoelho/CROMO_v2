import styled from "styled-components";

export const ContainerSobre = styled.div`
  padding: 10px;

  @media (max-width: 550px) {
      max-width: 350px;
    h1 {
      display: flex;
      justify-content: center;
      font-weight: 700;
      font-size: 40px;
      color: #0A0A0A;
    }
  }

  display: flex;
  margin: auto;
  width: 100%;
  height: 100%;
  max-width: 1000px;

  h1 {
    font-weight: 700;
    font-size: 40px;
    color: #0A0A0A;
  }

  p {
    font-weight: 400;
    font-size: 16px;
    color: #0A0A0A;
  }
`;

export const ContainerNumererosQualidade = styled.div`
display: flex;
justify-content: center;
margin: auto;

  width: 100%;
  max-width: 1000px;
  height: 100%;

  @media (max-width: 550px) {
    flex-direction: column;
    max-width: 370px;

    h2{
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
  }

  h2 {
    font-weight: 700;
    font-size: 40px;
    color: #0A0A0A;
  }

  p {
    font-weight: 400;
    font-size: 16px;
    color: #0A0A0A;
  }
`;

export const ContainerNumerero = styled.div`

margin-top: 100px;
  display: flex;
  flex-direction: row;
  margin: auto;
  width: 100%;
  
  @media (max-width: 550px) {

    order: 2;

    h2{
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
  }
`;

export const ContainerQualidade = styled.div`
  display: flex;
  margin: auto;
  width: 100%;
  height: 100%;
  max-width: 1000px;
  @media (max-width: 550px) {
    order: 1;
  }

  h1 {
    font-weight: 700;
    font-size: 35px;
    color: #0A0A0A;
  }
`;
