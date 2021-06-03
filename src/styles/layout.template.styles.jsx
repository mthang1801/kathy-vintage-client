import styled from "styled-components"

export const ContentContainer = styled.div`
  width : 100%; 
  margin : 0rem; 
  dipslay : flex;  
  flex-direction : column; 
  position : relative;  
  @media screen and (min-width :768px){    
    margin : 3rem auto;
    width : 95vw;
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
  display : none;
  @media screen and (min-width : 768px){
    display : block;
  }
  background-color : ${({theme}) => theme ? theme.card : "var(--card)"};
  padding : 0.75rem 1rem;
  border : 1px solid var(--blue-1);
  border-radius : 0.5rem;
  box-shadow : ${({theme}) => theme ? theme.boxShadow : "var(--boxShadow)"};
  & a , & span , & p{
    font-size : 0.9rem;
  }
`
export const MainContent = styled.div`
background : ${({theme}) => theme ? theme.card : "var(--card)"};
  border-radius : 0.5rem;
  margin-top : 3rem;
  @media screen and (min-width : 768px){
    margin-top:  0;
  }
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
export const ButtonFilter = styled.button`
  position : fixed;
  top: 65px;  
  z-index : 10;
  display : flex;
  align-items : center;
  justify-content : space-between; 
  padding : 0.5rem 1.25rem;
  width : 100vw;     
  background-color : #ffecb3;
  outline : none;
  border: none ;
  margin-bottom : 1rem;
  height:  3rem;
  flex-wrap : nowrap;
  text-align : left;
  & svg{
    font-size : 1.75rem;
  }
  @media screen and (min-width : 768px){
    display : none; 
  }
`

export const FilterList = styled.span`
  flex: 1 ;  
  & > span:not(:first-child){
    margin-left : 1rem;
  };
`