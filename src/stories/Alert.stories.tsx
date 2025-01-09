import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Alert from '../Components/Alert/Alert'; 

const meta = {
  title: 'Components/Alert', 
  component: Alert,
  parameters: {
    layout: 'centered', 
  },
  tags: ['autodocs'],
  argTypes: {
    message: {
      control: 'text',
      description: 'The message displayed inside the alert.',
    },
    type: {
      control: 'select',
      options: ['default', 'success', 'info', 'warning', 'danger'],
      description: 'The type of the alert (affects color).',
    },
    duration: {
      control: 'number',
      description: 'Time in milliseconds before the alert automatically disappears.',
      defaultValue: 200000,
    },
    onClose: {
      action: 'closed',
      description: 'Function called when the alert is closed.',
    },
    className: {
      control: 'text',
      description: 'Additional class name for custom styling.',
    },
    style: {
      control: 'object',
      description: 'Custom inline styles.',
    },
  },
  args: {
    onClose: fn(),
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultAlert: Story = {
  args: {
    message: 'This is an alert!',
    type: 'default',
  },
};

export const Types: Story = {
    args: {
      message: 'Default alert message',
      type: 'info',
    },
    render: (args) => (
      <div>
        <Alert {...args} message="This is a default alert!" type="default" />
        <Alert {...args} message="This is an info alert!" type="info" />
        <Alert {...args} message="This is a success alert!" type="success" />
        <Alert {...args} message="This is a warning alert!" type="warning" />
        <Alert {...args} message="This is a danger alert!" type="danger" />
      </div>
    ),
  };

export const CustomDurationAlert: Story = {
  args: {
    message: 'This alert will disappear after 5 seconds.',
    type: 'success',
    duration: 5000,
  },
};

export const AlertWithCloseButton: Story = {
  args: {
    message: 'Click the close button to dismiss this alert.',
    type: 'info',
  },
};
