import React from 'react';

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { convertSecondsTimeToDate } from '../../utils/firebase.utils';
import {
  Wrapper,
  Processed,
  Processing,
} from './styles/OrderStatusStepper.styles';
import { useTheme } from '../../theme';
import { getDeviceType } from '../../utils/getDeviceType';
const OrderStatusStepper = ({ status, ordersTranslation }) => {
  const stepsList = ['sent', 'received', 'shipping', 'complete'];
  const { theme } = useTheme();
  let getStepIndex = 0;
  for (let i = stepsList.length - 1; i >= 0; i--) {
    if (status[stepsList[i]]) {
      getStepIndex = i + 1;
      break;
    }
  }
  const [activeStep] = React.useState(getStepIndex);
  return (
    <Wrapper theme={theme}>
      <Stepper
        activeStep={activeStep}
        alternativeLabel={getDeviceType() !== 'mobile'}
        orientation={getDeviceType() === 'mobile' ? 'vertical' : 'horizontal'}
      >
        {stepsList.map((label) => (
          <Step key={label}>
            <StepLabel>
              <span>{ordersTranslation.product[label]}</span>
              {status[label]?.seconds ? (
                <Processed>
                  {convertSecondsTimeToDate(status[label]?.seconds, true)}
                </Processed>
              ) : (
                <Processing>{ordersTranslation.product.processing}</Processing>
              )}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Wrapper>
  );
};

export default OrderStatusStepper;
