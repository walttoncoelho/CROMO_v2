import styled from "styled-components";

export const ContainerBanner = styled.div`
display: flex;
margin: auto;
width: 100%;
justify-content: center;


max-width: 1920px;
align-items: center;

.BannerDesktop {

    @media (max-width: 550px) {
        display: none;
        
    }

    display: flex;
    margin: auto;
    background-color: #001bb4;
img {
    width: 100%;
}

}

.BannerMobile{
    @media (min-width: 550px) {
        display: none;
        
    }

    display: flex;
    margin: 0;
    justify-content: center;
    align-items: center;
    background-color: #001bb4;
img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 380px;
    margin: 0;

}

}

`;