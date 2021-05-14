import styled from "styled-components"

export const Wrapper = styled.div`  
  padding: 0.25rem 0.75rem;
`

export const Title = styled.h3`
  font-size: 1.8rem;
  text-transform: capitalize;
  margin-top: 0;
  margin-bottom: 0.5rem;
`

export const Flex = styled.div`
  display: flex;
  align-items: ${({ alignItems }) => alignItems || "center"};  
  flex-wrap : wrap;
  background-color : ${({theme}) => theme.background};
  margin: 1rem 0;
  ${({ spacing }) =>
    spacing &&
    `    
    & > *:not(:first-child){
      margin-left : ${spacing}rem;
    }
  `}  
`

export const Grid = styled.div`
    display : grid; 
    grid-template-columns : repeat(3, 1fr);
    grid-gap : 0.5rem;
    @media screen and (min-width: 768px){
      grid-template-columns : repeat(4, 1fr);
    }
    @media screen and (min-width: 992px){
      grid-template-columns : repeat(auto-fit, minmax(60px,1fr));
    }
    
`

export const OfficialPrice = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--blue-2);
`

export const InitialPrice = styled.span`
  font-size: 0.9rem;
  margin-left: 1rem;
  opacity: 0.6;
  text-decoration: line-through;
`

export const DiscountPercentage = styled.span`
  margin-left: 0.75rem;
  font-size: 0.9rem;
  color: var(--red-2);
`

export const CustomButton = styled.button`
    width : 300px;          
    outline : none ; 
    border: none ; 
    cursor : pointer;
    display : flex;
    flex-direction : column;
    align-items :center;
    font-size : 0.9rem;
    text-transform : capitalize ;
    padding : 0.5rem 2.5rem;
    & svg{ 
      font-size : 1.25rem;
      margin-bottom : 0.4rem;      
    };
    & *{
      display : flex;
    }
    background-color : ${({color}) => color === "secondary" ? "var(--red-1)" : "var(--blue-1)"};
    &:hover, &:active{
      background-color : ${({color}) => color === "secondary" ? "var(--red-3)" : "var(--blue-3)"};
    }
    color : var(--white);
    border-radius : 0.5rem;
    @media screen and (max-width : 768px){
      &:last-child{
        margin-left : 0 !important;
        margin-top : 1rem !important;
      }  
    }
    
    
`

export const ProductColorItem = styled.div`
    display : flex;
    align-items : center;
    border:  1px solid ${({theme}) => theme.border};
    background-color : ${({theme}) => theme.background};
    border-radius : 0.5rem;
    overflow : hidden;
    min-height: 3rem;
    & img{
      width : 40%;
      height: 100%;      
    }
    & span{
      margin-left : 0.5rem;
    }
    transition : all 0.5s linear;
    cursor : pointer;
    ${({active}) => active && `
      background-color : #42a5f5;      
      border:  1px solid transparent;
    `}
`