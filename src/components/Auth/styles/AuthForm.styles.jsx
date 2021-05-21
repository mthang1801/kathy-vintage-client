import styled from "styled-components";
import {Link} from "gatsby";
export const AuthFormContainer = styled.form`
  width : 90%; 
  max-width : 500px ;
  padding : 1.5rem 2.5rem ;
  text-align : center;  
  border: 1px solid #ccc;
  margin : 3rem auto 1rem auto;
  border-radius : 10px;
  box-shadow : 0 3px 6px rgba(0,0,0,0.15);
  display : flex ; 
  flex-direction : column ; 
  align-items : center;    
  @media screen and (max-width: 500px){    
    padding : 1.5rem 2rem;
  };
`
export const FormHeader = styled.div`
  margin-bottom: 0.8rem;
`

export const FormGroups = styled.div`
  display : flex;
  width : 100%;
  flex-direction : column;
  justify-content : center;
  align-items : center;
  margin : 1rem auto ;
  .MuiFormControl-root{
    width : 90%;
    max-width : 600px;
    margin-bottom : 1rem;
  }
`

export const FormActions = styled.div`
  display : flex ;
  flex-direction : column;
  justify-content :center;
  align-items: center;  
  margin : 1.5rem 0;
`

export const Title = styled.h2`
  text-transform : uppercase ;  
  font-size : 1.6rem;
  margin-bottom : 0.5rem;
`

export const SubTitle = styled.span`
  color : #505050;
  font-size : .95em;
  opacity : 0.85;
`

export const StyledLink = styled(Link)`
  color : blue;
`

export const Option = styled.span`
  font-size : .95em;
`

export const SocialLoginButtons = styled.div`
  width : 100%;
  display : flex; 
  flex-direction : column;
  margin : 0.5rem auto;
  & > *{
    margin : 0.5rem auto;    
    width : 100%;
  }
  @media screen and (min-width: 768px){
    display : grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap : 1rem;
    & > *{
      margin : 0;
    }
  }  
`

export const ErrorMessage = styled.div`
  color : red ; 
  margin-bottom : 0.75rem;
  font-weight : 600;
`
export const SuccessMessage = styled.div`
  color : green ; 
  margin-bottom : 0.75rem;
  font-weight : 600;
`
