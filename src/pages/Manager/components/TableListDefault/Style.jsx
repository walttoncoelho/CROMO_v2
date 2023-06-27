import styled from "styled-components";


export const TableList = styled.section`
    height:100%;
    width:90%;
    background-color: #ffffff;
    box-sizing: border-box;
    border-radius: 8px;
    text-align: center;
    overflow-x: auto;
  
    `

export const Cabecalho = styled.form`
    height: 53px;
    border-bottom: 1px solid #0265f0ef;
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
    font-size: 12px;
    border: 1px solid #21559D;
   
`


export const TableOverflow = styled.div`

    overflow-x: auto;
`







export const ColumTable = styled.td`
    padding: 10px 0px ;

    
    color: #ffffff;     
    &:nth-child(1) {
        text-align: start;
        padding: 0px 145px 0px 33px;
        background-color: #2600ff;
        width: 50px;
        max-width: 50px;
    }
    &:nth-child(3){
        background-color: #ea00ff;
        width:60px;
    }
`

export const FirstColumn = styled(ColumTable)`
    background-color: #2600ff;
    width: 50px;
    max-width: 50px;
`;



//---------------------

export const TableWrapper = styled.div`
  width: 100%;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 20px;
  overflow-x: auto;
  
`;

export const TableHeader = styled.div`
  display: flex;
  font-weight: 700;
  color: #3B70BB;

`;

export const TableBody = styled.div`
 display: flex;
  flex-direction: column;
  max-width: ${props => props.width || 'none'};



`;

export const TableRow = styled.div`
  display: flex;


  &:nth-child(even) {
    background-color: #a2c0eb32;
  }
`;

export const TableCell = styled.div`
 display: flex;
 font-size: 12px;
  padding: 10px;
  max-width: ${props => props.width || 'none'};
  min-width: ${props => props.minwidth || 'none'};
  background-color: ${props => props.bgcolor || 'none'};
  color: ${props => props.color || 'none'};
  gap: 10px;
  justify-content: center;


`;
