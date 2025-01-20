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
    variant: {
      control: 'select',
      options: ['solid' , 'flat', 'faded' , 'bordered'],
      description: 'Style variant of the button box.',
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'success', 'warning','danger'],
      description: 'Color variant of the button box.',
    },
    radius: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'full'],
      description: 'Border radius for the button box.',
    },
    hideIcon: {
      control: 'boolean',
      description: 'Remove alert icon',
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
    message: 'This is an alert with a message!',
    color: 'default',
    radius: 'md',
  },
};

export const Types: Story = {
    args: {
      message: 'Default alert message',
      variant: 'flat',
      color: 'primary',
      radius: 'md',
    },
    render: (args) => (
      <div style={{display:"flex", flexDirection:"column",gap:"1em"}}>
        <Alert {...args} message="This is a default alert!" color="default" />
        <Alert {...args} message="This is an info alert!" color="primary" />
        <Alert {...args} message="This is an info alert!" color="secondary" />
        <Alert {...args} message="This is a success alert!" color="success" />
        <Alert {...args} message="This is a warning alert!" color="warning" />
        <Alert {...args} message="This is a danger alert!" color="danger" />
      </div>
    ),
  };

export const CustomDurationAlert: Story = {
  args: {
    message: 'This alert will disappear after 5 seconds.',
    color: 'success',
    radius: 'md',
    duration: 5000,
  },
};

export const AlertWithCloseButton: Story = {
  args: {
    message: 'Click the close button to dismiss this alert.',
    variant: 'faded',
    color: 'primary',
    radius: 'md',
  },
};
