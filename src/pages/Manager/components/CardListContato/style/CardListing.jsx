import styled from "styled-components";

export const TableList = styled.section`
    height: 510px;
    width: 1026px;
    max-width: 100%;
    font-family: 'Ubuntu', sans-serif;
    background-color: #D8E3F133;
    box-sizing: border-box;
    `

export const Cabecalho = styled.form`
    height: 63px;
    border-bottom: 1px solid #21559D80;
    display: flex;
    align-items: center;
    padding: 0px 29px;
    font-weight: 700;
    color: #21559D;
    `

export const CabecalhoLabel = styled.label`
    padding: 0px 7px;
    `
export const CabecalhoInput = styled.input`
    height: 34px;
    width: 66px;
    color: #21559D;
    font-weight: 700;
    border-radius: 5px;
    padding: 0px 15px;
    font-size: 16px;
    border: 1px solid #21559D;
`

export const TableConfig = styled.table`
    border-collapse: collapse;
    max-width: 100%;
    `
export const TableOverflow = styled.div`
    overflow-x: auto;
`

export const TBody = styled.tbody`
`

export const THead = styled.thead`
` 

export const TableHead = styled.th`
    font-weight: 700;
    max-width: 100%;
    padding: 14px 95px 21px 90px;
    color: #21559D;
     &:nth-child(1) {
        text-align: start;
        padding: 0px 145px 0px 33px;
    }
    &:nth-child(2) {
        text-align: start;
        
    }
    &:nth-child(3) {
        text-align: start;
        background-color: #D8E3F180;
    } 

`

export const TableData = styled.td`
    padding: 10px 0px ;
    text-align: center;
    font-size: 16px;
    color: #21559D;
     
    &:nth-child(1) {
        text-align: start;
        padding: 0px 145px 0px 33px;
    }
    &:nth-child(3){
        background-color: #D8E3F180;
    }
`

export const TableRow = styled.tr`
    &:nth-child(even) {
        background-color: #D8E3F133;
    }


    
`


