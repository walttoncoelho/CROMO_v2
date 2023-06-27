import styled from "styled-components";

export const SwitchLabelComponent = styled.label`
    position: relative;
    display: inline-block;
    width: 79px;
    height: 42px;
    & input {
        opacity: 0;
        width: 0;
        height: 0;
    }
`

export const SliderComponent = styled.span`
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
        height: 35px;
        width: 35px;
        left: 4px;
        bottom: 3px;
        background-color: #1A60C3;
        -webkit-transition: .4s;
        transition: .4s;
        border-radius: 50%;
    }
`

export const InputComponent = styled.input`
`