import React from 'react';

export function VariantWrapper({
  id, labelText, checked, onInputChange,
}) {
  return (
    <li className="variant-wrapper">
      <input
        required
        checked={checked}
        type="radio"
        name="variant"
        id={id}
        onChange={onInputChange}
      />
      <label htmlFor={id}>{labelText}</label>
    </li>
  );
}
