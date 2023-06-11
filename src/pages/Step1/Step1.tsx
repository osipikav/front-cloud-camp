import './Step1.scss';

import ProgressLine from 'components/ProgressLine/ProgressLine';
import { Step1PageForm } from 'components/Step1PageForm';

export const Step1 = () => {
  return (
    <div className="step1">
      <ProgressLine />
      <Step1PageForm />
    </div>
  );
};
