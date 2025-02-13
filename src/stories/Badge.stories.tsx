import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Badge from '../Components/Badge/Badge';
import Avatar from '../Components/Avatar/Avatar';
import { FiBell } from 'react-icons/fi';
import Button from '../Components/Buttons/Button';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'flat', 'faded','shadow'],
      description: 'Style variant of the badge.',
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'danger'],
      description: 'Color variant of the badge.',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the badge.',
    },
    radius: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'full'],
      description: 'Border radius for the button box.',
    },
    placement: {
      control: 'select',
      options: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
      description: 'Badge position relative to the parent element.',
    },
    showOutline: {
      control: 'boolean',
      description: 'Display an outline around the badge.',
    },
    isInvisible: {
      control: 'boolean',
      description: 'If true, the badge will be hidden.',
    },
    content: {
      control: 'text',
      description: 'Content inside the badge.',
    },
    disableAnimation: {
      control: 'boolean',
      description: 'Disable animation effects on the badge.',
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'solid',
    color: 'primary',
    size: 'md',
    radius: 'full',
    placement: 'top-right',
    content: '',
    trigger: <FiBell size={26} />,
  },
};

export const withContent: Story = {
  args: {
    variant: 'solid',
    color: 'primary',
    size: 'md',
    radius: 'full',
    placement: 'top-right',
    content: '5',
    trigger: <Avatar color="default" name="" radius="lg" size="md" src="" />
  },
};

export const withAvatar: Story = {
    args: {
      variant: 'solid',
      color: 'primary',
      size: 'md',
      radius: 'full',
      placement: 'top-right',
      content: '3',
      trigger: <Avatar color="default" name="" radius="md" size="md" src="https://i.pravatar.cc/300?u=a042581f4e29026709d" />
    },
  };

export const withButton: Story = {
    args: {
      variant: 'solid',
      color: 'primary',
      size: 'md',
      radius: 'full',
      placement: 'top-right',
      content: '3',
      trigger: <Button variant='bordered' size='lg' radius='md' color='success'>Button</Button>
    },
  };