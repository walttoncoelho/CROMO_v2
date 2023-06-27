import styled from "styled-components";

export const Container = styled.form`
display: flex;
margin: auto;
flex-direction: column;


`;

export const ColunaMapa = styled.form`

@media (max-width: 1024px) {
    display: none;    
}
margin-top: 35px;
border-radius: 16px;
padding: 20px;



img{
    width: 100%;
    border-radius: 10px;
}
`;


export const MapaDescription = styled.div`
 @media (max-width: 500px) {

  width: 100%;
  width: 320px;
  max-height: 102px;
}

  margin-top: 478px;
  display: flex;
  position: absolute;
  width: 380px;
  height: 107px;
  max-width: 400px;
  background: linear-gradient(to bottom, #dad9d985 50%, #1e3949dc 100%);
  backdrop-filter: blur(20px);
  flex-direction: column;
  color: #117ea8;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  padding: 10px;
  margin-left: 20px;
 
  a {
    margin-top: 35px;
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