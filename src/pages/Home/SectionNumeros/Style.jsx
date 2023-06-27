import styled from "styled-components";


export const ContainerVideoEnumeros = styled.section`

display: flex;
margin: auto;
margin-top: 80px;
margin-bottom: 80px;
align-items: center;
justify-content: center;
flex-direction: row;    
width:100%;
max-width: 1240px;

@media (max-width: 1012px) {

    flex-direction: column;

}
@media (max-width: 550px) {
    flex-direction: column;
    

}
;
`

export const YoutubeItem = styled.div`



@media (max-width: 1012px) {



}
@media (max-width: 550px) {

    iframe{
        width:100% ;
        min-width: 370px;
        min-height: 200px;
        height:100% ;
    }

    

}
;
`
export const ContainerNumeros = styled.div`

display: flex;
margin: auto;
margin-top: 80px;
margin-bottom: 80px;
align-items: center;
justify-content: center;
flex-direction: column;    
width:100%;
max-width: 500px;

@media (max-width: 1012px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
}
;
`

export const BlocoDesc = styled.div`


display: flex;
width: 100%;
padding: 5px;
h1{
    color: #181818;
}
p{
    max-width: 510px;
}


@media ( max-width: 1024px){  

    padding: 20px;
    }

@media ( max-width: 500px){ 
    display: flex;
    width: 332px;
    margin: auto;
    max-width: 350px;
    padding: 20px;
    
}
;
`

export const BlocoNumbers = styled.div`

@media ( max-width: 1012px){ 
    width: 500px;
    padding: 5px;
    gap:10px;    
}

@media ( max-width: 550px){ 
    width: 350px;
    padding: 5px;
    gap:10px;    
}

display: flex;
flex-wrap: wrap;
flex-direction: row;
width: 500px;
gap: 10px;


;
`

export const StyleNumbers = styled.div`
@media (max-width: 1024px) { 
    padding: 10px;
    width: 200px;
    margin-left: 40px;
}

@media (max-width: 500px) {
    padding: 10px;
    width: 160px;
    margin-left: 9px;
    
}


display: flex;
flex-direction: column;
padding: 5px;
margin: auto;
width: 300px;
height: 100px;
margin-right: -30px;


h1{
    margin-bottom: -10px;  
    color:#118FAA;
}

;
`
