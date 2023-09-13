import React from 'react';

export const AppIndicatorText = ({indicatorText}) => {
    return (
        <div className="indicator__text">
            <span className="indicator__description">{indicatorText}</span>
        </div>
    );
};

