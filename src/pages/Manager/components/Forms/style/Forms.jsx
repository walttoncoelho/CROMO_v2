import styled from "styled-components";

export const InputNormal = styled.input`
    width: 365px;
    height: 45px;
    background: #EEF0F8;
    border-radius: 4px;
    font-size: 14px;
    border: 1px solid #BCBCBC;
    font-family: 'Ubuntu', sans-serif;
    &::placeholder {
        padding: 27px;
        color: #BCBCBC;
        font-family: 'Ubuntu', sans-serif;
    }
`

// Input Ativo

export const InputAtivo = styled.input`
    width: 365px;
    height: 45px;
    background: #EEF0F8;
    border-radius: 4px;
    font-size: 14px;
    border: 1px solid #3B70BB80;
    font-family: 'Ubuntu', sans-serif;
    &::placeholder {
        padding: 27px;
        color: #B0B1B2;
    }
`

// Input Transparente

export const InputTransparente = styled.input`
    width: 365px;
    height: 45px;
    border-radius: 4px;
    font-size: 14px;
    border: 1px solid #1A60C3;
    font-family: 'Ubuntu', sans-serif;
    &::placeholder {
        padding: 27px;
        color: #BEC1C6;
        font-family: 'Ubuntu', sans-serif;
    }
`

// Input Transparente Ativo

export const InputTransparenteAtivo = styled.input`
    width: 365px;
    height: 45px;
    border-radius: 4px;
    font-size: 14px;
    border: 2px solid #1A60C3;
    font-family: 'Ubuntu', sans-serif;
    &::placeholder {
        padding: 27px;
        color: #1A60C3;
        font-family: 'Ubuntu', sans-serif;
    }
`

// Input Transparente com Erro

export const InputTransparenteErro = styled.input`
    width: 365px;
    height: 45px;
    border-radius: 4px;
    font-size: 14px;
    border: 1px solid #D83939;
    font-family: 'Ubuntu', sans-serif;
    &::placeholder {
        padding: 27px;
        color: #D83939;
        font-family: 'Ubuntu', sans-serif;
    }
`