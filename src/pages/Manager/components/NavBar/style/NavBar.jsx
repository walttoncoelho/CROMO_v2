import styled from "styled-components";

export const ContainerNavBar = styled.header`
    display: grid;
    width: 100%;
    height: 80px;
    align-items: center;
    background-color: #FFFFFFCC;
    grid-template-columns:1fr 3fr 1fr;
    border-bottom: 1px solid #21559D80;

`
export const DivLogo = styled.div`
    display: flex;
    padding: 0px 20px;
    max-width: 300px;
    min-width: 300px;
    justify-content: center;
    
    img{
        height: 50px;

 
}
`

export const DivSaudacao = styled.div`
    font-size: 18px;
    font-family: Arial, Helvetica, sans-serif;
   
`

export const NomePessoa = styled.p`
    color: #17417D;
`

export const ContainerBotoes = styled.div`
    display: flex;
    gap: 10px;
    justify-content: flex-end;
    padding: 0px 30px 0px 0px;
`