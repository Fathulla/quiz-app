import React from "react";

export const LevelVariant = ({id, variantText, onChange, isChecked}) => {
  return (
    <li className="variant-wrapper">
      <input required type="radio" checked={isChecked} name="variant" id={id} onChange={onChange}/>
      <label htmlFor={id}>{variantText}</label>
    </li>
  );
};
