import type { Meta, StoryObj } from '@storybook/react';
import Link from '../Components/Link/Link'; 
import { AiOutlineLink } from 'react-icons/ai';
import { RiExternalLinkLine } from "react-icons/ri";

const meta = {
  title: 'Components/Link', // Adjust category name
  component: Link,
  parameters: {
    layout: 'centered', // Centers the link in the Storybook Canvas
  },
  tags: ['autodocs'],
  argTypes: {
    href: {
      control: 'text',
      description: 'The URL the link points to.',
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'success', 'danger'],
      description: 'The color variant of the link.',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the link.',
    },
    isDisabled: {
      control: 'boolean',
      description: 'Disable the link.',
    },
    underline: {
      control: 'select',
      options: ['none', 'hover', 'always', 'active', 'focus'],
      description: 'Underline style of the link.',
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
        control: 'boolean',
        description: 'Toggle to show or hide an anchor icon.',
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
      children: (
        <>
          "First solve the problem. Then, write the code." - Jon Johnson.
          <RiExternalLinkLine size={20}  style={{ marginLeft: '8px' }} />
        </>
      ),
    },
  };

