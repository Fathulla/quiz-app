import React from 'react';

export function AppButton({ isDisabled, isSubmit, buttonText }) {
  return (
    <button disabled={isDisabled} type={isSubmit ? 'submit' : 'button'}>
      {buttonText}
    </button>
  );
}
