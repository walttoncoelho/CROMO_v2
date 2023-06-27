import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.nav`
  display: flex;
  border-bottom: 1px solid #cccccc;
  justify-content: center;

`;
export const MenuContainer = styled.div` 

@media (max-width: 750px) {
  width: 100%;
  height: 100%;
  display: none;
}
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  max-width: 1440px;
  

  img{
  margin-left: 20px;
  height: 60px;
  }
`;

export const NavItem = styled.li`
  display: inline-block;
  margin-right: 20px;
  font-size: 14px;

  &:last-child {
    margin-right: 0;
  }

  & > a {
    color: #161616;
    text-decoration: none;
    padding: 10px;
    border-radius: 5px;
    margin-right: 30px;

    &:hover {
      color: #007f9b;
    }

    &.active {
      color: #007f9b;
      background-color: #ffffff;
    }
  }
`;

export const NavLinkStyled = styled(NavLink)`
  ${({ theme }) => css`
    &.${"active"} {
      color: ${theme.colors.primary};
    }
  `}
`;
