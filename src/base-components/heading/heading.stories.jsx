import React from 'react';
import DSHeading from './index.js';

export default {
  title: 'Base Components/Heading',
  component: DSHeading
};

const Template = (args) => <DSHeading>{ args.label }</DSHeading>;

export const Default = Template.bind({});
Default.args = {
  label: "Heading SM"
}