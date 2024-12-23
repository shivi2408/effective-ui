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
    disabled: {
      control: 'boolean',
      description: 'Disable the checkbox.',
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning'],
      description: 'Color variant of the checkbox.',
    },
    borderRadius: {
      control: 'select',
      options: ['none', 'sm', 'md', 'full'],
      description: 'Border radius for the checkbox.',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the checkbox.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: 'Default',
    variant: 'primary',
    borderRadius: 'sm',
    size: 'md',
    disabled: false,
  },
};

export const Checked: Story = {
  args: {
    label: 'Checked',
    variant: 'primary',
    borderRadius: 'sm',
    size: 'md',
    disabled: false,
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled ',
    disabled: true, // makes the checkbox non-interactive
    borderRadius: 'sm',
    size: 'md',
  },
};

