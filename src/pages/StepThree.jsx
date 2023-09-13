import React, { useState } from "react";
import { EmojiAnswerItem } from "../components/EmojiAnswerItem";
import { Header } from "../components/Header";
import { Indicator } from "../components/Indicator";
import { LinkButton } from "../components/LinkButton";

const StepThree = () => {
  const [checkedItem, setCheckedItem] = useState(null)

  const answerTypes = [
    {
      id: 'variant=1',
      text: 'Ваш ответ 1'
    },
    {
      id: 'variant=2',
      text: 'Ваш ответ 2'
    },
    {
      id: 'variant=3',
      text: 'Ваш ответ 3'
    },
    {
      id: 'variant=4',
      text: 'Ваш ответ 4'
    }
  ]

  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
          <Indicator progress={3}/>
          <div className="question">
            <Header type='h2' headerText="3. Занимательный вопрос"/>
            <ul className="emoji-variants">
            {
              answerTypes.map(answerItem => (
                <EmojiAnswerItem 
                  key={answerItem.id}
                  id={answerItem.id} 
                  answerText={answerItem.text}
                  isChecked={checkedItem === answerItem.id}
                  onChange={(e) => setCheckedItem(e.target.value)}
                  />
                  
              ))
            }
            </ul>
              <LinkButton 
                isDisabled={!checkedItem} 
                to='/step-four' 
                linkState={4} 
                buttonLabel="Далее"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StepThree;
