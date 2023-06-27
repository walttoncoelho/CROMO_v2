import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 100%; 
  justify-content: center;
  background-color: #007F9B;
  align-items: flex-start;
`;

export const FaleConosco = styled.div`

`;

export const Colum = styled.div`

@media (max-width:900px) {
  display: flex;
  flex-direction: column;  
}

@media (max-width:500px) {
  margin-top: 30px;
  display: flex;
  flex-direction: column;  
}


  color: #fff;
  display: flex;
  max-width: 1200px;
  flex-direction: row; 

  p {
    margin-bottom: 8px;  
  }
`;

export const Grid1 = styled.div`  


h2{
  font-size: 26px;
  font-weight: 600px;
}


@media (max-width: 900px){
margin-top: 30px;
}

@media (max-width: 550px){
  h2{
  display: flex;
  justify-content: center;
  text-align: center;
  margin: auto;
  
  }
margin-top: 50px;
align-items: center;
justify-content: center;
p{
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  
}

}

  flex-direction: column;
  width: 50%; 
  height: 230px;  
  h2 {

    margin-bottom: -2px;
  }

  @media screen {
    max-width: 700px;
    width: 80%;
    margin: auto;
  }

`;

export const Grid2 = styled.div`
@media (max-width: 500px){
  width: 100%;
  max-width: 355px;
  height: 320px;
}

  display: flex;
  width: 100%;
  padding: 10px;
  margin-top: 64px;

  
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
