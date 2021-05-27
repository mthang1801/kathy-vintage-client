import styled from "styled-components"

export const Wrapper = styled.div`  
  display : flex;
  flex-direction : column ; 
  width : 100vw;
  min-height: 100vh;
  @media screen and (min-width: 768px) {        
    display: grid;    
    grid-template-columns: 1fr 2fr;
  }
  @media screen and (min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 4fr;
  }
`

export const DashBoardContainer = styled.div`
  height : 100vh;
`

export const MainContent = styled.div`
  background-color : ${({theme}) => theme.dashboard.background2};
  color : ${({theme}) => theme.dashboard.color2};    
`