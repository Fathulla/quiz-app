import React from "react";

export function ProgressBar({ currentItem }) {
  const progressBarItems = [1, 2, 3, 4];
  return (
    <div className="indicator">
      <div className="indicator__text">
        <span className="indicator__description">
          Скидка за прохождение опроса: 15%
        </span>
        <span className="indicator__value" />
      </div>
      <div className="indicator__progressbar">
        {progressBarItems.map((item) => (
          <div
            key={item}
            className={`indicator__unit indicator-unit-1 ${
              item <= currentItem ?? "_active"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
