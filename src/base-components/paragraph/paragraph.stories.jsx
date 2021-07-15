import React from 'react';
import DSParagraph from './index.js';

export default {
  title: 'Base Components/Paragraph',
  component: DSParagraph
};

const Template = (args) =>
  <DSParagraph>
    {args.content}
  </DSParagraph>;

export const Default = Template.bind({});
Default.args = {
  content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
}