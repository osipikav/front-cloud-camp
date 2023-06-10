import './index.scss';
import { Main } from 'pages/MainPage';
import { Step1 } from 'pages/Step1';
import { Step2 } from 'pages/Step2';
import { Step3 } from 'pages/Step3';
import { NotFound } from 'pages/NotFound';
import { Navigate, Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <div className="аpp">
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
