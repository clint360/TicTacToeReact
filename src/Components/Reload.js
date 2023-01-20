import React from 'react';

import "./ResetButton.css";

export const Restart = () => {
    function refreshPage() {
        window.location.reload(false);
      }
    return (
        <button className="reset-btn" onClick={refreshPage}>Reset🔄</button>
    )
}
