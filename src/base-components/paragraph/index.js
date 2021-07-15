import React from 'react';
import "./paragraph.scss";

function DSParagraph({ children }) {
  return (
    <p className="paragraph">{ children }</p>
  )
}

export default DSParagraph;