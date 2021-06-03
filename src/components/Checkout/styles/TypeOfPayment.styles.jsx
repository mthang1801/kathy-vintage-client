import styled from "styled-components"

export const Wrapper = styled.div`
padding : 0.5rem;
background : ${({theme}) => theme ? theme.card : "var(--card)"}; 
border : 1px solid ${({theme}) => theme ? theme.border : "var(--border)"};
border-radius : 0.5rem;
& > p{
  margin: 0.25rem 0;
}
`

export const Label = styled.div`
  display : flex;   
  align-items : center;
  & img{
    width : 2rem;
    height : 2rem;
  }
  &:not(:first-child){
    margin-left : 0.5rem;
  }
`