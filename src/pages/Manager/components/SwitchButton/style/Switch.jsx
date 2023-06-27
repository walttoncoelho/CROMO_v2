import styled from "styled-components";

export const SwitchLabel = styled.label`
    position: relative;
    display: inline-block;
    box-sizing: border-box;
    width: 120px;
    height: 38px;
    padding: 12px 0px 0px 45px;
    font-size: 14px;
    & input {
        opacity: 0;
        width: 0;
        height: 0;
    }
`

export const Slider = styled.span`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 34px;
    border: 1px solid #D9D9D9;
    &::before {
        position: absolute;
        content: "";
        height: 23px;
        width: 35px;
        left: 8px;
        bottom: 7px;
        background-color: #D9D9D9;
        -webkit-transition: .4s;
        transition: .4s;
        border-radius: 22px;
    }
`

export const Input = styled.input`
`

export const SpanArquivar = styled.span`
    transition: .3s;
`