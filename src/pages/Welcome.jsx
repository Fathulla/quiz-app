import React, { useState } from "react";
import { useEffect } from "react";
import {useNavigate} from "react-router-dom"
import { AppButton } from "../components/AppButton";
import { AppInput } from "../components/AppInput";
import {Header} from "../components/Header"

const Welcome = () => {
  const [userName, setUsername] = useState(null)
  const [userPhone, setUserPhone] = useState(null)

  const [userNameError, setUserNameError] = useState(false)
  const [userPhoneError, setUserPhoneError] = useState(false)


  const hasError = userNameError || userPhoneError
  const isNextButtonDisabled = !userName || !userPhone || hasError

  useEffect(() => {
    const rawUserData = localStorage.getItem('userData')
    console.log(rawUserData)

    const { userName, userPhone } = JSON.parse (rawUserData)

    if (userName) {
      setUsername(userName)
    }

    if (userPhone) {
      setUserPhone(userPhone)
    }
  }, [])

  const navigate = useNavigate()

  const validateUsername = (e) => {
    const regex = /^[a-zA-Zа-яА-Я]+$/

    if (regex.test(e.target.value)) {
      setUserNameError(false)
    }else {
      setUserNameError(true)
    }

    setUsername(e.target.value)
  }

  const validateUserPhone = (e) => {
    const regex = /^(?:\+998)?(?:\d{2})?(?:\d{7})$/

    if(regex.test(e.target.value)) {
      if(userPhoneError) {
        setUserPhoneError(false)
      }
    }else{
      setUserPhoneError(true)
    }

    setUserPhone(e.target.value)
  }

  const submitForm = () => {
    const userData = {
      userName: userName,
      userPhone: userPhone
    }

    if (userName && userPhone) {
      localStorage.setItem('userData', JSON.stringify(userData))
    }
    navigate('/step-one', {
      state: {
        'progress': 1
      }
    })
  }

  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <Header type="h1" headerText="Добро пожаловать в квиз от лучшего учебного центра"/>
          <form className="welcome__form">
            <AppInput 
              id="username"
              isRequired={true}
              name="username"
              type="text"
              labelText="Ваше имя"
              placeholderText="Ваш ответ"
              errorText="Имя должно содержать только буквы"
              onChange={validateUsername}
              hasError={userNameError}
              value={userName}
            />

            <AppInput 
              id="phone"
              isRequired={true}
              name="phone"
              type="tel"
              labelText="Ваш номер"
              placeholderText="+998 9- --- -- -- "
              errorText="Введите номер в правильном формате"
              onChange={validateUserPhone}
              hasError={userPhoneError}
              value={userPhone}
            />
            <AppButton
              isDisabled={isNextButtonDisabled}
              type="submit"
              id="next-btn"
              buttonText="Далее"
              onClick={submitForm}
            />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Welcome;
