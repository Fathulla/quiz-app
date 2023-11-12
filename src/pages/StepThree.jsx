import React, { useState } from "react";
import { Heading } from "../components/Heading";
import { EmojiAnswerItem } from "../components/EmojiAnswerItem";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";

const StepThree = () => {
  const navigate = useNavigate();

  const [checkedAnswer, setCheckedAnswer] = useState(null);

  const variants = [
    {
      answerText: "Ваш ответ 1",
      id: "variant-1",
      src: "./img/laugh.png",
      alt: "laugh",
    },
    {
      answerText: "Ваш ответ 2",
      id: "variant-2",
      src: "./img/hearts.png",
      alt: "hearts",
    },
    {
      answerText: "Ваш ответ 3",
      id: "variant-3",
      src: "./img/smirk.png",
      alt: "smirk",
    },
    {
      answerText: "Ваш ответ 4",
      id: "variant-4",
      src: "./img/fright.png",
      alt: "fright",
    },
  ];

  const clickHandler = () => {
    if (checkedAnswer) {
      navigate("/step-four");
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
              <div className="indicator__unit indicator__unit-3"></div>
              <div className="indicator__unit indicator__unit-4"></div>
            </div>
          </div>
          <div className="question">
            <Heading headingType="h2" text="3. Занимательный вопрос" />

            <ul className="emoji-variants">
              {variants.map((elem) => (
                <EmojiAnswerItem
                  answerText={elem.answerText}
                  id={elem.id}
                  src={elem.src}
                  alt={elem.alt}
                  onChange={() => setCheckedAnswer(elem.id)}
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

export default StepThree;
