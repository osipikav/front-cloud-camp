import './FormStepper.scss';

// import React, { useState } from 'react';
import { Stepper, Step } from 'react-form-stepper';

export type PropsType = { activeStep: number };

export const FormStepper = (props: PropsType) => {
  // const [activeStep, setActiveStep] = useState(0);
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   password: '',
  // });

  // const handleNext = () => {
  //   setActiveStep(activeStep + 1);
  // };

  // const handleBack = () => {
  //   setActiveStep(activeStep - 1);
  // };

  const handleStepClick = (stepIndex: number) => {
    console.log('object :>> ', stepIndex);
    console.log('object :>> ', props.activeStep);
    // setActiveStep(stepIndex);
  };

  // const handleNameChange = (e) => {
  //   setFormData({ ...formData, name: e.target.value });
  // };

  // const handleEmailChange = (e) => {
  //   setFormData({ ...formData, email: e.target.value });
  // };

  // const handlePasswordChange = (e) => {
  //   setFormData({ ...formData, password: e.target.value });
  // };

  // const handleSubmit = () => {
  //   // console.log(formData);
  //   console.log('hi');
  // };

  const stepStyleConfig = {
    activeBgColor: '#5558fa',
    activeTextColor: '#ffffff',
    completedBgColor: '#5558fa',
    completedTextColor: '#ffffff',
    inactiveBgColor: '#A6A6A6',
    inactiveTextColor: '#ffffff',
    size: '1rem',
    circleFontSize: '0.5rem',
    labelFontSize: '1rem',
    borderRadius: '50%',
    fontWeight: 500,
  };
  const connectorStyleProps = {
    disabledColor: 'rgba(0, 0, 0, 0.08)',
    activeColor: '#5558fa',
    completedColor: '#5558fa',
    size: '0.5rem',
    stepSize: '1rem',
    style: 'solid',
  };

  return (
    <div className="progress">
      <div className="step-line"></div>
      {props.activeStep === 1 ? (
        <div className="step-line50"></div>
      ) : props.activeStep === 2 ? (
        <div className="step-line100"></div>
      ) : (
        <div></div>
      )}
      <Stepper
        className="stepper"
        activeStep={props.activeStep}
        connectorStateColors={true}
        styleConfig={stepStyleConfig}
        connectorStyleConfig={connectorStyleProps}
      >
        <Step label="1" index={0} onClick={() => handleStepClick(0)}>
          <div className="step">{props.activeStep === 0 ? '•' : '✔'}</div>
        </Step>
        <Step label="2" index={1} onClick={() => handleStepClick(1)}>
          <div className="step">
            {props.activeStep === 1 ? '•' : props.activeStep === 2 ? '✔' : ' '}
          </div>
        </Step>
        <Step label="3" index={2} onClick={() => handleStepClick(2)}>
          <div className="step">{props.activeStep === 2 ? '•' : ' '}</div>
        </Step>
      </Stepper>

      {/* <div>
        {activeStep > 0 && <button onClick={handleBack}>Back</button>}

        {activeStep < 2 && <button onClick={handleNext}>Next</button>}

        {activeStep === 2 && <button onClick={handleSubmit}>Submit</button>}
      </div> */}
    </div>
  );
};
