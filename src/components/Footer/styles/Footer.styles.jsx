import styled from "styled-components"
import { Link } from "@reach/router"
export const Wrapper = styled.footer`
  display : flex;
  flex-direction : column ; 
  background-color : black;
  margin: 5rem auto 0 auto;
  padding : 3rem 5rem;
  color : white;  
  
  @media screen and (min-width : 768px){
    display : grid; 
    grid-template-columns : repeat(2, auto);
    grid-gap : 0.5rem;
  }
  @media screen and (min-width: 992px){
    grid-template-columns : repeat(3, auto);    
  }
  @media screen and (min-width: 1200px){
    grid-template-columns : repeat(4, auto);    
  }
`

export const Grid = styled.div`
  display : ${({brand}) => brand ? "none" : "block"}; 
  @media screen and (min-width: 1200px){
    display : block;
  }
`

export const Title = styled.h4`
  text-transform : uppercase ; 
`

export const ImageContainer = styled.h3`
  font-family: 'Cookie', cursive;
  font-size : 4rem;
  color : white;  
  padding: 0;
  margin:  0;
  a {
    color : inherit;
    text-decoration : none;
  }
`

export const Policies = styled.div`
  display : flex;
  flex-direction : column;
  & a {
    color : inherit;
    text-decoration : none; 
    margin : 0.5rem 0; 
    text-transform : capitalize ; 
  }
`

export const List = styled.div`
  display : flex;  
  flex-wrap : nowrap;
  & > *:not(first-child) {
    margin-left : 0.75rem;
  }
`

export const ContactLink = styled(Link)`
  border: 1px solid white;
  font-size: 1.2rem;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: var(--gray-2);
  &:hover {
    background: ${({ icon }) => icon === "facebook" ? "#4267B2" : icon==="twitter" ? "#1DA1F2" : icon === "instagram" ? "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)"  : ""};    
    color : white;
  }
`

export const ListItemIcon = styled.div`
 
`