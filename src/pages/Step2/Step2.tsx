import { Step2PageForm } from 'components/Step2PageForm';
import './Step2.scss';
import ProgressLine from 'components/ProgressLine/ProgressLine';

export const Step2 = () => {
  return (
    <div className="step-1">
      <ProgressLine />
      <Step2PageForm />
    </div>
  );
};
