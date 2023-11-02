import React from 'react';

import { Heading } from '../components/typography/heading';
import { AppButton } from '../components/UI/AppButton';

function Thanks() {
  return (
    <div>
      <div className="container">
        <div className="wrapper">
          <div className="thanks">
            <img src="./img/bell.png" alt="bell" />
            <Heading headingType="h2 " text="Спасибо за прохождение опроса!" />
            <Heading
              headingType="p"
              text="Получи свою скидку по ссылке ниже или другое блаблабла"
            />
            <AppButton id="get-link" text="Получить ссылку" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Thanks;
