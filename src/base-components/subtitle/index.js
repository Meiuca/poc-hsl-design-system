import React from 'react';
import "./subtitle.scss";

function DSSubtitle({ children }) {
  return (
    <div className="subtitle">
      { children }
    </div>
  )
}

export default DSSubtitle;