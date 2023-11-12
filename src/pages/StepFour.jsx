import React, { useState } from "react";
import { Heading } from "../components/Heading";
import { Button } from "../components/Button";
import { LevelVariant } from "../components/LevelVariant";
import { useNavigate } from "react-router-dom";

const StepFour = () => {
  const navigate = useNavigate()

  const [checkedAnswer, setCheckedAnswer] = useState();

  const variants = [
    {
      id: "variant-1",
      text: "1",
    },
    {
      id: "variant-2",
      text: "2",
    },
    {
      id: "variant-3",
      text: "3",
    },
    {
      id: "variant-4",
      text: "4",
    },
    {
      id: "variant-5",
      text: "5",
    },
  ];

  const clickHandler = () => {
    if (checkedAnswer) {
      navigate('/thanks')
    }
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
          <div className="indicator">
            <div className="indicator__text">
              <span className="indicator__description">
                Скидка за прохождение опроса:
              </span>
              <span className="indicator__value">15%</span>
            </div>
            <div className="indicator__progressbar">
              <div className="indicator__unit indicator__unit-1 _active"></div>
              <div className="indicator__unit indicator__unit-2 _active"></div>
              <div className="indicator__unit indicator__unit-3 _active"></div>
              <div className="indicator__unit indicator__unit-4"></div>
            </div>
          </div>
          <div className="question">
            <Heading headingType="h2" text="4. Занимательный вопрос" />
            <ul className="level-variants">
              {variants.map((elem) => (
                <LevelVariant
                  id={elem.id}
                  onChange={() => setCheckedAnswer(elem.id)}
                  variantText={elem.text}
                />
              ))}
            </ul>
            <Button
              buttonType="button"
              onClick={clickHandler}
              buttonText="Далее"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepFour;
