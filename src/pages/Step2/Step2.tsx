import { Step2PageForm } from 'components/Step2PageForm';
import './Step2.scss';
import { FormStepper } from 'components/ProgressLine/ProgressLine';

export const Step2 = () => {
  return (
    <div className="step-1">
      <FormStepper activeStep={1} />
      <Step2PageForm />
    </div>
  );
};
