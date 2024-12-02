import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Checkbox from '../Components/Checkbox/Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    label: { control: 'text', description: 'Label text displayed next to the checkbox.' },
    checked: { control: 'boolean', description: 'Controlled checked state.' },
    defaultChecked: { control: 'boolean', description: 'Uncontrolled default checked state.' },
    disabled: { control: 'boolean', description: 'Disable the checkbox.' },
    indeterminate: { control: 'boolean', description: 'Visual indeterminate state.' },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning'],
      description: 'Color variant of the checkbox.',
    },
    borderRadius: { control: 'text', description: 'Border radius for the checkbox.' },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: 'Default Checkbox',
    color: 'primary', // Default color
    borderRadius: '4px', // Default border radius
  },
};

export const Checked: Story = {
  args: {
    label: 'Checked Checkbox',
    checked: true,
    color: 'primary',
    borderRadius: '4px',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Checkbox',
    disabled: true,
    color: 'secondary',
    borderRadius: '4px',
  },
};

export const Indeterminate: Story = {
  args: {
    label: 'Indeterminate Checkbox',
    indeterminate: true,
    color: 'warning',
    borderRadius: '4px',
  },
};

export const Success: Story = {
  args: {
    label: 'Success Checkbox',
    checked: true,
    color: 'success',
    borderRadius: '8px',
  },
};

export const Rounded: Story = {
  args: {
    label: 'Rounded Checkbox',
    checked: false,
    color: 'secondary',
    borderRadius: '50%', // Example of a more rounded checkbox
  },
};
