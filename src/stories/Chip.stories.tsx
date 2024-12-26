import type { Meta, StoryObj } from '@storybook/react';
import  Chip  from '../Components/Chip/Chip'; // Adjust the import path as needed.

const meta = {
  title: 'Components/Chip', // Adjust category name
  component: Chip,
  parameters: {
    layout: 'centered', // Centers the chip in the Storybook Canvas
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'outlined', 'light'],
      description: 'The variant of the chip.',
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'success', 'danger'],
      description: 'The color variant of the chip.',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the chip.',
    },
    radius: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'full'],
      description: 'The border radius of the chip.',
    },
    isDisabled: {
      control: 'boolean',
      description: 'Disable the chip.',
    },
    children: {
      control: 'text',
      description: 'Content inside the chip.',
    },
    startContent: {
      control: 'text',
      description: 'Content or icon at the start of the chip.',
    },
    endContent: {
      control: 'text',
      description: 'Content or icon at the end of the chip.',
    },
  },
  args: {
    variant: 'solid',
    size: 'md',
    color: 'default',
  },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Chip',
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    color: 'primary',
    children: 'Outlined',
  },
};

export const WithStartIcon: Story = {
  args: {
    color: 'success',
    startContent: '🎉',
    children: 'Chip',
  },
};

export const WithEndIcon: Story = {
  args: {
    color: 'danger',
    endContent: '🌟',
    children: 'Chip',
  },
};


