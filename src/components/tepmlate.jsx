import React from "react";

const tepmlate = () => {
  const [nameValue, setNameValue] = useState("");
  const [phoneValue, setPhonValue] = useState("");

  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const clicHandler = () => {
    if (!nameValue) {
      setNameError(true);
    } else {
      setNameError(false);
    }
    if (!phoneValue) {
      setPhoneError(true);
    } else {
      setPhoneError(false);
    }
  };
  useEffect(() => {
    console.log(nameValue);
  }, [nameValue]);
  return (
    <>
      <Input
        hasError={nameError}
        value={nameValue}
        inputType="text"
        inputLable="Ваше имя"
        id="username"
        inputPlaceholder="Ваш ответ"
        isRequired={true}
        onChange={setNameValue}
        inputError="Введите свое имя"
      />
      <Input
        hasError={phoneError}
        inputLable="Ваш номер"
        inputType="tel"
        id="phone"
        inputPlaceholder="+998 9- --- -- -- "
        inputError="Введите свой номер"
        value={phoneValue}
        onChange={setPhonValue}
      />

      <Button
        buttonText="Далее"
        buttonType="submit"
        isDisabled={false}
        onClick={clicHandler}
      />
    </>
  );
};

export default tepmlate;
