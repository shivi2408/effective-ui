import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

import Tooltip from '../Components/Tooltip/Tooltip';
import Button from '../Components/Buttons/Button';

const meta = {
  title: 'Components/Tooltip', 
  component: Tooltip,
  parameters: {
    layout: 'centered', 
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid' , 'flat', 'faded' , 'bordered', ],
      description: 'Style variant of the button box.',
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'success', 'warning','danger'],
      description: 'Color variant of the button box.',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the button box.',
    },
    radius: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'full'],
      description: 'Border radius for the button box.',
    },
    position: { 
      control: 'select', 
      options: ['top', 'bottom', 'left', 'right'], 
      description: 'Position of the popover relative to the trigger element.' 
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
    delay: { 
        control: 'number', 
        description: 'Content inside the popover.' 
    },
    arrow: { 
      control: 'boolean', 
      description: 'Control the visibility of the arrow.' 
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the tooltip making it non-interactive.',
    },
    defaultOpen: {
      control: 'boolean',
      description: 'By default open the tooltip',
    },
  },
  args: {},
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
  args: {
    variant: 'solid',
    color: 'primary',
    radius: 'lg',
    size: 'sm',
    position: 'top',
    content: 'This is a popover triggered by hover!',
    children: <Button>Hover Over Me</Button>,
    backdrop: 'transparent',
  },
};

export const Placement: Story = {
    render: (args) => {
      const positions: Array< 'top' |'left' |'right' | 'bottom'> = [ 'top', 'left', 'right', 'bottom'];
  
      return (
        <div style={{ display: 'flex', flexDirection:'column' , gap: '1rem', justifyContent: 'center', alignItems: 'center' }}>
          {positions.map((position) => (
            <Tooltip
              key={position}
              {...args}
              position={position}
              content={`Popover positioned at the ${position}.`}
            >
              <Button>{position.charAt(0).toUpperCase() + position.slice(1)}</Button>
            </Tooltip>
          ))}
        </div>
      );
    },
    args: {
        content: 'Popover content',
        children: <Button>Default Button</Button>, 
        variant: 'solid',
        color: 'primary',
        radius: 'md',
        size: 'sm',
    },
  };
  
export const Delay: Story = {
  args: {
    variant: 'solid',
    color: 'default',
    radius: 'md',
    size: 'md',
    position: 'bottom',
    content: 'This popover will be visible after 2sec.',
    children: <Button>Delay Open(2sec)</Button>,
    delay:2,
  },
};

export const OpenTooltip: Story = {
  args: {
    variant: 'solid',
    color: 'default',
    radius: 'md',
    size: 'md',
    position: 'bottom',
    content: (
      <div>
        <h4 style={{margin:'4px 0'}}>Custom Tooltip Content</h4>
        This is some detailed content in the tooltip.
      </div>
    ),
    children: <Button>Click Me</Button>,
    defaultOpen:true
  },
};
