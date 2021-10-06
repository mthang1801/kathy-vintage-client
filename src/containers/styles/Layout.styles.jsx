import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  opacity : 0.97;
`

export const MainContent = styled.main`
  width: 100%;
  flex: 1;
  margin-top: 60px;
  @media screen and (min-width: 768px) {
    margin-top: 80px;
  }
  @media screen and (min-width: 992px) {
    margin-top: 130px;
  }
`

export const Header = styled.div`
  position: fixed;
  width: 100vw;
  z-index: 100;
`

export const StepperContainer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    width: 100%;
  }
`
