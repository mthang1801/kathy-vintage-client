import styled from "styled-components"

export const Wrapper = styled.div`  
  width: 100%;  
  max-width : 600px;
  position : relative;
  .ais-SearchBox-form {
    width: 100%;
    max-width : 600px;
    display : flex;
    flex-direction : row-reverse;
    align-items : center;
    border : 1px solid var(--gray-1);
    font-size : 0.9rem;
    overflow : hidden ;
    border-radius: 0.3rem;
  }
  .ais-SearchBox-input {
    width: 100%;
    padding: 0.5rem;
    outline: none;
    border: 1px solid var(--gray);
    font-size: 1em;    
    &:focus {
      border: 1px solid var(--primary);
    }
  }
  .ais-SearchBox-submit {
    font-size : 1.5rem;    
    outline : none;
    border: none; 
    background-color :transparent;
  }
  .ais-SearchBox-reset{
    display : none ; 
  }
  #search-results {
    position : absolute;
    width : 100%;
    z-index: 3100;
    bottom : 4px;    
  }
  .search-results, .empty-result {
    margin-top: 0.3rem;
    background-color: var(--white);
    box-shadow: 0px 2px 2px 2px rgba(0, 0, 0, 0.2);
    border: 1px solid var(--gray-1);
    border-top: none;
    height: calc(100vh - 60px);
    top : 60px;
    border-radius : 0.3rem;
    left: 0;
    width : 100vw;
    position : fixed;    
    overflow : auto;
    @media screen and (min-width: 768px){
      width : 100%;
      height: auto;
      max-height: 70vh;
      position : absolute;
      top : 0;
      min-width : 400px;
    }
  }
  .ais-Hits {
    height: 100%;
    overflow: auto;
  }
  ul.ais-Hits-list{
    list-style: none ; 
    padding : 0; 
    margin: 0;

  }
  .ais-Pagination {
    height: 12%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid var(--gray);
  }
  .ais-PoweredBy {
    height: 8%;
    text-align: right;
    font-size: 0.8em;
    color: var(--secondary);
  }
  .ais-PoweredBy-logo {
    transform: scale(0.8);
  }
  ul.ais-Pagination-list {
    list-style: none;
    display: flex;
    list-style: none;
    margin-right: unset;
    padding: unset;
    margin-bottom: unset;
  }
  li.ais-Hits-item {
    padding: 0.4rem 0.75rem;
    width: 100%;   
    &:not(:last-child) {
      border-bottom: 1px solid var(--gray-1);
    }
    transition: var(--mainTransition);
    &:hover {
      background-color: var(--light-gray-1);
      color: #000;
    }
    a{
      color : inherit;
    }
  }
  h4.hit-title{
    width : 100%; 
    overflow : hidden ;
    text-overflow : ellipsis; 
    white-space:nowrap;
    margin: 0; 
    padding: 0;
  }
  .ais-Highlight{
    font-weight: normal;
  }
  .ais-Pagination-link {
    display: inline-block;
    text-decoration: underline;
    margin: 0 0.4rem;
    color: var(--primary);
    cursor: pointer;
    &:hover {
      color: var(--indigo);
    }
  }
  .empty-result{
    height : 3rem;
    display : flex;
    justify-content : center;
    align-items : center;
  }
  .ais-Highlight-highlighted {
    font-weight :bold;
    font-style : normal;
  }
  .d-none{
    display : none;
  }
`