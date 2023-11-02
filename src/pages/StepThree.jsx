import React, { useState } from 'react';
import { Indicator } from '../components/UI/indicator';
import { Heading } from '../components/typography/heading';
import { LinkButton } from '../components/UI/LinkButton';
import { ImgVariantWrapper } from '../components/UI/imgVariantWrapper';

function StepThree() {
  const [checkedAnswer, setCheckedAnswer] = useState(null);

  const handleCheck = (answerId) => {
    setCheckedAnswer(answerId);
  };
  const options = [
    {
      id: 'answer-option-1',
      text: 'Ваш ответ 1',
      src: './img/laugh.png',
      alt: 'laugh',
    },
    {
      id: 'answer-option-2',
      text: 'Ваш ответ 2',
      src: './img/hearts.png',
      alt: 'hearts',
    },
    {
      id: 'answer-option-3',
      text: 'Ваш ответ 3',
      src: './img/smirk.png',
      alt: 'smirk',
    },
    {
      id: 'answer-option-4',
      text: 'Ваш ответ 4',
      src: './img/fright.png',
      alt: 'fright',
    },
  ];
  return (
    <div>
      <div className="container">
        <div className="wrapper">
          <div className="emoji-quiz">
            <Indicator progress="3" />
            <div className="question">
              <Heading headingType="h2" text="3. Занимательный вопрос" />
              <ul className="emoji-variants">
                {options.map((element) => (
                  <ImgVariantWrapper
                    key={element.id}
                    id={element.id}
                    labelText={element.text}
                    src={element.src}
                    checked={checkedAnswer === element.id}
                    onChange={() => handleCheck(element.id)}
                  />
                ))}
              </ul>
              <LinkButton buttonText='Далее' path="/step-four" disabled={!checkedAnswer} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StepThree;
