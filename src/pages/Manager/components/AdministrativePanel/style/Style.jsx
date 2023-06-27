import styled from "styled-components";
import { NavLink } from "react-router-dom";
// Container dos Menus

// ---> PAINEL ADMINISTRATIVO <---

export const PainelAdministrativo = styled.nav`
margin: auto;

padding: 20px;
    display: flex;
    flex-direction: column;
    width: 370px;
/*     height: calc(100vh - 81px); */
height: 10%;
    font-family: Arial, Helvetica, sans-serif;
    box-sizing: border-box;
    color: #FFFF;     
    ol{
      text-decoration: none;

    }
`
// Card Painel

export const PainelMenu = styled.div`
    margin-top: 24px;
    background-color: #17417D;
    padding: 10px;
    font-size: 20px;
    padding: 19px 0px 19px 27px;
    border-top: 3px;   
    border-radius: 5px 5px 0px 0px;
    font-weight: 400;
`

export const PainelListaMenu = styled.div`
display: flex;
flex-direction: column;
width: 100%;
    color: #97999c;
    font-size: 14px;
    font-weight: 400;
    list-style-type: none;
    border-radius: 8px;
    margin-bottom: 20px;
    cursor: pointer;    
      
    `;



export const NavLinkStyled = styled(NavLink)`
display: flex;
width: 100%;
min-width: 330px;
align-items: center; 
background-color: #21559D;
margin-left: -40px;


&:hover{
  background-color: #17417D;
}


p{
  margin-left: 30px;
}

  text-decoration: none; 
  color: #ffffff;                
  height: 60px; 
  `;

// Menu Conteúdo






export const PainelListaConteudo = styled.li`
display: flex;
margin: auto;

width: 100%;

    color: #97999c;
    font-size: 14px;
    font-weight: 400;
    list-style-type: none;   
`
export const PainelConteudo = styled.div`
    margin-top: 24px;
    background-color: #17417D;
    padding: 10px;
    font-size: 20px;
    padding: 19px 0px 19px 27px;
    border-top: 3px;   
    border-radius: 5px 5px 0px 0px;
    font-weight: 400;
`;

export const BannerMenuItem = styled.li`
  /* estilo para cada item do menu */
  list-style-type: none;

  color: #000;
  a{
    text-decoration: none;
  }

`;

export const BannerMenuLink = styled.a`
  /* estilo para o link do menu */
  list-style-type: none;
  color: #000;
  cursor: pointer;
  display: flex;
width: 100%;
min-width: 330px;
align-items: center; 
text-decoration: none;

  

margin-left: -40px;


&:hover{
  background-color: #768aa73c;
  color: #1a3386;
  font-weight: 500;
}


p{
  margin-left: 30px;
  text-decoration: none;
  margin-left: 10px;
  padding: 20px;
  
}

  text-decoration: none; 
  color: #111111;                
  height: 60px; 
`;

export const DropdownContent = styled.ol`
text-decoration: none;
list-style-type: none;
  /* estilo para o menu dropdown */
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  background-color: #dad9d9;
  margin-bottom: 5px;
  padding: 5px;
  text-decoration: none;
  li{
    text-decoration: none;
    list-style-type: none;
    color: #cc2626;
    
  }
  
  
  
`;

export const DropdownLink = styled.a`
  /* estilo para cada item do menu dropdown */
  color: #e21c0e;
  text-decoration: none;
  
  li{
    margin: auto;
    display: flex;
    height: 38px;

    &:hover{

  color: #1a3386;
  font-weight: 500;
  cursor: pointer;
}

  }
  
`;