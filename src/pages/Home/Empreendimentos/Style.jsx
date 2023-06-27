import styled from "styled-components";

export const ContainerEmpreend = styled.section`
  display: flex;
  margin: auto;
  max-width: 1248px;
  margin-bottom: 50px;
  width: 100%;
  scroll-behavior: smooth;
  html {
  scroll-behavior: smooth;
}

`;

export const ContainerVermais = styled.div`
  display: flex;
  margin: auto;
  justify-content: center;
  max-width: 1440px;
  height: 90px;
`;

export const ContainerStatus = styled.div`
  display: flex;
  position: absolute;
  margin: auto;
  justify-content: center;
  width: 118px;
  height: 29px;
  gap: 8px;
  padding: 6px, 12px, 6px, 12px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  p {
    font-size: 12px;
    margin: auto;
    font-weight: 600;
    line-height: 18.8px;
  }
`;

export const StatusStyle = styled.div`
  display: flex;
  margin: auto;
  justify-content: center;
  max-width: 1440px;
  height: 90px;
  
`;

export const CardGalery = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 100%;
  max-width: 400px;
  height: 300px;
  border-radius: 8px;
  overflow: hidden; /* adiciona overflow para esconder o conteúdo fora do tamanho definido */
  
  /* Adiciona um contêiner adicional para a imagem */
  .image-container {
    width: 100%;
    height: 100%;
    transition: transform 0.2s ease-in-out;
  }

  /* Aplica o efeito de zoom na imagem */
  .image-container:hover img {
    transform: scale(1.1);
  }

  img.destaque {
    border-radius: 8px;
    height: 300px;
    max-height: 100%; /* Define a altura máxima para a altura do contêiner */
    object-fit: cover; /* Escolhe a forma como a imagem é redimensionada para caber no contêiner */
  }

  img.selo {

/*     top: -100%; */
   /*  left: 100%; */
 /*    transform: translate(-125%, 25%); */
 position: absolute;
  width: 60px;
  border: none;
  display: flex;
  justify-content: flex-end;
  margin: auto;
  margin-left: 320px;
  margin-top: 15px;

  @media (max-width: 1024px) {
    margin-left: 620px;
  }

  @media (max-width: 550px) {
    margin-left: 260px;
  }

  }

  @media (max-width: 1024px) {
    width: 700px;
    padding: 5px;   
    margin-bottom: 24px;
    max-width: 800px;

    /* Define a largura máxima para o contêiner da imagem */
    .image-container {
      position: relative; /* Adicione essa propriedade para que o posicionamento absoluto da imagem funcione corretamente */
  width: 100%;
  height: 100%;
  transition: transform 0.2s ease-in-out;

    }
  }

  @media (max-width: 500px) {  
    padding: 5px;   
    margin-bottom: 24px;
    width: 340px;
    margin-left: 10px;
    
    /* Define a largura máxima para o contêiner da imagem */
    .image-container {
      max-width: 340px;
    }
  }
`;


export const CardContainer = styled.div`
  display: flex;
  margin: auto;
  flex-direction: row;
  width: 100%;
  max-width: 1440px;
  padding: 5px;
/*   background-color: #d60c0ce3; */
  @media (max-width: 1024px) {
    width: 100%;
    display: flex;
    margin: auto;
    flex-direction: column;
 /*    background-color: #27c52f; */
  }
`;

export const CardDescription = styled.div`
 @media (max-width: 500px) {
  width: 100%;
  width: 320px;
  max-height: 102px;
  margin-top: 180px;
 }


  display: flex;
  margin-top: 174px;
  position: absolute;
  width: 380px;
  height: 107px;
  max-width: 400px;
  background: linear-gradient(to bottom, #aeaeae48 50%, #131a1fcb 100%);
  backdrop-filter: blur(20px);
  flex-direction: column;
  color: #fff;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  padding: 10px;
  h3 {
    font-weight: 700;
  
  }
  h4 {
    font-weight: 500;
    font-size: 14px;
    margin-bottom: 30px;
  }
  a {
    margin-top: 5px;
    display: flex;
    flex-direction: row;
    text-decoration: none;
    font-size: 14px;
    margin-bottom: 8px;
    color: #fff;
    img {
      width: 30px;
      height: 20px;
    }
    &:hover{
      font-weight: 700;
      font-size: 15px;          
    }
  }
`;