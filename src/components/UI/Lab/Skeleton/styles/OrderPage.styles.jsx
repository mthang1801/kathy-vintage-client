import styled from "styled-components"

export const Wrapper = styled.div`
  width: 95vw;
  margin: 2rem auto;
  @media screen and (min-width: 992px) {
    width: 90vw;
  }
  & > *:not(:first-child){        
    margin-bottom : 2rem;
  }
  .MuiSkeleton-root{
    max-width : 800px;
    margin: auto;
    width : 100%; 
    height : 4.5rem;
  }  
`
