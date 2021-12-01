import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Check from '@material-ui/icons/Check';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import PaymentIcon from '@material-ui/icons/Payment';
import CheckIcon from '@material-ui/icons/Check';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useLocation } from '@reach/router';
import {
  useQontoStepIconStyles,
  ColorlibConnector,
  useColorlibStepIconStyles,
  useStyles,
} from './styles/Stepper.styles';

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? (
        <Check className={classes.completed} />
      ) : (
        <div className={classes.circle} />
      )}
    </div>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
};

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <ShoppingCartIcon />,
    2: <AssignmentIndIcon />,
    3: <PaymentIcon />,
    4: <CheckIcon />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}
function getSteps() {
  return ['Kiểm tra giỏ hàng', 'Thông tin giao hàng', 'Thanh toán', 'Hoàn tất'];
}

function CheckoutStepper() {
  const classes = useStyles();
  const steps = getSteps();
  const activeList = {
    '/checkout': 0,
    '/checkout/': 0,
    '/checkout/shipping': 1,
    '/checkout/shipping/': 1,
    '/checkout/payment': 2,
    '/checkout/payment/': 2,
    '/checkout/complete': 3,
    '/checkout/complete/': 3,
  };
  const { pathname } = useLocation();

  return (
    <div className={classes.root}>
      <Stepper
        alternativeLabel
        activeStep={activeList[pathname]}
        connector={<ColorlibConnector />}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

export default CheckoutStepper;
