import styled from "styled-components"


export const Wrapper = styled.section`
  width : 100%; 
  background : ${({theme}) => theme.card};
  border-radius : 0.5rem;
  margin-bottom : 2rem;
  padding : 0.75rem;
  display : flex;
  align-items : flex-start;
  border: 1px solid ${({theme}) => theme.border};  
`

export const ImageContainer = styled.div`
  width : 4rem; 
  
  @media screen and (min-width :768px){
    width : 5rem;
  
  }
  @media screen and (min-width :992px){
    width : 7rem;
  }
  & img{
    width : 100%; 
  
  }

`

export const ProductInformationOverview  = styled.div`
  display : flex; 
  flex : 1 ;  
  flex-direction : column ; 
  justify-content : space-between ; 
  align-items : space-between;
  padding : 0 1rem;  
  
`
export const ProductName = styled.h4`
  flex : 1; 
  margin : 0;    
  font-weight : 400;    
`

export const ProductPriceAndQuantity = styled.div`
  margin-top : 1rem;
  display : flex ; 
  justify-content : space-between;
  
`

export const ProductShippingInformation = styled.div`  
  display : flex ; 
  flex-direction : column ;   
  @media screen and (min-width : 992px){
    display : grid; 
    grid-template-columns : 3fr 1fr;
    grid-gap : 0.5rem;
  }
  
`

export const ProductShippingOverview = styled.div`
  display : flex; 
  justify-content : space-between ;   
  flex-direction : column; 
  align-items : flex-start;
  padding : 0 1rem;
  @media screen and (min-width : 992px){    
    @ >*:not(:last-child){
      margin-bottom: 0.5rem;
    }
    align-items : center;
  }
`

export const ShippingTime = styled.div`
  color : var(--green-3);
  text-transform  :capitalize ; 
  & > span{
    color : ${({theme}) => theme.text};
  }
`