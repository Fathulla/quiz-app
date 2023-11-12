import React, { useState } from "react";
import { Button } from "../components/Button";

import { Heading } from "../components/Heading";
import { Input } from "../components/Input";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();
  const [nameValue, setNameValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");

  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const validateNameInput = () => {
    if (!nameValue) {
      setNameError(true);
    } else {
      setNameError(false);
    }
  };

  const validatePhoneInput = () => {
    if (!phoneValue) {
      setPhoneError(true);
    } else {
      setPhoneError(false);
    }
  };
  

  const clickHandler = () => {
    validateNameInput()
    validatePhoneInput()
    if (nameValue && phoneValue) {
      navigate("/step-one");
    }
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <Heading
            headingType="h1"
            text="Добро пожаловать в квиз от лучшего учебного центра"
          />
          <form className="welcome__form">
            <Input
              hasError={nameError}
              value={nameValue}
              onChange={setNameValue}
              id="username"
              isRequired
              inputLabel="Ваше имя"
              inputPlaceholder="Ваш ответ"
              errorMessage="Введите ваше имя"
            />
            <Input
              hasError={phoneError}
              value={phoneValue}
              onChange={setPhoneValue}
              inputType='tel'
              id="phone"
              isRequired
              inputLabel="Ваше номер"
              inputPlaceholder="Ваш ответ"
              errorMessage="Введите номер в правильном формате"
            />
            <Button onClick={clickHandler} buttonType="button" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
