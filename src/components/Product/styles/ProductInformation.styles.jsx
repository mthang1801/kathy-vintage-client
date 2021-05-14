import styled from "styled-components"

export const Title = styled.h3`
  font-size : 1.25rem;
  margin : 0.5rem 0 1.25rem 0 ;
  text-transform : uppercase ;   
`

export const Table = styled.div`
  width : 100%; 
  max-width : 800px;  
  border-radius : 0.5rem;
  overflow : hidden;  
  & *{
    overflow : hidden;
  }
`

export const TableRow = styled.div`
  display : flex;      
  &:nth-of-type(2n){
    background-color : ${({theme}) => theme.background};
  }
`

export const TableCell = styled.div`
  padding : 0.75rem; 
  background-color : ${({theme}) => theme.background};
  &:first-child{
    width : 40%; 
  }
  &:last-child{
    width : 60%;
  }
  @media screen and (min-width: 768px){
    &:first-child{
      width : 30%; 
    }
    &:last-child{
      width : 70%;
    }
  }
  @media screen and (min-width: 992px){
    &:first-child{
      width : 25%; 
    }
    &:last-child{
      width : 75%;
    }
  }
  & p{
    margin : 0 0 0.5rem 0;
  }
`