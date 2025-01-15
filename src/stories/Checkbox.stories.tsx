import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Checkbox from '../Components/Checkbox/Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text', description: 'Label text displayed next to the checkbox.' },
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'success', 'warning','danger'],
      description: 'Color variant of the checkbox.',
    },
    radius: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg','full'],
      description: 'Border radius for the checkbox.',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the checkbox.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the checkbox.',
    },
    textColor: {
      control: 'boolean',
      description: 'Enable the text color.',
    },
    lineThrough: {
      control: 'boolean',
      description: 'Enable the strike Through.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: 'Default',
    color: 'default',
    radius: 'md',
    size: 'md',
    disabled: false,
    textColor: false,
  },
};

export const Checked: Story = {
  args: {
    label: 'Checked',
    color: 'primary',
    radius: 'sm',
    size: 'md',
    disabled: false,
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled ',
    disabled: true,
    radius: 'sm',
    size: 'md',
  },
};

