import styled from "styled-components"

export const SearchForm = styled.form`
  width : ${({open}) => open ? "100%" : "2.5rem"};    
  max-width : 30rem;
  height : 2.5rem;
  border-radius : ${({open}) => open ? "1.5rem" : "50%"};
  overflow : hidden;
  display : flex;
  justify-content : center;
  align-items :center;
  background-color :  var(--white);
  border: 1px solid var(--gray-1) ;
  color : var(--black);  
  padding : 0.5rem 1rem;
  transition : ${({open}) => open ? "width 0.2s": "unset" } ;
  input {
    width : ${({open}) => open ? "95%" : 0};     
    font-size : 0.95rem;
    outline : none ; 
    border: none ;
    padding: 0;     
    transition : ${({open}) => open ? "width 0.2s" :  "unset" } ;
  }
  span{
    display : flex;
    background-color : inherit;
    color : inherit;
    cursor : pointer;
  }
  @media screen and (min-width : 992px){
    width : 100%;
    
    border-radius : 2rem;
    input{
      width : 95%;
    }    
  }
`

