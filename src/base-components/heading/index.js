import React from 'react';
import "./heading.scss";

function DSHeading({ children }) {
  return (
    <h2 className="heading">{ children }</h2>
  )
}

export default DSHeading;