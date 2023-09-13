import React, { useState } from "react";
import { Header } from "../components/Header";
import { Indicator } from "../components/Indicator";
import { LinkButton } from "../components/LinkButton";
import { NumericAnswerItem } from "../components/NumericAnswerItem";

const StepFour = () => {
  const [checkedItem, setCheckedItem] = useState(null)

  const answerOptions = [
    {
      id: 'numeric-answer-1',
      text: '1'
    },
    {
      id: 'numeric-answer-2',
      text: '2'
    },
    {
      id: 'numeric-answer-3',
      text: '3'
    },
    {
      id: 'numeric-answer-4',
      text: '4'
    },
    {
      id: 'numeric-answer-5',
      text: '5'
    }
  ]
  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
          <Indicator progress={4}/>
          <div className="question">
            <Header type="h2" headerText="4. Занимательный вопрос"/>
            <ul className="level-variants">
            {
              answerOptions.map(answerItem => (
                <NumericAnswerItem
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
                to='/thanks' 
                linkState={5} 
                buttonLabel="Далее"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StepFour;
