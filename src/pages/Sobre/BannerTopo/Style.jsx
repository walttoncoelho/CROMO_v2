import styled from "styled-components";

export const ContainerBanner = styled.div`

@media (max-width: 900px) {
    display: none;  
}

display: flex;
margin: auto;
width:100%;
max-width: 1920px;
justify-content: center;

img{
     display: flex;
    margin: auto;
    width: 100%;
}
;
`

export const ContainerBannerMobile = styled.div`
@media (min-width: 900px) {
    display: none;
    
}
display: flex;
flex-direction: column;
margin: auto;
width: 100%;

;
`

export const BannerTitle = styled.div`
display: flex;
margin: auto;
;
`

export const BannerMobile = styled.div`
display: flex;
margin: 0;
img{
    width: 100%;
    height: 100%;
}
;
`

