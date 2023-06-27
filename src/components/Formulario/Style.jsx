import styled from "styled-components";

export const Form = styled.form`
display: flex;
flex-direction: column;
margin: auto;

@media (max-width: 500px) {
  margin-top: -160px; 
  justify-content: center;
  align-items: center;
}
`;

export const Radio = styled.div`
margin-top: 10px;
margin-bottom: 12px;
`;


export const Input = styled.input`  
@media (max-width: 500px) {
  width: 300px;  
}
    width: 694px;   
    height: 48px;
    border-radius: 8px;
    padding: 
    8px, 16px, 8px, 16px;
    margin-bottom: 10px;
    border-style: none;
    background-color: #ffffff;
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
background-color: #10dfdfdf;

@media (max-width: 550px) {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  min-width: 300px;
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
background-color: #ffffff;
font-size: 14px;
color: #616161;

    &:focus {
    outline: 2px solid #06aacf;
  }
    `;

export const Button = styled.button`

@media (max-width: 500px) {
  width: 300px;  
}
    width: 150px;
    height: 48px;
    border-radius: 8px;
    background-color: #FACC2A;
    color: #111111;
    border-style: none;
    font-weight: 600;
    transition: background-color 0.3s, color 0.3s, font-weight 0.3s;

      &:hover {
      color: #181818;
      background-color: #06aacf;
      font-weight: 1000;
      cursor: pointer;     
    }
    `;

export const Popup = styled.div`
  display: flex;
  margin: auto;
  padding: 20px;
  top: 50%;

/*   transform: translate(-50%, -50%); */
  background-color: #ffffff;
  margin-top: -80px;
  padding: 20px;
  position: fixed;
  width: 300px;
  height: 270px;
  text-align: center;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  color: #383838;
  font-weight: 700;
  flex-direction: column;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);

  svg{
    width: 40px;
    height: 40px;
    fill: #06aacf;
  }

  p {
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: center;
  font-weight: 7000;
  font-size: 30px;
  color: #06aacf;

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
