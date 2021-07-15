import React from 'react';
import "./cardContent.scss";

import DSHeading from '../../base-components/heading';
import DSSubtitle from '../../base-components/subtitle';
import DSParagraph from '../../base-components/paragraph';
import DSButton from '../../base-components/button';
import DSShape from '../../base-components/shape';

function DSCardContent({
  heading = "",
  subtitle = "",
  paragraph = "",
  button = ""
}) {
  return (
    <DSShape>
      <DSHeading>
        { heading }
      </DSHeading>
      <DSSubtitle>
        { subtitle }
      </DSSubtitle>
      <DSParagraph>
        { paragraph }
      </DSParagraph>
      <DSButton>
        { button }
      </DSButton>
    </DSShape>
  )
}

export default DSCardContent;