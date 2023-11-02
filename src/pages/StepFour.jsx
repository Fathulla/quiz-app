import React, { useState } from "react";

import { Indicator } from "../components/UI/indicator";
import { Heading } from "../components/typography/heading";
import { LinkButton } from "../components/UI/LinkButton";
import { NumberVariantAnswer } from "../components/UI/NumberVariantAnswer";

function StepFour() {
  const [selectedAnswerId, setSelectedAnswerId] = useState();

  const answersData = [
    {
      id: "variant-1",
      value: 1,
    },
    {
      id: "variant-2",
      value: 2,
    },
    {
      id: "variant-3",
      value: 3,
    },
    {
      id: "variant-4",
      value: 4,
    },
    {
      id: "variant-5",
      value: 5,
    },
  ];

  return (
    <div>
      <div className="container">
        <div className="wrapper">
          <div className="emoji-quiz">
            <Indicator progress="4" />
            <div className="question">
              <Heading headingType="h2" text="4. Занимательный вопрос" />
              <ul className="level-variants">
                {answersData.map((answer) => (
                  <NumberVariantAnswer
                    key={answer.id}
                    id={answer.id}
                    optionItem={answer.value}
                    isAnswerChecked={answer.id === selectedAnswerId}
                    onClick={() => setSelectedAnswerId(answer.id)}
                  />
                ))}
              </ul>
              <LinkButton path="/thanks" buttonText="Далее"  />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StepFour;
