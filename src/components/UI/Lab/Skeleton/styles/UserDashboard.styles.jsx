import styled from "styled-components"

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme ? theme?.dashboard?.background : "var(--dashboard-background)"};
  .MuiListItem-root{
    padding : 0 16px;
  }
  .MuiSkeleton-root{
    width : 100%;
    height : 60px;
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