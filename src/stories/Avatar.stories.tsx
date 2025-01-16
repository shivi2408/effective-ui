import type { Meta, StoryObj } from '@storybook/react';
import Avatar from '../Components/Avatar/Avatar'; 

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the avatar.',
    },
    radius: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'full'],
      description: 'The border radius of the avatar.',
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'success', 'warning','danger'],
      description: 'The background color of the avatar.',
    },
    name: {
      control: 'text',
      description: 'The name to generate initials from if no image is provided.',
    },
    initials: {
      control: 'text',
      description: 'Initials to display if no image is provided.',
    },
    isBordered: {
      control: 'boolean',
      description: 'Whether the avatar has a border.',
    },
    src: {
      control: 'text',
      description: 'The URL of the avatar image.',
    },
    alt: {
      control: 'text',
      description: 'The alt text of the avatar image.',
    },
    onClick: {
      action: 'clicked',
      description: 'Function called when the avatar is clicked.',
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'sm',
    color: 'default',
    radius: 'full',
    src: '',
    name: '', 
    isBordered: false,
  },
};

export const WithImage: Story = {
  args: {
    size: 'md',
    color: 'secondary',
    radius: 'full',
    src: 'https://i.pravatar.cc/300?u=a042581f4e29026709d',
    name: '',
    isBordered: false,
  },
};

export const WithBorder: Story = {
  args: {
    size: 'md',
    color: 'primary',
    radius: 'full',
    src: 'https://i.pravatar.cc/300?u=a042581f4e29026709d',
    name: '',
    isBordered: true,
  },
};

export const WithText: Story = {
  args: {
    size: 'md',
    color: 'default',
    radius: 'full',
    src: '',
    name: 'Jane Smith', 
    isBordered: false,
  },
};

export const ClickableAvatar: Story = {
  args: {
    size: 'md',
    color: 'success',
    radius: 'full',
    src: 'https://i.pravatar.cc/300?u=clickable-avatar',
    name: '',
    isBordered: true,
    onClick: () => alert('Avatar clicked!'),
  },
};
