import React from 'react';

export function Indicator({ progress }) {
  return (
    <div className="indicator">
      <div className="indicator__text">
        <span className="indicator__description">
          Скидка за прохождение опроса: 15%
        </span>
        <span className="indicator__value" />
      </div>
      <div className="indicator__progressbar">
        {Array.from({ length: 4 }).map((_, idx) => (
          <div
            key={`indicator-unit-${idx}`}
            className={`indicator__unit ${idx < progress && '_active'}`}
          />
        ))}
      </div>
    </div>
  );
}
