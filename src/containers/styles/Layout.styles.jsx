import styled from "styled-components"

export const Container = styled.div`
  display : flex;
  flex-direction : column ; 
  width : 100vw;
  min-height: 100vh;
`

export const MainContent = styled.div`
  flex : 1;
  margin-top : 60px;
  @media  screen and (min-width: 768px){
    margin-top : 80px;
  }
  @media  screen and (min-width: 992px){
    margin-top : 130px;
  }
`

export const Header = styled.div`
  position : fixed;
  width : 100vw;
  z-index: 100;
  box-shadow : 0 0 3px 3px lightgray;
`