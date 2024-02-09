import React, { useState } from "react";
import { Heading } from "../components/Heading";
import { Button } from "../components/Button";
import { LevelVariant } from "../components/LevelVariant";
import { useNavigate } from "react-router-dom";
import { ProgressBar } from "../components/ProgressBar";

const StepFour = () => {
  const navigate = useNavigate();

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
      navigate("/thanks");
    }
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
          <ProgressBar currentStep={4} />
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
