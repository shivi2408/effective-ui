import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import InputBox from '../Components/Input/Input';

const meta: Meta<typeof InputBox> = {
  title: 'Components/InputBox',
  component: InputBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text', description: 'Label text displayed above the input box.' },
    placeholder: { control: 'text', description: 'Placeholder text for the input box.' },
    disabled: {
      control: 'boolean',
      description: 'Disable the input box, making it non-interactive.',
    },
    variant: {
      control: 'select',
      options: ['flat', 'faded', 'bordered', 'underlined'],
      description: 'Style variant of the input box.',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning'],
      description: 'Color variant of the inputbox.',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the input box.',
    },
    radius: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'full'],
      description: 'Border radius for the input box.',
    },
    fullWidth: {
      control: 'boolean',
      description: 'If true, the input box spans the full width of its container.',
    },
    labelPlacement: {
      control: 'select',
      options: ['inside', 'outside'],
      description: 'Position of the label in relation to the input box.',
    },
    isMultiline: {
      control: 'boolean',
      description: 'If true, renders a textarea instead of a single-line input.',
    },
    isPassword: {
      control: 'boolean',
      description: 'If true, input box behaves like a password field.',
    },
    validationBehavior: {
      control: 'text',
      description: 'Custom validation behavior for the input box.',
    },
    defaultValue: {
      control: 'text',
      description: 'Default value for the input box.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof InputBox>;

export const Default: Story = {
  args: {
    label: 'Default',
    placeholder: 'Enter text...',
    variant: 'bordered',
    color: 'secondary',
    radius: 'sm',
    size: 'md',
    disabled: false,
    defaultValue: '',
    fullWidth: false,
    labelPlacement: 'outside',
    isMultiline: false,
  },
};

export const Multiline: Story = {
  args: {
    label: 'Multiline ',
    placeholder: 'Enter multiple lines...',
    variant: 'flat',
    radius: 'md',
    size: 'lg',
    defaultValue: '',
    isMultiline: true,
    fullWidth: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled ',
    placeholder: 'Cannot type here...',
    variant: 'faded',
    radius: 'sm',
    size: 'md',
    disabled: true,
  },
};

export const FullWidth: Story = {
  args: {
    label: 'Full Width ',
    placeholder: 'Spans full width...',
    variant: 'underlined',
    size: 'lg',
    fullWidth: true,
  },
};

export const Password: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    variant: 'bordered',
    color: 'primary',
    radius: 'md',
    size: 'md',
    isPassword: true, 
    fullWidth: false,
    defaultValue: '',
  },
};
