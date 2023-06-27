import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 150px;
  left: 0px;
  top: 0px;
  background: #22272e;
 
`;

export const ContainerLogo = styled.div`
  display: flex;
  margin: auto;
  justify-content: center;
  width: 20%;
  min-width: 300px;

  img {
    height: 100px;
  }
  
`;

export const ContainerSitePreview = styled.div`
  display: flex;
  margin: auto;
  width: 60%;
 
  margin-left: 50px;
`;

export const ContainerSitePerfil = styled.div`
  display: flex;
  margin: auto;
  width: 20%;
  height: 100%;
  align-items: center;
  justify-content: center;

  p{
    color: #fff;
  }
`;

export const ContainerSair = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 20%;
  height: 100%;
 `;
