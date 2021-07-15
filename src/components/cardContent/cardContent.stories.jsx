import React from 'react';
import DSCardContent from './index.js';

export default {
  title: 'Components/Card Content',
  component: DSCardContent
};

const Template = (args) =>
  <DSCardContent
    { ...args }
  >
  </DSCardContent>;

export const Default = Template.bind({});

Default.args = {
  heading: "Heading SM",
  subtitle: "Subtitle SM",
  paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer when an unknown printer took a galley of type and scrambled.",
  button: "Button Label"
}