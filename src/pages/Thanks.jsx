import React from "react";
import { Heading } from "../components/Heading";
import { useNavigate } from "react-router-dom";

const Thanks = () => {
  const navigate = useNavigate()

  return (
    <div className="container">
      <div className="wrapper">
        <div className="thanks">
          <img src="./img/bell.png" alt="bell" />
          <Heading headingType='h1' text='Спасибо за прохождение опроса!'/>
          <p>Получи свою скидку по ссылке ниже или другое блаблабла</p>
          <button onClick={() => navigate('/')} type="button" id="get-link">
            Получить ссылку
          </button>
        </div>
      </div>
    </div>
  );
};

export default Thanks;
