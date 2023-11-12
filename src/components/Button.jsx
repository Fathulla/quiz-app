import React from "react";

export const Button = ({
  buttonType,
  buttonText = "Далее",
  isDisabled,
  onClick,
}) => {
  return (
    <button
      disabled={isDisabled}
      type={buttonType === "submit" ? "submit" : "button"}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};
