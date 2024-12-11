import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Switch from '../Components/Switch/Switch'; // Adjust the import path as needed.

const meta = {
  title: 'Components/Switch', // Adjust category name
  component: Switch,
  parameters: {
    layout: 'centered', // Centers the switch in the Storybook Canvas
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'success', 'danger'],
      description: 'The color variant of the switch.',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
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
    size: 'medium',
    children: '',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    children: '',
  },
};

export const Disabled: Story = {
  args: {
    color: 'primary',
    size: 'medium',
    isDisabled: true,
    checked: false,
    children: 'Disabled',
  },
};

export const WithLabel: Story = {
  args: {
    color: 'primary',
    size: 'medium',
    children: 'Switch with Label',
  },
};
