import React from 'react';

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import {convertSecondsTimeToDate} from "../../utils/firebase.utils"
import {Wrapper} from "./styles/OrderStatusStepper.styles"

const OrderStatusStepper = ({status, ordersTranslation}) => {
  const stepsList = ["sent", "received", "shipping", "complete"]
  
  let getStepIndex = 0 ; 
  for(let i = stepsList.length -1  ; i >= 0 ; i--){
    if(status[stepsList[i]]){
      getStepIndex = i + 1;
      break;
    }
  }
  console.log(status["sent"].seconds)
  const [activeStep] = React.useState(getStepIndex);
  return (
    <Wrapper>
      <Stepper activeStep={activeStep} alternativeLabel >
        {stepsList.map((label) => (
          <Step key={label}>
            <StepLabel>
              <span>{ordersTranslation.product[label]}</span>
              {status[label]?.seconds ? <span>{convertSecondsTimeToDate(status[label]?.seconds, true)}</span> : <span>{ordersTranslation.product.processing}</span>}
            </StepLabel>            
          </Step>
        ))}
      </Stepper>     
    </Wrapper>
  );
}

export default OrderStatusStepper