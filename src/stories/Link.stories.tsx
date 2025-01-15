import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Link from '../Components/Link/Link'; 
import { AiOutlineLink } from 'react-icons/ai';
import { RiExternalLinkLine } from "react-icons/ri";

const meta = {
  title: 'Components/Link', 
  component: Link,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    href: {
      control: 'text',
      description: 'The URL the link points to.',
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'success', 'warning','danger'],
      description: 'The color variant of the link.',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the link.',
    },
    underline: {
      control: 'select',
      options: ['none', 'hover', 'always', 'active', 'focus'],
      description: 'Underline style of the link.',
    },
    isBlock: {
      control: 'boolean',
      description: 'block background on hover',
    },
    isDisabled: {
      control: 'boolean',
      description: 'Disable the link.',
    },
    children: {
      control: 'text',
      description: 'Text or elements inside the link.',
    },
    onClick: {
      action: 'clicked',
      description: 'Function called when the link is clicked.',
    },
    icon: {
        control: 'text',
        description: 'Add anchor icon',
    },
    showAnchorIcon: {
      control: 'boolean',
      description: 'Disable the AnchorIcon.',
    },
  },
  args: {
    onClick: undefined,
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: '#',
    color: 'default',
    size: 'md',
    children: '"First solve the problem. Then, write the code." - Jon Johnson.',
  },
};

export const Underline: Story = {
  args: {
    href: '#',
    color: 'secondary',
    underline: 'hover',
    children: ' Visit out our new Store',
  },
};

export const Disabled: Story = {
  args: {
    href: '#',
    isDisabled: true,
    children: 'Disabled Link',
  },
};

export const WithAnchorIcon: Story = {
    args: {
      href: '#',
      color: 'primary',
      children: "First solve the problem. Then, write the code. - Jon Johnson.",
      icon: <RiExternalLinkLine size={20}  style={{ marginLeft: '8px' }} />,
      showAnchorIcon: true
    },
  };

