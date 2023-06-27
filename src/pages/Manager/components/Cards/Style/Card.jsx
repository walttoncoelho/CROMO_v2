import styled from "styled-components";

export const ContainerCard = styled.div`
    width: 281px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #174585;
    box-sizing: border-box;  
    border-radius: 8px;
    background-color: #ffffff;
`
export const InfoCard = styled.div`
    height: 211px;
    justify-content: center;
    display: flex;
    flex-direction: column;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
`

export const TituloDeAcessos = styled.div`
    display: flex;
    justify-content: center;
    height: calc(63px -20px);
    font-family: Arial, Helvetica, sans-serif;
    padding: 20px 0px;
    width: 281px;
    font-size: 20px;
    font-weight: 400;
    border-bottom: 1px solid #21559D80;
`

export const UltimosDias = styled.div`
    font-weight: 700;
    font-size: 14px;
    line-height: 56px;
`

export const NumeroAcessos = styled.p`
    font-weight: 400;
    font-size: 40px;
`

export const Acessos = styled.p`
    font-size: 16px;
    font-weight: 400;
`