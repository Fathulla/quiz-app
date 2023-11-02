import React from "react";

export function NumberVariantAnswer({ optionItem, id, isAnswerChecked }) {
  return (
    <li className="variant-wrapper">
      <input required type="radio" name="variant" id={id}  checked={isAnswerChecked}/>
      <label htmlFor={id}>{optionItem}</label>
    </li>
  );
}
