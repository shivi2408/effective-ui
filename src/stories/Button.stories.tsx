import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { fn } from '@storybook/test';
import Button from '../Components/Buttons/Button'; 
import { IoMdAdd } from "react-icons/io";

const meta = {
  title: 'Components/Button', 
  component: Button,
  parameters: {
    layout: 'padded', 
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid' ,'light' , 'shadow' , 'ghost' , 'flat', 'faded' , 'bordered', 'underlined' , ],
      description: 'Style variant of the button box.',
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'success', 'warning','danger'],
      description: 'Color variant of the button box.',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the button box.',
    },
    radius: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'full'],
      description: 'Border radius for the button box.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the button box, making it non-interactive.',
    },
    fullWidth: {
      control: 'boolean',
      description: 'If true, the button box spans the full width of its container.',
    },
    children: {
      control: 'text',
      description: 'Content inside the Button.',
    },
    icon: { 
      control: 'text',
      description: 'Content or icon at the end of the button.',
    },
    iconPosition: { 
      control: 'select', 
      options: ['left', 'right'], 
      description: 'Position of the icon relative to the button label.' 
    },
    isLoading: { 
      control: 'boolean', 
      description: 'Show a loading spinner on the button.' 
    },
    isIconOnly: { 
      control: 'boolean', 
      description: 'Show button as an iconButton with correct styles' 
    },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'flat',
    color: 'default',
    radius: 'md',
    size: 'md',
    disabled: false,
    fullWidth: false,
    children: 'Button',
  },
};

export const SuccessIconLeft: Story = {
  args: {
    variant: 'flat',
    color: 'success',
    radius: 'full',
    size: 'md',
    disabled: false,
    fullWidth: false,
    children: 'Success',
    icon: '🌟',
    iconPosition: 'left'
  },
};

export const FailedIconRight: Story = {
  args: {
    variant: 'bordered',
    color: 'danger',
    radius: 'none',
    size: 'lg',
    disabled: false,
    fullWidth: false,
    children: 'Failed',
    icon: '🎉',
    iconPosition: 'right'
  },
};

export const IconOnly: Story = {
  args: {
    variant: 'flat',
    color: 'default',
    radius: 'full',
    size: 'md',
    disabled: false,
    fullWidth: false,
    children: '',
    icon: <IoMdAdd size={20}/>,
    iconPosition: 'right',
    isIconOnly: true
  },
};

