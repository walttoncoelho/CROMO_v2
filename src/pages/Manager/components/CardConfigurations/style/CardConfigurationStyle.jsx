import styled from "styled-components";

export const SectionConfiguration = styled.section`
    box-sizing: border-box;
    width: 1026px;
    max-width: 100%;
    height: 439px;
`

export const DivCabecalho = styled.div`
    height: 63px;
    width: 1026px;
    max-width: 100%;
    color: #21559D;
    font-weight: 700;
    font-size: 16px;
    box-sizing: border-box;
    padding: 22px 0px 23px 29px;
    border-bottom: 1px solid #21559D80;
`

export const Form = styled.form`
    display: grid;
    gap: 0px 32px;
    grid-template-areas: 
    'email logo'
    'instagram logo'
    'facebook logo'
    'ola botoes'
    ;
    width: 1026px;
    max-width: 100%;
    border-radius: 0px 0px 8px 8px;
    box-sizing: border-box;
    padding: 16px 33px 11px 33px;
`

export const DivEmail = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    grid-area: email;
`

export const DivInstagram = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    grid-area: instagram;
    margin-top: 14px;
`

export const DivFacebook = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    grid-area: facebook;
    margin-top: 14px;
`

export const DivLogo = styled.div`
    display: flex;
    flex-direction: column;
    grid-area: logo;
    gap: 3px;
    margin-left: -120px;
`

export const DivLogoFlex = styled.div`
    display: flex;
    gap: 11px;
    padding: 7px 0px;
    align-items: center;
`

export const LabelTitulo = styled.label`
    color: #21559D;
    font-weight: 700;
`

export const InputLogo = styled.input`
    height: 45px;
    border-radius: 4px;
    font-size: 14px;
    border: 2px solid #1A60C3;
    font-family: 'Ubuntu', sans-serif;
    &::placeholder {
        text-align: center;
        color: #1A60C3;
        font-family: 'Ubuntu', sans-serif;
    }
`

export const Botoes = styled.div`
    display: flex;
    grid-area: botoes;
    justify-content: flex-end;
    gap: 10px;
`