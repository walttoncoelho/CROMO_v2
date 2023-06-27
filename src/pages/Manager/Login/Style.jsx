import styled from "styled-components";

export const Container = styled.div`
display: flex;
background-color: #fff8f8;
width: 100vw;
height: 100vh;


.row__div{
display: flex;
flex-direction: row;
align-items: center;
justify-items: flex-end;
margin-left:auto;
margin-right: 28px;

a{
  color: #EEF0F8;
  font-size: 0.7em;
  margin-right: 10px;
}
}
`;



export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 400px;
  margin: auto;
  padding: 20px; 
  border-radius: 5px;
  background-color: rgb(33, 85, 157);

  h2{
    color: #f5f5f5;
    line-height: 0.5;
    margin-bottom: -2px;
  }

  h5{
  color: #c2c2c2;
  font-size: 0.7em;
  margin-right: 10px;
  }


 
  label {
    display: flex;
    width: 85%;
    min-width: 85%;
    flex-direction: column;
    margin-bottom: 10px;
   

    input {
      height: 30px;
      padding: 5px;
      border-radius: 5px;
      border: 1px solid #ccc;
      font-size: 16px;
    }

    span {
      color: #ff8181;
      font-size: 14px;
      margin-top: 5px;
    }
  }
  
  div {
    margin-top: 10px;
  }


`;



export const PopupForm = styled.form`
margin: auto;
display: flex;
flex-direction: column;
padding: 20px;
width: 370px;
height: 370px;
background-color: #1C2128;
border-radius: 4px;

;

div{
  margin: auto;
  width: 100%;
  max-height: 200px;
  color: #ffffff;

  h3{
    margin: auto;
    justify-content: center;
    align-items: center;
    line-height: 1.5;
}
    
  }
  p{
    margin: auto;
    justify-content: center;
    line-height: 1.5;
  }


label{
  display: flex;
  margin: auto;
  width: 100%;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 10px;
}

button{
  display: flex;
  margin: auto;
  width: 100%;
  justify-content: center;
  text-align: center;
  align-items: center;
}
`;





