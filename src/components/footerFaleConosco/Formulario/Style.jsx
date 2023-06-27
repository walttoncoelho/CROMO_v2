import styled from "styled-components";

export const FormContainer = styled.form`
display: flex;
flex-direction: column;
width: 100%;

padding-left: -10px;
@media (max-width: 550px) {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center; 
  background-color: #ffffff;
  max-width: 350px;
}

background-color: #ffffff;
width: 400px;
border-radius: 16px;
padding: 32px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

export const TitleContato = styled.div`
display: flex;
justify-content: center;
margin-top: -25px;
margin-bottom: 10px;

`;

export const Form = styled.form`
display: flex;
flex-direction: column;
margin: auto;
@media (max-width: 500px) {
  max-width: 320px;


}
`;

export const Radio = styled.div`
margin-top: 10px;
margin-bottom: 12px;
`;


export const Input = styled.input`  

@media (max-width: 550px) { 
  
  min-width: 150px;
}
    width: 100%;
    height: 48px;
    border-radius: 8px;
    padding: 
    8px, 16px, 8px, 16px;
    margin-bottom: 10px;
    border-style: none;
    background-color: #e9e8e8;
    color: #616161;
    padding-left: 10px;
    &:focus {
    outline: 2px solid #06aacf;
  
  }

  ::placeholder{
  color: #666768;
  font-size: 14px;
  margin-left: 10px;
  }
    `;

export const InputArea = styled.input`  
background-color: #e9e8e8;


@media (max-width: 550px) {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 300px;
  min-width: 160px;

}

::placeholder{
  color: #666768;
  font-size: 14px;
  margin-left: 10px;
  }
  padding-left: 10px;
height: 148px;
border-radius: 8px;

min-width: 400px;
margin-bottom: 10px;
border-style: none;

font-size: 14px;
color: #616161;

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
    background-color: #FACC2A;
    transition: background-color 0.3s, color 0.3s, font-weight 0.3s;
    color: #000000d7;
    border-style: none;
    font-weight: 600;

        &:hover {
      color: #000000;
      background-color: #06aacf;
      font-weight: 1000;
      cursor: pointer;     
    }
    `;

export const Popup = styled.div`
  display: flex;
  padding: 20px;
  top: 50%;
  left: 70%;
  transform: translate(-50%, -50%);
  background-color: #fafafa;
  padding: 20px;
  margin: auto;
  position: fixed;
  max-width: 300px;
  height: 270px;
  text-align: center;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  color: #ca1e1e;
  font-weight: 700;
  flex-direction: column;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);

  p {
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: center;
  font-weight: 7000;
  font-size: 30px;
  height: 10px;
  width: 10px;
  border: solid 2px #098ba8;
  background-color: #0d92bb;
  color: #fff;
  border-radius: 150px;
  animation: size-animation 1s ease forwards;
}

@keyframes size-animation {
  from {
    height: 40px;
    width: 40px;
  }
  to {
    height: 60px;
    width: 60px;
  }
}


  button {
    margin-top: 10px;
    width: 150px;
    height: 45px;
    border-radius: 8px;
    border-style: none;
    color: #0075ac;
    font-weight: 500;
    border: solid 2px #0075ac;
    cursor: pointer;

    &:hover {
      background-color: #0075ac;
      color: #fff;
      font-weight: 700;
    }
  }
`;
