import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: inherit;
  text-decoration: underline;

  &:hover,
  &:focus {
    text-decoration: none;
  }

  h4{
    color: #fff;
  }


`;

export const StyleMenu = styled.div`
background-color: #22272E;
width: 300px;
height: 100%;
min-height: 100vw;
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  color: #fff;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    color: #fff;
  }

  a {
    display: block;
    padding: 10px;
    color: #333;
    text-decoration: none;
    color: #fff;
  }

  a:hover {
    background-color: #eee;
    color: #fff;
  }

  ul ul {
    display: none;
  }

  li:hover > ul {
    display: block;
    color: #fff;
  }

  > ul > li {
    border-bottom: 1px solid #ccc;
  }

  > ul > li:last-child {
    border-bottom: none;
  }

  ul ul > li:last-child {
    border-bottom: none;
  }
`;