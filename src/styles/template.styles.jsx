import styled from "styled-components"

export const ContentContainer = styled.div`
  width : 95vw; 
  margin : 3rem auto; 
  dipslay : flex;  
  flex-direction : column; 
  position : relative;  
  @media screen and (min-width :768px){    
    display : grid; 
    grid-template-columns : 1.25fr 2fr; 
  }
  @media screen and (min-width : 992px){        
    display : grid; 
    grid-template-columns : 1fr 3fr; 
  }
`

export const Sidebar = styled.div`
  background-color : ${({theme}) => theme.card};
  padding : 0.75rem 1rem;
  border : 1px solid var(--blue-1);
  border-radius : 0.5rem;
  box-shadow : ${({theme}) => theme.boxShadow};
  & a , & span , & p{
    font-size : 1rem;
  }
`

export const TemplateViewPortRight = styled.div`

`