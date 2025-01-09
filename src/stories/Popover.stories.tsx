import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

import Popover from '../Components/Popover/Popover';
import Button from '../Components/Buttons/Button';

const meta = {
  title: 'Components/Popover', 
  component: Popover,
  parameters: {
    layout: 'centered', 
  },
  tags: ['autodocs'],
  argTypes: {
    trigger: { 
      control: 'select', 
      options: ['click', 'hover'], 
      description: 'The event that triggers the popover.' 
    },
    position: { 
      control: 'select', 
      options: ['top', 'bottom', 'left', 'right'], 
      description: 'Position of the popover relative to the trigger element.' 
    },
    isVisible: { 
      control: 'boolean', 
      description: 'Control the visibility of the popover.' 
    },
    content: { 
      control: 'text', 
      description: 'Content inside the popover.' 
    },
    backdrop: { 
        control: 'select', 
        options: ['transparent', 'blur', 'opaque'], 
        description: 'backdrop effect to the trigger element.' 
      },
  },
  args: {},
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ClickTrigger: Story = {
  args: {
    trigger: 'click',
    position: 'bottom',
    content: 'This is a popover triggered by a click!',
    children: <Button>Click Me</Button>,
    backdrop: 'transparent',
  },
};

export const HoverTrigger: Story = {
  args: {
    trigger: 'hover',
    position: 'top',
    content: 'This is a popover triggered by hover!',
    children: <Button>Hover Over Me</Button>,
    backdrop: 'blur',
  },
};

export const Placement: Story = {
    render: (args) => {
      const positions: Array< 'left' | 'top' | 'bottom' |'right'> = [ 'left','top', 'bottom', 'right'];
  
      return (
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'center' }}>
          {positions.map((position) => (
            <Popover
              key={position}
              {...args}
              position={position}
              content={`Popover positioned at the ${position}.`}
            >
              <Button>{position.charAt(0).toUpperCase() + position.slice(1)}</Button>
            </Popover>
          ))}
        </div>
      );
    },
    args: {
      trigger: 'click',
      content: 'Popover content',
      children: <Button>Default Button</Button>, 
    },
  };
  
export const ControlledVisibility: Story = {
  args: {
    isVisible: true,
    position: 'bottom',
    content: 'This popover is always visible.',
    children: <Button>Always Visible</Button>,
  },
};

export const CustomContent: Story = {
  args: {
    trigger: 'click',
    position: 'bottom',
    content: (
      <div>
        <h4>Custom Popover Content</h4>
        <p>This is some detailed content in the popover.</p>
      </div>
    ),
    children: <Button>Click Me</Button>,
  },
};
