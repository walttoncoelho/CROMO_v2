import styled from "styled-components";

export const BtnContact = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  width: 60px;
  height: 60px;
  border-radius: 100px;
  border-style: none;
  transition: all 0.3s ease-in-out;
  background-color: #1594bb;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  border: solid 1px #21b5e2;
    width: 60px;
  height: 60px;

    &:hover{
      width: 57px;
      height: 57px;
      background-color: #0aafcc;
      border: solid 1px #ffffff6e;
      svg{
      width: 33px;
      height: 33px;
      fill: #ffffff;
      }
    }

  @media (max-width: 400px) {
    right: auto;
    left: 20px;
  }

  svg{
    display: flex;
    width: 30px;
    height: 30px;
    fill: #ffffff;

  }
`;








