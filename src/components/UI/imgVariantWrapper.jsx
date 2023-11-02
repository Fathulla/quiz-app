import React from 'react';

export function ImgVariantWrapper({
  id,
  src,
  alt,
  text,
  checked,
  onChange,
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
      <label htmlFor={id}>
        <img src={src} alt={alt} />
        <p>{text}</p>
      </label>
    </li>
  );
}
