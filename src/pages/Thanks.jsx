import React from "react";
import { AppButton } from "../components/AppButton";
import { Header } from "../components/Header";
import { Paragraph } from "../components/Paragraph";

const Thanks = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="thanks">
          <img src="./img/bell.png" alt="bell" />
          <Header type="h1" headerText="Спасибо за прохождение опроса!"/>
          <Paragraph paragraphText="Получи свою скидку по ссылке ниже или другое блаблабла"/>
          <AppButton
                type="submit"
                id="get-link"
                buttonText="Получить ссылку"
          />
        </div>
      </div>
    </div>
  )
}

export default Thanks
