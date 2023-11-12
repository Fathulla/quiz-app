import React from "react";

export const EmojiAnswerItem = ({ src, id, answerText, alt, onChange }) => {
  return (
    <li className="variant-wrapper">
      <input required onChange={onChange} type="radio" name="variant" id={id} />
      <label htmlFor={id}>
        <img src={src} alt={alt} />
        <p>{answerText}</p>
      </label>
    </li>
  );
};
