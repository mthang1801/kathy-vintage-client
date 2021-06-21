import styled from "styled-components"

export const ButtonIcon = styled.span`
  display: flex;
  width: 2.5rem;
  height: 2.5rem;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 2px;
  transition: all 0.5s linear;
  & svg {
    fill: #3c5898;
    font-size: 1.25rem;
    transition: all 0.5s linear;
  }
`

export const GoogleLoginButtonWrapper = styled.button`
  display: flex;
  outline: none;
  border: none;
  background-color: #2196f3;
  border: 1px solid #2196f3;
  align-items: center;
  &:active,
  &:focus,
  &:hover {
    background-color: #1976d2;
    border: 1px solid #1976d2;
    ${ButtonIcon} {
      background-color: #52aef7;
      & svg {
        fill: #fff;
      }
    }
  }
  cursor: pointer;
  padding: 0.05rem;
  color: #fff;
  border-radius: 3px;
  overflow: hidden;
`

export const FacebookLoginButtonWrapper = styled.button`
  display: flex;
  outline: none;
  border: 1px solid #3c5898;
  background-color: #3c5898;
  align-items: center;
  &:active,
  &:focus,
  &:hover {
    background-color: #29487d;
    border: 1px solid #29487d;
    ${ButtonIcon} {
      background-color: #3c5898;
      & svg {
        fill: #fff;
      }
    }
  }
  cursor: pointer;
  padding: 0.05rem;
  color: #fff;
  border-radius: 3px;
  overflow: hidden;
`

export const ButtonText = styled.span`
  text-align: left;
  margin-left: 0.5rem;
  font-size: 0.9rem;
`
