import styled from "styled-components"
import { Link } from "gatsby"
export const Wrapper = styled.section`
  width: 100%;
  height: 2.5rem;
  background: ${({ theme }) => theme?.breadcrumb?.background || theme?.body};
  align-items: center;
  padding: 0 2rem;
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`

export const BreadcrumbItemLink = styled(Link)`
  text-decoration: none;
  text-transform: capitalize;

  font-size: 0.8rem;
  color: inherit;
  display: flex;
  align-items: center;
  opacity: 0.8;
  height: 100%;
  padding: 0 2rem 0 0.75rem;
  overflow: hidden;
  position: relative;
  color: ${({ theme }) =>
    theme ? theme?.breadcrumb?.link?.color : "var(--breadcrumb-link-color)"};
  &:not(:last-child):after {
    position: absolute;
    content: "";
    width: 2.5rem;
    height: 2.5rem;
    border: 2px solid;
    transform: rotate(45deg);
    border-color: ${({ theme }) =>
      theme
        ? `${theme?.navigation?.background} ${theme?.navigation?.background} transparent transparent`
        : "var(--naivgation-background) var(--naivgation-background) transparent transparent"};
    right: 0.75rem;
  }
  &:last-child {
    color: inherit;
  }
`
