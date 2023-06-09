import { NotFound } from 'components/NotFound';
import './index.scss';
import { Main } from 'components/Main';
import { Step1 } from 'components/Step1';
import { Step2 } from 'components/Step2';
import { Step3 } from 'components/Step3';
import { Navigate, Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/step1" element={<Step1 />} />
        <Route path="/step2" element={<Step2 />} />
        <Route path="/step3" element={<Step3 />} />
        <Route path="*" element={<Navigate to="/404" />} />
        <Route path="/404" element={<NotFound />} />
      </Routes>
    </div>
  );
};
