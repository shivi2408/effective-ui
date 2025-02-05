import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Skeleton from '../Components/Skeleton/Skeleton';
import '../Components/Skeleton/Styles/skeleton.css';

const meta = {
  title: 'Components/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    width: {
      control: 'text',
      description: 'Width of the skeleton placeholder.',
    },
    height: {
      control: 'text',
      description: 'Height of the skeleton placeholder.',
    },
    variant: {
      control: 'select',
      options: ['text', 'circle', 'rect'],
      description: 'Shape variant of the skeleton.',
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
    animation: {
      control: 'select',
      options: ['pulse', 'wave', 'none'],
      description: 'Animation type for the skeleton loading effect.',
    },
  },
  args: {
    width: '40%',
    variant: 'text',
    color: 'default',
    radius: 'sm',
    animation: 'wave',
  },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (args) => (
            <div style={{display: 'flex', gap: '0.5rem' ,flexDirection: 'column' }}>
                <Skeleton {...args} width="30%" variant="text" />
                <Skeleton {...args} width="20%" variant="text"  />
            </div>
      ),
      args: {
          radius: 'sm',
          animation:'wave'
        },
};

export const Card: Story = {
    render: (args) => (
      <div style={{ width: '180px',display: 'flex', gap: '1rem',flexDirection: 'column' ,padding: '16px', background: 'var(--effectiveui-hover-background-default)', borderRadius: '12px', boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px' }}>
        <Skeleton {...args} width="100%" height="100px" variant="rect"  />
        <Skeleton {...args} width="40%" height="12px" variant="text" />
        <Skeleton {...args} width="60%" height="12px" variant="text" />
        <Skeleton {...args} width="50%" height="12px" variant="text"  />
      </div>
    ),
    args: {
        radius: 'sm',
        animation:'wave'
      },
  };

export const CircleSkeleton: Story = {
  args: {
    width: '50px',
    height: '50px',
    radius: 'full',
    variant: 'circle',
    animation: 'pulse',
  },
};


export const NoAnimation: Story = {
    render: (args) => (
      <div style={{ width: '180px',display: 'flex', gap: '1rem',flexDirection: 'column' ,padding: '16px', background: 'var(--effectiveui-hover-background-default)', borderRadius: '12px', boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px' }}>
        <Skeleton {...args} width="100%" height="100px" variant="rect"  />
        <Skeleton {...args} width="80%" height="12px" variant="text" />
        <Skeleton {...args} width="60%" height="12px" variant="text" />
        <Skeleton {...args} width="50%" height="12px" variant="text"  />
      </div>
    ),
    args: {
        radius: 'sm',
        animation:'none'
      },
  };


