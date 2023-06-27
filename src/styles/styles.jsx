import styled from "styled-components";

export const Background = styled.div`
  background: ${(props) => props.color};
`;

export const Tipograf = styled.div`
  h1 {  
    font-size: 4em;
    line-height: 64px;
    letter-spacing: 0.01em;   
    font-weight: 900;
    line-height: 60px; 
  }


  h2 {   
    font-size: 3em;
    line-height: 64px;
    letter-spacing: 0.01em;   
    line-height: 60px;    
    font-weight: 900;
  }

  h3 {   
    font-size: 2em;
    line-height: 64px;
    letter-spacing: 0.01em;   
    font-weight: 900;
    line-height: 60px;   

    color: #8D3286;
    font-style: italic;
    margin-bottom: -10px;
  }

  h4 {   
    font-size: 1.2em;
    line-height: 64px;
    letter-spacing: 0.03em;   
    font-weight: 900;
    line-height: 60px;   
  }

  h5 {   
    font-size: 1em;
    line-height: 64px;
    letter-spacing: 0.1em;   
    font-weight: 900;
    line-height: 60px;   
  }

  p {    
    font-size: 1em;
    font-weight: 400;
    line-height: 20px; 
    letter-spacing: 0.02em;
    color: #555;
    
  }

  p.italico {
    color: #4d4c4c;
    font-size: 0.8em;
    font-weight: 400;   
    font-style: italic;
  }

  strong {
    color: #4d4c4c;    
    text-align: center;
    align-items: center;
    justify-content: center;   
    font-style: bold;  
    font-weight: 700;
    letter-spacing: 0.02rem;
    
  }

  ul{
    list-style: none;  
  }
  a{
    text-decoration: none;
  }
`;

/* Elementos */

export const Circle = styled.div`
display: flex;
min-width: 60px;
min-height: 60px;
border-radius: 100px;
background-color: aliceblue;
border-width: 2px;
border-style: solid;
border-color: #eceaea;

img{
  margin: auto;
  align-items: center;
  justify-content: center;  
}
`

