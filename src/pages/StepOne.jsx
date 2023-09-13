import React, { useState } from "react";
import { AppInput } from "../components/AppInput";
import { Header } from "../components/Header";
import { Indicator } from "../components/Indicator";
import { LinkButton } from "../components/LinkButton";

const StepOne = () => {
  const [userAnswer, setUserAnswer] = useState()

  const isNextButtonDisabled = !userAnswer

  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
          <Indicator progress={1}/>
          <div className="question">
            <Header type="h2" headerText="1. Занимательный вопрос"/>
            <AppInput
                id="answer"
                isRequired={true}
                name="answer"
                type="text"
                placeholderText="Ваш ответ"
                onChange={(e) => setUserAnswer(e.target.value.trim())}
              />
              <LinkButton 
                isDisabled={isNextButtonDisabled} 
                to='/step-two' 
                linkState={2} 
                buttonLabel="Далее"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StepOne;
