import { makeStyles } from '@material-ui/core/styles';
import styled, {keyframes} from "styled-components"
export const useStyles = makeStyles((theme) => ({ 
  speedDial: {
    position: 'fixed',
    bottom: "100px",
    right: theme.spacing(3),
  },
}));

const scale = keyframes`
  from {
    transform : scale(1);
  }
  to {
    transform : scale(1.3);
  }
`

const blur = keyframes`
  from {
    transform : scale(1);    
    opacity : 0.99;
  }
  to{
    opacity : 0;
    transform : scale(1.3);
  }
`

export const Wrapper = styled.div`
  .MuiSpeedDialAction-staticTooltip{
    &[type=phone]{
      .MuiButtonBase-root{
        background: linear-gradient(-135deg, var(--blue-1) 0%, var(--blue-2) 50%, var(--blue-3) 100%);
        color : var(--white);
        &:hover{
          background-color: transparent;
          opacity : 1;
        }
      }
      .MuiSpeedDialAction-staticTooltipLabel{
        background-color: yellow;
        font-size : 1.1rem;
        color : var(--red-1);
        font-weight : bold;
        padding: 0.5rem 1rem;
        box-shadow : ${({theme}) => theme.boxShadow};
        transform: translateX(-10px);
        &:after{
          content : "";
          position : absolute;
          border : 10px solid ;    
          border-color: yellow yellow transparent transparent;       
          transform  :rotate(45deg);
          transition :  all 0.4s;
        }
      }
    }
  }
  .MuiButtonBase-root{
    width : 60px;
    height : 60px;
  }
  .MuiSpeedDial-actions .MuiButtonBase-root{
    position : relative;
    width : 40px;
    height: 40px;
    overflow :hidden ; 
    &:hover{
      background-color : transparent ;
    }
    &[type=messenger]{
      background: linear-gradient(-135deg, rgb(255, 143, 178) 0%, rgb(167, 151, 255) 50%, rgb(0, 229, 255) 100%);
      color : var(--white);
    }   
    &[type=facebook] {
      background: #3B5998;
      color : var(--white);
    }
    &[type=phone]{
      background: linear-gradient(-135deg, var(--blue-1) 0%, var(--blue-2) 50%, var(--blue-3) 100%);
      color : var(--white);
    }
    &[type=email]{
      background :linear-gradient(-135deg, var(--red-1) 0%, var(--red-2) 50%, var(--red-3) 100%);
      color : var(--white);
    }
  }
  .MuiSpeedDial-actions .MuiButtonBase-root{
    margin : 1rem 0; 
    animation : ${scale} 0.5s linear infinite; 
  }
  .MuiSpeedDial-root > .MuiButtonBase-root{    

    &:after{
      content : "";
      position : absolute;
      width:100%;
      height : 100%;       
      border-radius : 50%;  
      background-color :#3f51b5; ;
      opacity : 0.99;
      animation : ${blur} 1s linear infinite; 
      z-index:-1;
    }
    
  }
  
`

export const Tooltip = styled.span`
  position : absolute;
  left : 0; 
  width : 120px;
  height : 40px;
  background-color : blue;
`