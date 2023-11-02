import React from 'react';

export function LevelWrapper({
  id, labelText, checked, onChange,
}) {
  return (
    <li className="variant-wrapper">
      <input
        required
        type="radio"
        name="variant"
        id={id}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id}>{labelText}</label>
    </li>
  );
}
