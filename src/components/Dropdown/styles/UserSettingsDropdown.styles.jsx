import styled from "styled-components"
import {Link} from "gatsby"
export const Wrapper = styled.div`  
  width : 100%;
  display : flex;
  flex-direction : column;  
  margin : 0.5rem 0;
  
`

export const ManageAccount = styled.div`
  padding: 0.75rem 2rem;  
  display : flex;
  width : 100%;
  flex-direction : column;
  justify-content : center;
  align-items : center;
`

export const UserAvatar = styled(Link)`
  width : 3.5rem;
  height : 3.5rem; 
  & img{
    width : 100%; 
    height:  100%;
    border-radius :50%;
  }
  margin-bottom : 1rem;
  cursor: pointer;
`

export const UserName = styled.h3`
  font-weight: 600;
  margin : 0.5rem 0;
`

export const UserEmail = styled.div`
  opacity : 0.6;
`

export const SettingButton = styled.button`
  border-radius : 2rem;
  border : 1px solid ${({theme}) => theme ? theme.border : "var(--border)"};
  padding : 0.6rem 2rem;
  margin : 1rem auto;
  cursor : pointer;
  outline: none; 
  font-weight : 400;  
  text-transform : capitalize; 
  cursor : pointer;
  background : transparent;
  &:hover{
    background-color : ${({theme}) => theme ? theme.border : "var(--border)"};
  };
  text-decoration : none; 
  color : inherit;
`

export const Divider = styled.div`
  width : 100%;
  height: 1px;  
  opacity : 0.8;
  margin : 0.25rem 0;  
  background-color : var(--light-gray-2);
`

export const SettingItem = styled.div`
  display : flex;
  padding: 0.5rem 2rem;
  align-items : center;
  cursor : pointer;
  text-decoration : none; 
  color: inherit;
  &:hover{
    background-color : ${({theme}) => theme ? theme?.hover?.background  : "var(--hover-background)"};
  }
  overflow : hidden;
`
export const SettingItemLink = styled.span`
  display : flex;
  padding: 0.5rem 2rem;
  align-items : center;  
  text-decoration : none; 
  color: inherit;
  outline : none;
  border : none; 
  cursor : pointer;
  &:hover{
    background-color : ${({theme}) => theme ? theme?.hover?.background :  "var(--hover-background)"};
  }
  overflow : hidden;
`

export const SettingItemIcon = styled.div`
  display : flex;
  font-size : 1.5rem;
`

export const SettingItemText = styled.div`
  margin-left : 1rem;
`