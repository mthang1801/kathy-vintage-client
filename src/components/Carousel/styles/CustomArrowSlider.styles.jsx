import styled from "styled-components"

export const CustomPortfoliosArrowPrevContainer = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  background-color: #eeeeee;
  cursor: pointer;
  position: absolute;
  top: 45%;
  left: -1%;
  z-index: 1;
  border-radius: 50%;
  transition: all 0.3s;
  &:hover {
    background-color: #bdbdbd;
    transform: scale(1.3);
    &:before {
      font-size: 1rem;
    }
  }
  &:before {
    content: "❮";
    font-size: 0.9rem;
    color: white;
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translate(-55%, -50%);
  }
`

export const CustomPortfoliosArrowNextContainer = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  background-color: #eeeeee;
  cursor: pointer;
  position: absolute;
  top: 45%;
  right: -1%;
  z-index: 0;
  border-radius: 50%;
  transition: all 0.3s;
  &:hover {
    background-color: #bdbdbd;
    transform: scale(1.3);
    &:after {
      font-size: 1rem;
    }
  }
  &:after {
    content: "❯";
    font-size: 0.9rem;
    color: white;
    position: absolute;
    left: 50%;
    top: 45%;
    transform: translate(-45%, -50%);
  }
`
