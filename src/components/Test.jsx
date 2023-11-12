import React, { useState } from "react";

export const Test = () => {
  const [count, setCount] = useState(0);
  console.log('Текущее состояние: ', count);

  return (
    <>
      <h1>{count}</h1>
      <button
        type="button"
        onClick={() => setCount((prev) => {
          console.log('Пред. состояние: ', prev);
          return prev + 1;
        })}
      >
        increment
      </button>
    </>
  );
};
