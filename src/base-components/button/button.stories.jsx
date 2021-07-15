import React from 'react';
import DSButton from './index.js';

export default {
  title: 'Base Components/Button',
  component: DSButton
};

const Template = (args) => <DSButton>{args.label}</DSButton>;

export const Default = Template.bind({});
Default.args = {
  label: "Button Label"
}