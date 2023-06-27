
import styled from 'styled-components';



export const MenuButton = styled.div`
  @media screen and (min-width: 800px) {
    display: none;
  }
  
  display: block;
  cursor: pointer;
  height: 20px;
  position: absolute;
  width: 20px;
  margin-top: 25px;
  gap:10px;
  margin-right: 100px;



  span {
    background-color: #007f9bdc;
    display: block;    
    right: 20;
    position: absolute;
    transform-origin: center;
    transition-duration: 0.15s;
    transition-property: transform, opacity, left;
    width: 100%;
    height: 13%;

    &:nth-child(1) {
      top: ${props => props.open ? '50%' : '0'};
      transform: ${props => props.open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      opacity: ${props => props.open ? '0' : '1'};
      top: 50%;
    }

    &:nth-child(3) {
      bottom: ${props => props.open ? '40%' : '0'};
      transform: ${props => props.open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

export const MenuList = styled.nav`
  background-color: #007f9bdc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 10px;
  position: absolute;
  top: 80px;
  right: 0px;
  width: 100%;
  z-index: 1;
  height: 100vh;
  width: 200px;

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    margin: 0;
    padding: 0;
    width:100%;
   

    li {
      margin: 0;
      padding: 5px;
      margin-bottom: 2px;
      height: 40px;
      border-radius: 8px;
      
      
      &:hover {
        color: #ffffff;        
          background-color: #04667c;
               
      }

      a {
        display: flex;
        color: #ffffff;
        font-size: 16px;
        font-weight: 500;
        padding: 10px;
        text-decoration: none;
      }
    }
  }
`;

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  color: #333;
  cursor: pointer;
  font-size: 24px;
  position: absolute;
  top: 5px;
  right: 10px;
`;

export const MenuBox = styled.div`


@media (min-width: 800px){
  display: none;
  margin: auto;
}


display: flex;
margin: auto;
justify-content: center;
width: 10px;
height: 50px;
margin-top: 5px;

`;