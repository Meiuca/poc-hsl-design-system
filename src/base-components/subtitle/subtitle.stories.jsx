import React from 'react';
import DSSubtitle from './index.js';

export default {
  title: 'Base Components/Subtitle',
  component: DSSubtitle
};

const Template = (args) => <DSSubtitle>{ args.label }</DSSubtitle>;

export const Default = Template.bind({});
Default.args = {
  label: 'Subtitle SM'
}