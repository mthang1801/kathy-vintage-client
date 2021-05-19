import styled from "styled-components"

export const Wrapper = styled.div`
  width : 100% ;   
`

export const Title = styled.h4`
  font-size : 1.1rem;
  text-transform : uppercase ; 
  text-align  :center;
  margin : 1rem auto 1rem auto;
`

export const List = styled.ul`
  background : ${({theme}) => theme.card};
  border-radius : 0.5rem;
  overflow : hidden ; 
  padding : 0 ;  
  margin : 0 0 1rem 0;
  font-size : 0.95rem;
  & > *:hover{
    background-color : ${({theme}) => theme.hover};
  }
  & li:not(:last-child){
    border-bottom : 1px solid ${({theme}) => theme.border};
  }
`

export const ListItem = styled.li`
  display : flex;
  justify-content : space-between ;    
  padding: 1rem;  
  
  font-size : 1rem;
  ${({total}) => total && `    
    & span:last-child{
      color : var(--red-1);
      font-weight : bold;
      
    }
  `}
`
