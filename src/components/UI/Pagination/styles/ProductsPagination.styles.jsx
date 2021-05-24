import styled from "styled-components"

export const Wrapper = styled.div`
  width: 80%;
  margin: 3rem auto;
  .pagination {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
  }
  .disabled {
    display: none !important;
  }
  li {
    list-style: none;
    margin: 0 0.1rem;
    position: relative;
  }
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border: 1px solid ${({ theme }) => theme.border};
    background-color : var(--light-gray-1);
    border-radius: 0.5rem;
    outline: none;
    cursor: pointer;
    font-size: 1.2em;
    &:hover {
      background-color: var(--blue-1);
      color: var(--white);
    }
  }
  .active {    
    a {
      color: inherit;
      border: 1px solid var(--blue-1);
      background-color: var(--blue-1);
      color : var(--white);
    }
  }
`
