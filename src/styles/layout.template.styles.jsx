import styled from "styled-components"

export const ContentContainer = styled.div`
  width : 95vw; 
  margin : 3rem auto; 
  dipslay : flex;  
  flex-direction : column; 
  position : relative;  
  @media screen and (min-width :768px){    
    display : grid; 
    grid-gap : 0.5rem;
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
    font-size : 0.9rem;
  }
`
export const MainContain = styled.div`
background : ${({theme}) => theme.card};
  border-radius : 0.5rem;
`

export const ProductsList = styled.section`
  width : 100%; 
  padding : 0.75rem;
  border-radius : 0.5rem;
  display : grid ;  
  grid-template-columns : repeat(2, 1fr);
  grid-gap : 2rem 1rem;
  @media screen and (min-width : 768px){
    grid-template-columns : repeat(2, 1fr);
  }
  @media screen and (min-width : 992px){
    grid-template-columns : repeat(3, 1fr);
  }  
  @media screen and (min-width : 1200px){
    grid-template-columns : repeat(4, 1fr);
  }  
`

export const ProductCount = styled.p`
  font-size : 1rem;
  display : flex; 
  align-items : center;
  justify-content : center;
  & > *:not(:first-child){
    margin-left: 0.5rem;
  }
  & svg{
    font-size : 1.1rem;
  }
`