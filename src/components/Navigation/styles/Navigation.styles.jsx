import styled from "styled-components";
import {config} from "../../../config"
export const Wrapper = styled.nav`
  width : 100%;     
  background : ${({theme}) => theme.colors.navigation.background};
  padding : 0 5rem;  
  display : grid; 
  grid-template-columns : 1fr 3fr;  
  grid-template-rows: ${config.navigationHeight}px;
  align-content : center;  
`