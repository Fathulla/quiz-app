import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import './index.css';
import './styles/main.css';
import Welcome from './pages/Welcome';
import StepOne from './pages/StepOne';
import StepTwo from './pages/StepTwo';
import StepThree from './pages/StepThree';
import StepFour from './pages/StepFour';
import Thanks from './pages/Thanks';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Welcome />,
  },
  {
    path: 'step-one',
    element: <StepOne />,
  },
  {
    path: 'step-two',
    element: <StepTwo />,
  },
  {
    path: 'step-three',
    element: <StepThree />,
  },
  {
    path: 'step-four',
    element: <StepFour />,
  },
  {
    path: 'thanks',
    element: <Thanks />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
