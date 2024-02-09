import React, { useState } from "react";
import { Heading } from "../components/Heading";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";
import { ProgressBar } from "../components/ProgressBar";

const StepOne = () => {
  const navigate = useNavigate();

  const [answerValue, setAnswerValue] = useState("");
  const [answerError, setAnswerError] = useState(false);

  const validateAnswer = () => {
    if (!answerValue) {
      setAnswerError(true);
    } else {
      setAnswerError(false);
    }
  };

  const clickHandler = () => {
    validateAnswer();
    if (answerValue) {
      navigate("/step-two");
    }
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
          <ProgressBar currentStep={1} />
          <div className="indicator">
            <div className="indicator__text">
              <span className="indicator__description">
                Скидка за прохождение опроса:
              </span>
              <span className="indicator__value">15%</span>
            </div>
            <div className="indicator__progressbar">
              <div className="indicator__unit indicator__unit-1"></div>
              <div className="indicator__unit indicator__unit-2"></div>
              <div className="indicator__unit indicator__unit-3"></div>
              <div className="indicator__unit indicator__unit-4"></div>
            </div>
          </div>
          <div className="question">
            <Heading headingType="h2" text="1. Занимательный вопрос" />
            <Input
              hasError={answerError}
              value={answerValue}
              onChange={setAnswerValue}
              isRequired
              inputPlaceholder="Ваш ответ"
              id="answer"
              inputType="text"
              errorMessage="Введите номер в правильном формате например"
            />
            <Button
              buttonType="button"
              id="next-btn"
              buttonText="Далее"
              onClick={clickHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
