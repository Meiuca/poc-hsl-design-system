import React from 'react';
import "./shape.scss";

function DSShape({ children }) {
  return (
    <div className="shape">
      { children }
    </div>
  )
}

export default DSShape;