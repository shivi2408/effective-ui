import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Button from '../Components/Buttons/Button'; // Adjust the import path as needed.

const meta = {
  title: 'Components/Button', // Adjust category name.
  component: Button,
  parameters: {
    layout: 'centered', // Centers the button in the Storybook Canvas.
  },
  tags: ['autodocs'],
  argTypes: {
    variant: { 
      control: 'select', 
      options: ['primary', 'secondary', 'outline', 'text'], 
      description: 'The button style variant.' 
    },
    size: { 
      control: 'select', 
      options: ['sm', 'md', 'lg'], 
      description: 'The size of the button.' 
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
    disabled: { 
      control: 'boolean', 
      description: 'Disable the button.' 
    },
    fullWidth: { 
      control: 'boolean', 
      description: 'Make the button stretch to full width.' 
    },
    backgroundColor: { 
      control: 'color', 
      description: 'Custom background color for the button.' 
    },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'md',
    children: 'Secondary Button',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    size: 'md',
    children: 'Outline Button',
  },
};

export const Text: Story = {
  args: {
    variant: 'text',
    size: 'md',
    children: 'Text Button',
  },
};

export const lg: Story = {
  args: {
    size: 'lg',
    children: 'lg Button',
  },
};

export const sm: Story = {
  args: {
    size: 'sm',
    children: 'sm Button',
  },
};

// export const WithIcon: Story = {
//   args: {
//     variant: 'primary',
//     size: 'md',
//     children: 'Button with Icon',
//     icon: <span role="img" aria-label="icon">🌟</span>, 
//     iconPosition: 'left',
//   },
// };

export const Loading: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    isLoading: true,
    children: 'Loading...',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    disabled: true,
    children: 'Disabled Button',
  },
};

export const FullWidth: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    fullWidth: true,
    children: 'Full Width Button',
  },
};
