// Checkbox.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Checkbox from '../components/Inputs/Checkbox'; // Update the import path as necessary

export default {
  title: 'Components/Checkbox',
  component: Checkbox, 
} as Meta;

// Template for the Checkbox story
// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
const Template: StoryFn<{ onRowSelect: Function; clientId: number }> = (args) => (
  <Checkbox {...args} />
);

// Default state of the Checkbox (unchecked)
export const Unchecked = Template.bind({});
Unchecked.args = {
  onRowSelect: (clientId: number, checked: boolean) => {
    console.log(`Client ${clientId} checked: ${checked}`);
  },
  clientId: 1,
};

// Checked state of the Checkbox
export const Checked = Template.bind({});
Checked.args = {
  onRowSelect: (clientId: number, checked: boolean) => {
    console.log(`Client ${clientId} checked: ${checked}`);
  },
  clientId: 2,
};

// Disabled Checkbox
export const Disabled = Template.bind({});
Disabled.args = {
  onRowSelect: (clientId: number, checked: boolean) => {
    console.log(`Client ${clientId} checked: ${checked}`);
  },
  clientId: 3,
};
