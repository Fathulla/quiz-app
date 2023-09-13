import React, { useEffect, useState } from "react";
import { AppIndicatorText } from "./AppIndicatorText";
import { useLocation } from "react-router-dom";

export const Indicator = () => {
  const [progress, setProgress] = useState (0)
  const location = useLocation ()

  useEffect(() => {
    const cuctomerProgress = location?.state?.progress

    if(cuctomerProgress) {
      setProgress(cuctomerProgress)
    }
  }, [])

    return(
        <div className="indicator">
          <div className="indicator__text">
            <AppIndicatorText indicatorText="Скидка за прохождение опроса:"/>
            <AppIndicatorText indicatorText="15%"/>
          </div>
          <div className="indicator__progressbar">
            {
              Array.from ({ length:4 }).map(
                (_, idx) => 
                <div key={`indicator__unit-$(idx)`} 
                      className={`indicator__unit  ${idx < progress && '_active'}`}/>)
            }
            
          </div>
        </div>
    )
}

