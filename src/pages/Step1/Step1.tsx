import './Step1.scss';

import { FormStepper } from 'components/ProgressLine/ProgressLine';
import { Step1PageForm } from 'components/Step1PageForm';

export const Step1 = () => {
  return (
    <div className="step-1">
      <FormStepper activeStep={0} />
      <Step1PageForm />
    </div>
  );
};
