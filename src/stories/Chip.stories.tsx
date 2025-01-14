import type { Meta, StoryObj } from '@storybook/react';
import  Chip  from '../Components/Chip/Chip'; 

const meta = {
  title: 'Components/Chip', 
  component: Chip,
  parameters: {
    layout: 'padded', 
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid' ,'light' , 'shadow' , 'ghost' , 'flat', 'faded' , 'outlined', 'underlined' , 'dot'],
      description: 'The variant of the chip.',
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'success', 'warning','danger'],
      description: 'The color variant of the chip.',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the chip.',
    },
    radius: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'full'],
      description: 'The border radius of the chip.',
    },
    isDisabled: {
      control: 'boolean',
      description: 'Disable the chip.',
    },
    children: {
      control: 'text',
      description: 'Content inside the chip.',
    },
    icon: { 
      control: 'text',
      description: 'Content or icon at the end of the Chip.',
    },
    iconPosition: { 
      control: 'select', 
      options: ['left', 'right'], 
      description: 'Position of the icon relative to the Chip label.' 
    },
  },
  args: {
    variant: 'solid',
    size: 'md',
    color: 'default',
  },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'flat',
    size: 'lg',
    children: 'Chip',
    
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    color: 'primary',
    children: 'Outlined',
  },
};

export const WithStartIcon: Story = {
  args: {
    color: 'success',
    variant: 'flat',
    icon: '🌟',
    iconPosition: 'left',
    children: 'Chip',
  },
};

export const WithEndIcon: Story = {
  args: {
    color: 'danger',
    variant: 'flat',
    icon: '🎉',
    iconPosition: 'right',
    children: 'Chip',
  },
};


