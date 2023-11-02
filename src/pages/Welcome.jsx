import React, { useEffect, useState } from "react";
import { Heading } from "../components/typography/heading";
import { AppInput } from "../components/UI/AppInput";
import { LinkButton } from "../components/UI/LinkButton";

function Welcome() {
  const [nameValue, setNameValue] = useState("");
  const [phoneNumberValue, setPhoneNumberValue] = useState("");

  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  useEffect(() => {
    if (!nameValue) {
      setNameError(true);
    } else {
      setNameError(false);
    }
  }, [nameValue]);

  useEffect(() => {
    if (!phoneNumberValue) {
      setPhoneError(true);
    } else {
      setPhoneError(false);
    }
  }, [phoneNumberValue]);

  const isNextButtonDisabled = nameError || phoneError

  return (
    <div>
      <div className="container">
        <div className="wrapper">
          <div className="welcome">
            <Heading
              headingType="h1"
              text="Добро пожаловать в квиз от лучшего учебного центра "
            />
            <div className="welcome__form">
              <AppInput
                InputLabel="Ваше имя"
                isRequired={true}
                inputType="text"
                inputName="username"
                inputId="username"
                inputPlaceholder="Ваш ответ"
                errorText="Введите номер в правильном формате"
                inputValue={nameValue}
                onInputChange={(e) => setNameValue(e.target.value)}
                isError={nameError}
              />
              <AppInput
                InputLabel="Ваш номер"
                isRequired={true}
                inputType="tel"
                inputName="phone"
                inputId="phone"
                inputPlaceholder="+998 9- --- -- --"
                errorText="Введите номер в правильном формате"
                inputValue={phoneNumberValue}
                onInputChange={(e) => setPhoneNumberValue(e.target.value)}
                isError={phoneError}
              />

              <LinkButton
                buttonText="Далее"
                path="/step-one"
                type="submit"
                isDisabled={isNextButtonDisabled}
                isSubmit={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
