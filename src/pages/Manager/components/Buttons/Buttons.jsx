import styled from "styled-components";

export const BotaoNormal = styled.button`
    width: 140px;
    height: 45px;
    display: flex;
    cursor: pointer;
    color: #FFFFFF;
    border-style: none;
    border-radius: 4px;
    align-items: center;
    justify-content: center;
    background-color: #1A60C3;
    &:hover {
        background-color: #174585;
        font-weight: bold;
    }
`

export const BotaoNormalDesabilitado = styled.button`
    width: 140px;
    height: 45px;
    display: flex;
    cursor: pointer;
    color: #757575;
    border-style: none;
    border-radius: 4px;
    align-items: center;
    justify-content: center;
    background-color: #D9D9D9;
`

// Botao Tranparente

export const BotaoTransparente = styled.button`
    width: 140px;
    height: 45px;
    display: flex;
    cursor: pointer;
    color: #1A60C3;
    border-radius: 4px;
    align-items: center;
    justify-content: center;
    border: 2px solid #1A60C3;
    &:hover {
        color: #17417D;
        font-weight: bold;
        border: 2px solid #17417D;
    }
`

export const BotaoTransparenteDesabilitado = styled.button`
    width: 140px;
    height: 45px;
    display: flex;
    cursor: pointer;
    color: #D9D9D9;
    border-radius: 4px;
    align-items: center;
    justify-content: center;
    border: 2px solid #D9D9D9;
`
// Botao Atencao

export const BtnDanger = styled.button`
 
    min-width: 80px;
    height: 40px;
    display: flex;
    cursor: pointer;
    color: #a72b2b;
    border-radius: 4px;
    border-style: none;
    align-items: center;
    justify-content: center;
    background-color: #d8393921;

    border: 1px solid #D83939;
    border-radius: 50px;
    width: ${props => props.width || 'none'};

    &:hover {
        font-weight: bold;
        background-color: #D83939;
        color: #ffffff;
    }
`

export const BtnOutline = styled.button`
    min-width: 80px;
    height: 40px;
    display: flex;
    cursor: pointer;
    color: #21559D;
    border-radius: 4px;
    border-style: none;
    align-items: center;
    justify-content: center;
    border: 1px solid #21559D;
    background-color: #ffffff20;
    border-radius: 50px;
  
    width: ${props => props.width || 'none'};

    &:hover {
        font-weight: bold;
        background-color: #21559D;
        color: #fafcff;
    }
`

export const BotaoAtencaoDesabilitado = styled.button`
    width: 140px;
    height: 45px;
    display: flex;
    cursor: pointer;
    color: #FFFFFF;
    border-radius: 4px;
    border-style: none;
    align-items: center;
    justify-content: center;
    background-color: #D8393980;
`

// Botao Atencao Transparente

export const BotaoAtencaoTransparente = styled.button`
    width: 140px;
    height: 45px;
    display: flex;
    cursor: pointer;
    color: #D83939;
    border-radius: 4px;
    align-items: center;
    justify-content: center;
    border: 2px solid #D83939;
    &:hover {
        color: #A72B2B;
        font-weight: bold;
        border: 2px solid #A72B2B; 
    }
`

export const BotaoAtencaoTransparenteDesabilitado = styled.button`
    width: 140px;
    height: 45px;
    display: flex;
    cursor: pointer;
    color: #D8393980;
    border-radius: 4px;
    align-items: center;
    justify-content: center;
    border: 2px solid #D8393980;
`
