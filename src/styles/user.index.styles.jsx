import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
`;

export const Header = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: ${({ justify }) => justify || 'flex-start'};
  padding: 0 1.5rem;
`;
export const Title = styled.h3`
  margin: 0 1rem;
  text-transform: capitalize;
`;

export const DashBoardContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    width: 240px;
  }
  @media screen and (min-width: 992px) {
    width: 320px;
  }
`;

export const MainContent = styled.div`
  width: 100%;
  height: 100vh;
  overflow: auto;
  background-color: ${({ theme }) =>
    theme ? theme?.dashboard?.background2 : 'var(--dashboard-background2)'};
  color: ${({ theme }) =>
    theme ? theme?.dashboard?.color2 : 'var(--dashboard-color2)'};
  @media screen and (min-width: 768px) {
    width: calc(100% - 240px);
    margin-left: 240px;
  }
  @media screen and (min-width: 992px) {
    width: calc(100% - 320px);
    margin-left: 320px;
  }
`;

export const MobileToolbar = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const AvatarContainer = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  & img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

export const ButtonHomePage = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 1.25rem;
  background: none;
  color: inherit;
  &:hover {
    background-color: ${({ theme }) =>
      theme?.name === 'light' ? '#cdeae9' : '#333356'};
    svg {
      fill: ${({ theme }) =>
        theme?.name === 'light' ? 'var(--gray-3)' : 'var(--light-gray-3)'};
    }

    border-radius: ${({ rounded }) => rounded && '50%'};
  }
  & svg {
    font-size: 1.75rem;
  }
`;
