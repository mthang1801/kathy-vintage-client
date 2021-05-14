import styled from "styled-components";

export const Title = styled.h3`
  font-size : 1.25rem;
  margin : 0.5rem 0 1.25rem 0 ;
  text-transform : uppercase ;   
`

export const MarkdownContainer = styled.div`
  width : 100%; 
  padding : 0rem 1rem 2rem 1rem;
  max-height: ${({readMore}) => readMore ? "unset" : "15rem"} ;
  position: relative;
  overflow: hidden;
`

export const BlurSection = styled.div`
  position: absolute; 
  bottom: 0; 
  left: 0;
  width: 100%; 
  padding : 4rem 0;
  text-align: center; 
  margin: 0; 
  background-image: linear-gradient(to bottom, transparent, ${({theme}) => theme.body});

`

export const ReadMore= styled.div`
  width : 100% ; 
  display : flex;
  align-items :center;
  justify-content : center;
  padding : 2rem 0;
`

export const ReadMoreLink = styled.div`
  padding : 0.4rem 2rem;
  color : var(--blue-1);
  border: 1px solid var(--blue-1);
  border-radius : 3px;
  box-shadow : 0 0px 3px 3px var(--light-gray-1);
  transition : var(--mainTransition);
  cursor: pointer;
  &:hover{
    background-color : var(--blue-1);
    color : #fff;
  }
`