import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { MdWbSunny } from "react-icons/md";
import { IoMdMoon } from "react-icons/io";
import Switch from '../Components/Switch/Switch';

const meta = {
  title: 'Components/Switch', 
  component: Switch,
  parameters: {
    layout: 'centered', 
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'success', 'warning','danger'],
      description: 'The color variant of the switch.',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the switch.',
    },
    isDisabled: {
      control: 'boolean',
      description: 'Disable the switch.',
    },
    checked: {
      control: 'boolean',
      description: 'Whether the switch is in the on (checked) state.',
    },
    onChange: {
      action: 'changed',
      description: 'Function called when the switch is toggled.',
    },
    children: {
      control: 'text',
      description: 'Label or content inside the switch.',
    },
  },
  args: {
    onChange: fn(),
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: 'default',
    size: 'md',
    children: '',
  },
};

export const Disabled: Story = {
  args: {
    color: 'primary',
    size: 'md',
    isDisabled: true,
    checked: false,
    children: 'Disabled',
  },
};

export const WithLabel: Story = {
  args: {
    color: 'primary',
    size: 'md',
    children: 'Switch with Label',
  },
};

export const WithThumbIcon: Story = {
  args: {
    color: 'default',
    size: 'md',
    checked: true,
    onIcon:  <IoMdMoon />,
    offIcon: <MdWbSunny />, 
    children: 'Switch with Thumb Icon',
  },
};