import styled from "styled-components"

export const Wrapper = styled.div`
  .MuiDialog-paperScrollPaper {
    min-height: 50vh !important;
  }
`

export const SettingContents = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: auto;
  min-height: 35vh;
`

export const ContentItem = styled.div`
  display: flex;
  align-items: center;  
  & > *:first-child {
    color : black;
    width : 10rem;
    margin-right: 2rem;
  }
  
`
