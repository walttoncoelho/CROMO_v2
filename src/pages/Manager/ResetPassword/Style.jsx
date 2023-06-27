import styled from "styled-components";

export const FormReset = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 400px;
  margin: auto;
  
  border-radius: 5px;
  background-color: #1C2128;

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

  .row__div{
    width:100%;
    flex-direction: column;
display: flex;
margin: auto;
justify-content: flex-end;

a{
  color: #EEF0F8;
  font-size: 0.7em;
  margin-right: 10px;
}
}
 
  label {
    display: flex;
    width: 100%;
    flex-direction: column;   

    input {
      height: 30px;      
      border-radius: 5px;
      border: 1px solid #ccc;
      font-size: 16px;
    }
  }
  



`;

/* RESET SENHA BOX */

export const BgPopUp= styled.form`
display: flex;
text-align: center;
top: 0;
left: 0;
position: fixed;
width: 100%;
height: 100%;
background-color: #05050561;


`;
