import styled from 'styled-components';

export const Wrapper = styled.div`
  .MuiDialog-paperScrollPaper {
    min-height: 50vh !important;
  }
`;

export const SettingContents = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  margin: auto;
  min-height: 35vh;
  font-size: 0.85rem;
  @media screen and (min-width: 768px) {
    font-size: 1rem;
  }
`;

export const ContentItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  grid-gap: 0.5rem;
  align-items: center;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 2fr;
    & > *:first-child {
      color: black;
      width: 10rem;
      margin-right: 2rem;
    }
  }
`;
