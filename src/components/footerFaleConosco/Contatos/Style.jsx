import styled from "styled-components";

export const FaleConoscoSection = styled.div`
background-color: #888;
max-width: 370;
height:100%;

`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 100%; 
  justify-content: center;
  align-items: flex-start;
`;




export const IconSocial = styled.div`
@media (max-width: 550px) {
  display: none;
  
}

display: flex;
height: 33%;
width: 65px;
margin-top: 10px;
display: flex;
justify-content: space-between;
align-items: flex-end;


svg{
  fill: #fff

}
`;

export const ColumContato = styled.div`
  display: flex;
  margin: auto;
  color: #fff;

`;

export const ContainerContato = styled.div`  

@media (max-width: 550px) {

  max-height: 300px;
  
}

margin-top:35px ;
max-width: 294px; 
height: 512px;
flex-direction: column;


  h1 {
   font-weight: 700;
   font-size: 40px;
   color: #fff;
      margin-bottom: 25px;
  }

  p {
   font-weight: 400;
   font-size: 16px;
   color: #fff;
   margin-bottom: 25px;
  }

  @media screen {

  }

`;

export const ColunaFormulario = styled.div`
  display: flex;
  padding: 10px;
  margin-top: 64px;
  border-radius: 8px;  
  ul {  
    display: flex;
    flex-direction: row;
    list-style-type: none;
    margin: 20px;    
    padding: 0;
    overflow: hidden;
    flex-wrap: wrap;
    max-width: 150px;
    min-width: 150px;
  }

  li a {
    color: #fff;
    text-align: center;
    text-decoration: none;
    font-size: 14px;
    width: 150px;
    margin: 20px;
  }
  li a:hover {
    border-radius: 5px;
    color: #ffd000; 
    font-weight: bold;
    transition-delay: 1.1;
    border-bottom: #ffd000 1px solid;
    
  }
`;

export const Grid3 = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0 10px;

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  li a {
    color: #db7575;
    text-align: center;
    text-decoration: none;
    font-size: 14px;
  }

  li a:hover {
    border-radius: 5px;
    color: #8b0000;
    padding: 10px;
    font-weight: bold;
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
`;
