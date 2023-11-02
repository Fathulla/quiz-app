import React from 'react';

export function AppInput({
  isRequired,
  inputType,
  inputName,
  inputId,
  inputPlaceholder,
  pattern,
  InputLabel,
  errorText,
  inputValue,
  onInputChange,
  ...props
}) {
  return (
    <label className="input-wrapper" htmlFor={inputId}>
      {InputLabel}
      <input
        required={isRequired}
        type={inputType}
        name={inputName}
        id={inputId}
        placeholder={inputPlaceholder}
        value={inputValue}
        onChange={onInputChange}
        {...props}
      />
      <span id="error-message">{errorText}</span>
    </label>
  );
}
