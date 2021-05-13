import styled from "styled-components"

export const Wrapper = styled.div`
  text-align : center;
  overflow : unset ;  
  & .slick-active{
    & *{
      outline : none; 
      border: none;
    }
  }
`

export const ImageContainer =styled.div`  
  cursor : pointer;  
  height : 5rem;
  width : 5rem;
  & > img{
    height : 5rem;
    width : 5rem;
    transition : var(--mainTransition); 
    ${({active}) => active && `
    transform : scale(1.25);   
  `}   
  }

` 