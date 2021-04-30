import styled from "styled-components";

export const CustomPortfoliosArrowPrevContainer = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  background-color: var(--light-gray-3);
  cursor: pointer;
  position: absolute;
  top: 45%;
  left: -1%;  
  z-index: 1;
  border-radius: 50%;
  transition : all 0.3s; 
  &:hover {
    background-color: var(--gray-1);
    transform : scale(1.5);    
    &:before {
      font-size: 1.2rem;
    }
  }
  &:before {
    content: "❮";
    font-size: 0.9rem;
    color: white;
    position : absolute; 
    left: 50%; 
    top : 40%; 
    transform : translate(-55%, -50%);
  }
`;

export const CustomPortfoliosArrowNextContainer = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  background-color: var(--light-gray-3);
  cursor: pointer;
  position: absolute;
  top: 45%;
  right : -1%;    
  z-index: 1;
  border-radius: 50%;
  transition : all 0.3s;
  &:hover {
    background-color: var(--gray-1);
    transform : scale(1.5);
    &:after {
      font-size: 1.2rem;
    }
  }
  &:after {
    content: "❯";
    font-size: 0.9rem;
    color: white;
    position : absolute; 
    left: 50%; 
    top : 40%; 
    transform : translate(-45%, -50%);
  }
`;
