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
  min-height: 50vh;
`

export const ContentItem = styled.div`
  display: flex;
  align-items: center;
  & > *:first-child {
    width : 120px;
    margin-right: 2rem;
  }
  
`
