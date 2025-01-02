import type { Meta, StoryObj } from '@storybook/react';
import InputOTP from '../Components/InputOTP/InputOTP'; // Adjust the import path as needed.

const meta = {
  title: 'Components/InputOTP', // Adjust category name
  component: InputOTP,
  parameters: {
    layout: 'centered', // Centers the component in the Storybook Canvas
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
        control: 'select',
        options: ['flat', 'bordered', 'faded', 'underlined'],
        description: 'The variant of the chip.',
      },
    length: {
      control: { type: 'number', min: 1, max: 10 },
      description: 'The number of OTP input fields.',
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'success', 'danger'],
      description: 'The color variant of the input fields.',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the input fields.',
    },
    radius: {
      control: 'select',
      options: ['none','sm', 'md', 'lg'],
      description: 'The border radius of the input fields.',
    },
    isDisabled: {
      control: 'boolean',
      description: 'Disable the input fields.',
    },
    validationBehavior: {
      control: 'select',
      options: ['none', 'numeric', 'alphanumeric'],
      description: 'The validation behavior for input values.',
    },
    onChange: {
      action: 'changed',
      description: 'Function called when the OTP value changes.',
    },
  },
  args: {
    onChange: (otp: string) => console.log('Entered OTP:', otp), // Default action for change event
  },
} satisfies Meta<typeof InputOTP>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    length: 4,
    color: 'default',
    size: 'md',
    radius: 'md',
    isDisabled: false,
    validationBehavior: 'numeric',
  },
};

export const Disabled: Story = {
  args: {
    length: 4,
    color: 'secondary',
    size: 'md',
    radius: 'md',
    isDisabled: true,
    validationBehavior: 'none',
  },
};

export const WithAlphanumericValidation: Story = {
  args: {
    length: 5,
    color: 'primary',
    size: 'lg',
    radius: 'lg',
    isDisabled: false,
    validationBehavior: 'alphanumeric',
  },
};

