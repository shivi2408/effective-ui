import type { Meta, StoryObj } from '@storybook/react';
import Kbd from '../Components/Kbd/Kbd';

const meta: Meta<typeof Kbd> = {
  title: 'Components/Kbd',
  component: Kbd,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    keys: {
        control: { type: 'select' },
        options: [
          'Command', 'Shift', 'Control', 'Option', 'Enter', 'Delete', 'Escape', 
          'Tab', 'CapsLock', 'Up', 'Right', 'Down', 'Left', 'PageUp', 
          'PageDown', 'Home', 'End', 'Help', 'Space'
        ],
      },
    children: {
      control: 'text',
      description: 'Additional text to display after the key(s).',
    },
  },
  args: {
    keys: 'Command',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    keys: 'Command',
    children: 'K'
  },
};

export const MultipleKeys: Story = {
  args: {
    keys: ['Ctrl', 'Shift', 'I'],
  },
};

export const WithAlt: Story = {
  args: {
    keys: ['Alt', 'F4'],
  },
};
