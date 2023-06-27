import styled from "styled-components";

export const Container = styled.section`
display: flex;
margin: auto;

`;


export const ContainerSidebar = styled.form`
display: flex;
height: 100%;

`;


export const ContainerStage= styled.div`
display: flex;
width:100%;
flex-direction: column;
padding: 10px;
background-color: #e8ecf5;

h3{
    font-weight: 100;
    margin-top: 20px;
    margin-bottom: 30px;
    color:  rgb(23, 65, 125);
}

`;


// ---------------------> IMPUTS <----------------------- //



export const Label = styled.label`
color: #3B70BB;
font-size: 14px;
font-weight: 700;
margin-bottom: 10px;
margin-top: 20px;



`;
export const Input = styled.input`
width: 365px;
    height: 45px;
    background: #EEF0F8;
    border-radius: 4px;
    font-size: 14px;
    border: 1px solid #4b6bc5;
    font-family: 'Ubuntu', sans-serif;
    
    &::placeholder {
        padding: 27px;
        color: #eeeeee;
        font-family: 'Ubuntu', sans-serif;
    }


`;
export const InputCheckbox = styled.input`
    background: #EEF0F8;
    border-radius: 4px;
    font-size: 14px;
    border: 1px solid #4b6bc5;
    font-family: 'Ubuntu', sans-serif;
    
    &::placeholder {
        padding: 27px;
        color: #eeeeee;
        font-family: 'Ubuntu', sans-serif;
    }


`;


export const Select = styled.select`
width: 365px;
    height: 45px;
    background: #EEF0F8;
    border-radius: 4px;
    font-size: 14px;
    border: 1px solid #4b6bc5;
    font-family: 'Ubuntu', sans-serif;
    
    &::placeholder {
        padding: 27px;
        color: #eeeeee;
        font-family: 'Ubuntu', sans-serif;
    }


`;

export const TextArea = styled.input`
width: 365px;
    height: 90px;
    background: #EEF0F8;
    border-radius: 4px;
    font-size: 14px;
    border: 1px solid #4b6bc5;
    font-family: 'Ubuntu', sans-serif;
    
    &::placeholder {
        padding: 27px;
        color: #eeeeee;
        font-family: 'Ubuntu', sans-serif;
    }


`;





//-----> COLUNAS <---------//



export const ContainerColuna = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1440px;
  

`;

export const Coluna01 = styled.div`
  flex: 1;
  max-width: 400px;

`;

export const Coluna02 = styled.div`
  flex: 1;
  max-width: 400px;

`;


//-----> FIM COLUNAS <---------//