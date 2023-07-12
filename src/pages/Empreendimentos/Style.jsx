import styled from "styled-components";

export const CardContainer = styled.div`

  display: flex;
  flex-direction: column;
  margin: auto;
  width: 100%;
  max-width: 1440px;  

  h1{
    margin-top: 64px;
    margin-bottom: -10px;
    text-align: center;
    justify-content: center;
    font-size: 40px;
    color: #0A0A0A;
  @media (max-width: 550px){
  font-size: 30px;
  font-weight: 700;
}
  }

`;

export const ContainerEmpreend = styled.div`
  display: flex; 
  margin: auto;
  margin-bottom: 65px; 
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
  padding: 6px, 12px, 6px, 12px ;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;


  p{
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
  background-color: #39c7c77f;
`;

export const CardGalery = styled.div`

@media (max-width: 550px){
  display: flex;
  flex-direction: column;  
}

  display: flex;
  flex-direction: row;
  margin: auto;
  width: 100%;
  max-width: 1248px;  
  border-radius: 8px;
  background-color: #F1F1F1;
  margin-top: 64px;



 

`;

export const CardImg = styled.div`
 @media (max-width: 550px) {
    display: flex;
  }

  display: flex;
  width: 60%;
  max-height: 100%;
  min-width: 600px;

  img {
    width: 100%;
    height: 100%;
    max-height: 450px;
    max-width: 650px;
    object-fit: cover;
    border-bottom-left-radius: 8px;
    border-top-left-radius: 8px;
    border-top-right-radius: 0px;
  }
  @media (max-width: 550px) {
      width: 100%;
      min-width: 375px;
      justify-content: center;
      padding: 5px;
    }

  img.selo {
  position: absolute;
  transform: translate(-125%, 25%);
  width: 60px;
  height: 60px;

  @media (max-width: 550px) {
  position: absolute;
  transform: translate(-125%, 25%);
  width: 60px;
  height: 60px;
    }


  }




`;

export const CardDescription = styled.div`


@media (max-width: 550px){
  display: flex;
  margin: auto;
  justify-content: center;
  
  
  
}

display: flex;
flex-direction: column;
margin: auto;
max-width: 450px;

h2{
  @media (max-width: 550px){
    text-align: center;

  }
  color: #007F9B;
  font-size: 25px;
}

img {
  align-self: end;
  width: 60px;
  height: 60px;
  margin-bottom: 50px;
}

`;

export const ContainerLoteButton = styled.div`

@media (max-width: 550px){
  display: flex;
  margin: auto;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 25px;
  
}

display: flex;
flex-direction: row;
margin: auto;
align-items: center;
width: 100%;
justify-content: space-between;


`;




