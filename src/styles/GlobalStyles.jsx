import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, :*, :after, :before, ::after, ::before{
    padding : 0; 
    box-sizing: border-box;
  }
  :root{
    --white : #fff; 
    --black : #000;
    --indigo-1 : #3949ab;
    --indigo-2 : #283593;
    --indigo-3 : #1a237e;  
    --blue-1 : #1e88e5;
    --blue-2 : #1565c0;
    --blue-3 : #0d47a1;
    --light-blue-1 : #039be5;
    --light-blue-2 : #0277bd;
    --light-blue-3 : #01579b;
    --cyan-1 : #00acc1;
    --cyan-2 : #00838f;
    --cyan-3 : #006064;
    --green-1 : #43a047;
    --green-2 : #2e7d32;
    --green-3: #1b5e20;
    --red-1: #e53935 ;   
    --red-2: #c62828 ;   
    --red-3: #b71c1c ;   
    --light-gray-1: #f5f5f5 ;
    --light-gray-2: #e0e0e0 ;
    --light-gray-3: #9e9e9e  ;
    --gray-1 : #616161;
    --gray-2 : #424242;
    --gray-3 : #212121;
    --amber-1 : #ffb300;
    --amber-2 : #ffa000;

    --color-background-default: #f0f0f0;
    --color-background-default-secondary : #b4b4b4;
    --color-text-default : #000;  

    --color-background-dark : #2c2c2c;
    --color-background-dark-secondary : #0e0d0d; 
    --color-text-dark : #fff;
    --color-hover-dark : var(--gray-dark);

    --color-card-dark : #2d2f31;    
    --color-card-default : #fff;
    --color-hover-default : var(--light);
    
    --color-border-dark : #0e0f10; 
    --color-border-default : #e8e8e8; 

    --mainTransition : all 0.2s;
    --body: #ededed;
    --text: #000000;
    --button-text: #FFFFFF;
    --button-background: #000000;
    --link-text : teal;
    --header-background : #fff;
    --header-color: #000;
    --navigation-background : #f5f5f5;
    --navigation-active-background : #f5f5f5;
    --navigation-active-color : #ffc107;
    --background: #f0f0f0;
    --card: #fff;
    --form-background : #e0e0e0;
    --hover-background : #f5f5f5;
    --hover-text : #ffc107;
    --breadcrumb-background : #dedede;
    --breadcrumb-link-background : #f0f0f0;
    --breadcrumb-link-color : #757575;
    --border: #e0e0e0;
    --boxShadow: 0 0 3px 3px #f5f5f5;
    --dashboard-background : #e0f2f1;
    --dashboard-color : #060717;
    --dashboard-background2 : #fff;          
    --dashboard-color2 : #000;  
    --disabled-background : #f5f5f5;
    --disabled-color : #424242;
  }
  html{
    width : 100vw;
    overflow-x :hidden;
  }
  body{    
    background-color : ${({ theme }) =>
      theme ? theme.body : 'var(--body)'}  !important  ;
    color : ${({ theme }) => (theme ? theme.text : 'var(--text)')} !important;
    margin : 0; 
    padding : 0 ;
    width : 100vw;
    overflow-x: hidden;        
    font-family:"Roboto", "Helvetica", "Arial", sans-serif !important;
    transition: all 0.5s linear;
  }
  div[role=button]{
    outline : none ;     
  }
  a{
    text-decoration : none ;    
  }
`;
