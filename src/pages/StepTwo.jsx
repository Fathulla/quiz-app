import React, { useEffect, useState } from "react";
import { ProgressBar } from "../components/ProgressBar";
import { AnswerItem } from "../components/AnswerItem";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";

const StepTwo = () => {
  const navigate = useNavigate();

  const [checkedAnswer, setCheckedAnswer] = useState(null);

  const variants = [
    {
      id: "variant-1",
      answerLabel: "Ответ №1",
    },
    {
      id: "variant-2",
      answerLabel: "Ответ №2",
    },
    {
      id: "variant-3",
      answerLabel: "Ответ №3",
    },
    {
      id: "variant-4",
      answerLabel: "Ответ №4",
    },
  ];

  const clickHandler = () => {
    if (checkedAnswer) {
      navigate("/step-three");
    }
  };

  useEffect(() => {
    console.log("Ваш ответ: ", checkedAnswer);
  }, [checkedAnswer]);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="variants-quiz">
          <ProgressBar currentStep={2} />
          <div className="question">
            <Heading headingType="h2" text="2. Занимательный вопрос" />
            <ul className="variants">
              {variants.map((elem) => (
                <AnswerItem
                  key={elem.id}
                  id={elem.id}
                  answerLabel={elem.answerLabel}
                  onChange={() => setCheckedAnswer(elem.id)}
                  isChecked={elem.id === checkedAnswer}
                />
              ))}
            </ul>
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

export default StepTwo;
