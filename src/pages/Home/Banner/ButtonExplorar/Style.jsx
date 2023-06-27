import styled from "styled-components";

export const BtnExplorarContatiner = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  max-width: 1920px;
  `;

export const BtnExplorarPosition = styled.div`
flex-direction: column;
  display: flex;
  margin-top: 400px;
  width: 212;
  align-items: center;
  margin-left: 125px;
  cursor: pointer;

  a{
    display: flex;
    text-decoration: none;
  }

    @media (max-width: 1680px) {
    margin-top: 330px;
    margin-left: 108px;
  }

    @media (max-width: 1440px) {
    margin-top: 280px;
    margin-left: 95px;
  }

    @media (max-width: 1024px) {
    margin-top: 200px;
    margin-left: 70px;
  }
  `;



export const BtnExplorarRetangulo = styled.div`
  display: flex;
  margin: auto;
  width: 25px;
  height: 50px;
  margin-right: 10px;
  mix-blend-mode: screen;
  border: solid 3px #ffffffcc;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  cursor: pointer;

  &:hover {
    background-color: #ffffff37;
  }

  .barra {
    display: flex;
    margin: auto;
    justify-content: center;
    background-color: rgba(245, 9, 9, 0.158);
    width: 3px;
    height: 30px;
    border-radius: 50px;

    animation: barra-animacao 2s ease-in-out infinite;
    background-image: linear-gradient(to top, transparent 50%, rgba(255, 255, 255, 0.795) 50%);
    background-size: 100% 200%;
    background-position: top;
  }

  @keyframes barra-animacao {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(20px);
      background-position: bottom;
    }
    100% {
      transform: translateY(0);
      background-position: top;
    }
  }

  &:hover .barra {
    height: 20px;
    width: 6px;
    background-color: #ffffffb2;
  }
`;

export const BtnExplorarText = styled.div`
  display: flex;
  margin: auto;
  cursor: pointer;

  a{
    text-decoration: none;
  }

  h3 {
    font-weight: 700;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 5%;
    color: #fff;
}
`;
