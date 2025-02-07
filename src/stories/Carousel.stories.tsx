import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import Carousel from '../Components/Carousel/Carousel';

const meta = {
  title: 'Components/Carousel',
  component: Carousel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: 'array',
      description: 'Array of carousel items.',
    },
    visibleItems: {
      control: 'number',
      description: 'Number of items visible at a time (max 3).',
    },
    radius: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'full'],
      description: 'Border radius for the button box.',
    },
    carouselWidth: {
      control: 'text',
      description: 'Width of carousel.',
    },
    borderless: {
      control: 'boolean',
      description: 'To remove the border,.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: ['1', '2', '3', '4', '5'],
    visibleItems: 1,
    radius: 'sm',
    carouselWidth: '600px'
  },
};

export const Images: Story = {
    args: {
      items: [
        <img src="https://www.w3schools.com/css/paris.jpg" alt="Image 1" />,
        <img src="https://www.w3schools.com/css/rock600x400.jpg" alt="Image 2" />,
        <img src="https://heroui.com/images/card-example-2.jpeg" alt="Image 3" />,
        <img src="https://www.w3schools.com/css/lights600x400.jpg" alt="Image 4" />,
        <img src="https://www.w3schools.com/css/img_5terre.jpg" alt="Image 5" />,
      ],
      visibleItems: 1,
      radius: 'none',
      borderless: true
    },
  };
