import React from 'react';

export const EmojiAnswerItem = ({id,isChecked, answerText, onChange}) => {
    return (
        <li className="variant-wrapper">
            <input required 
                type="radio" 
                name="variant" 
                id={id}
                checked={isChecked}
                onChange={onChange}
                />
            <label htmlFor={id}>
                <img src="./img/laugh.png" alt="laugh" />
                <p>{answerText}</p>
            </label>
        </li>
    );
};