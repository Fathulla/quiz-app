import React, { useState } from 'react';

import { Indicator } from '../components/UI/indicator';
import { VariantWrapper } from '../components/UI/variantWrapper';
import { LinkButton } from '../components/UI/LinkButton';
import { Heading } from '../components/typography/heading';

function StepTwo() {
  const [checkedAnswer, setCheckedAnswer] = useState(null);

  const handleCheck = (answerId) => {
    setCheckedAnswer(answerId);
  };
  const options = [
    {
      id: 'answer-option-1',
      text: 'Ваш ответ 1',
    },
    {
      id: 'answer-option-2',
      text: 'Ваш ответ 2',
    },
    {
      id: 'answer-option-3',
      text: 'Ваш ответ 3',
    },
    {
      id: 'answer-option-4',
      text: 'Ваш ответ 4',
    },
  ];
  return (
    <div>
      <div className="container">
        <div className="wrapper">
          <div className="variants-quiz">
            <Indicator progress="2" />
            <div className="question">
              <Heading headingType="h2" text="2. Занимательный вопрос" />
              <ul className="variants">
                {options.map((element) => (
                  <VariantWrapper
                    key={element.id}
                    id={element.id}
                    labelText={element.text}
                    checked={checkedAnswer === element.id}
                    onChange={() => handleCheck(element.id)}
                  />
                ))}
              </ul>
              
              <LinkButton buttonText='Далее' path="/step-three" disabled={!checkedAnswer} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StepTwo;
