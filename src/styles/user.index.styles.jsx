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

export const Header = styled.div`  
  height : 60px;
  display  :flex;
  align-items : center;
  justify-content : ${({justify}) => justify || "flex-start"};
  padding  : 0 0.5rem;
`
export const Title = styled.h3`
  margin : 0 1rem;
  text-transform :capitalize;   
`

export const DashBoardContainer = styled.div`
  height : 100vh;
`

export const MainContent = styled.div`
  background-color : ${({theme}) => theme.dashboard.background2};
  color : ${({theme}) => theme.dashboard.color2};    
`