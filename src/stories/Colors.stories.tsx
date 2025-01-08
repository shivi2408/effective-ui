import type { Meta, StoryObj } from '@storybook/react';
import Colors from '../Components/Colors/Colors'; 
import React from 'react';

const meta = {
  title: 'Foundations/Colors', 
  component: Colors,
  parameters: {
    // layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'color',
      description: 'Color Variants (e.g., primary, secondary, etc.)',
    },
  },
} satisfies Meta<typeof Colors>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CommonColors: Story = {
  args: {
    variant: 'app', 
  },
  parameters: {
    story: {
      name: 'Common Colors',
    },
  },
  render: (args) => (
    <>
      {/* Rendering all color variants under one group */}
      <Colors variant="app" />
      <Colors variant="blue" />
      <Colors variant="purple" />
      <Colors variant="green" />
      <Colors variant="red" />
      <Colors variant="pink" />
      <Colors variant="yellow" />
      <Colors variant="cyan" />
    </>
  ),
};



export const SemanticColors: Story = {
  args: {
    variant: 'app', 
  },
  parameters: {
    story: {
      name: 'Semantic Colors',
    },
  },
  render: (args) => (
    <>
      {/* Rendering all color variants under one group */}
      <Colors variant="layout" />
      <Colors variant="content" />
      <Colors variant="base" />
      <Colors variant="default" />
      <Colors variant="primary" />
      <Colors variant="secondary" />
      <Colors variant="success" />
      <Colors variant="warning" />
      <Colors variant="danger" />
    </>
  ),
};
