import styled from "styled-components";

export const TableListBanner = styled.section`
    height: 574px;
    width: 1026px;
    max-width: 100%;
    font-family: 'Ubuntu', sans-serif;
    background-color: #D8E3F133;
    box-sizing: border-box;
`

export const Cabecalho = styled.div`
    height: 63px;
    border-bottom: 1px solid #21559D80;
    display: flex;
    align-items: center;
    padding: 0px 29px;
    font-weight: 700;
    color: #21559D;
`

export const TableConfig = styled.table`
    border-collapse: collapse;
    overflow-x: auto;
`
export const TBody = styled.tbody`
`

export const TableData = styled.td`
    padding: 5px 0px 5px 0px;
        
    &:nth-child(1) {
        background-color: #D8E3F180;
        text-align: start;
        text-align: center;
        width: 56px;
    }
    &:nth-child(2) {
        text-align: start;
        padding: 5px 0px 5px 33px;
        text-align: start;
        width: 350px;
        max-width: 100%;
    }
    &:nth-child(3){
        text-align: start;
        text-align: start;
        width: 200px;
        max-width: 100%;
    }
    &:nth-child(4) {
        text-align: start;
        text-align: start;
        width: 200px;
        max-width: 100%;
    }
    &:nth-child(5) {
        text-align: center;
        width: 250px;
        margin-right: 30px;
        max-width: 100%;
        align-items: center;
        display: flex;
        justify-content: center;
        gap: 0px 20px;
        color: #757575;
    }

`

export const TableRow = styled.tr`
    &:nth-child(even) {
        background-color: #D8E3F133;
    }
`

export const THead = styled.thead``
    

export const TableHead = styled.th`
    font-weight: 700;
    max-width: 100%;
    padding: 14px 0px 21px 0px;
    color: #21559D;
    &:nth-child(1) {
        background-color: #D8E3F180; 
    }
    &:nth-child(2) {
        text-align: start;
        padding-left: 80px;
    }
    &:nth-child(3) {
        text-align: start;
        padding-left: 10px;
    }
    &:nth-child(4) {
        text-align: start;
        padding-left: 10px; 
    }
    &:nth-child(5) {
        text-align: start;
        padding-left: 105px; 
    }

`