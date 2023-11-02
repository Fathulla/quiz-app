import React, { useState } from 'react';
import './styles/main.css';
import Welcome from './pages/Welcome';
import StepOne from './pages/StepOne';
import StepTwo from './pages/StepTwo';
import StepThree from './pages/StepThree';
import StepFour from './pages/StepFour';

function App() {
  const [step, setStep] = useState(0);
  return (
    <div className="App">
      {step === 0 && <Welcome onStepChange={() => setStep(1)} />}
      {step === 1 && <StepOne onStepChange={() => setStep(2)} />}
      {step === 2 && <StepTwo onStepChange={() => setStep(3)} />}
      {step === 3 && <StepThree onStepChange={() => setStep(4)} />}
      {step === 4 && <StepFour />}
    </div>
  );
}

export default App;
