import type { Meta, StoryObj } from '@storybook/react';
import Image from '../Components/Image/Image'; 

const meta = {
  title: 'Components/Image', 
  component: Image,
  parameters: {
    layout: 'centered', 
  },
  tags: ['autodocs'],
  argTypes: {
    width: {
      control: 'number',
      description: 'Width of the image.',
    },
    radius: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'full'],
      description: 'Border radius for the image.',
    },
    shadow: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
      description: 'Box shadow effect.',
    },
    isZoomed: {
      control: 'boolean',
      description: 'Enable zoom effect on hover.',
    },
    isBlurred: {
      control: 'boolean',
      description: 'Apply a blur effect.',
    },
    src: {
      control: 'text',
      description: 'Source path of the image.',
    },
    alt: {
      control: 'text',
      description: 'Alternative text for the image.',
    },
    disableSkeleton: {
      control: 'boolean',
      description: 'Disable skeleton loading animation.',
    },
    disableAnimation: {
      control: 'boolean',
      description: 'Disable hover or transition animations.',
    },
  },
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: 400,
    radius: 'md',
    shadow: 'none',
    isZoomed: false,
    isBlurred: false,
    src: 'https://www.w3schools.com/css/paris.jpg',
    alt: 'Default Image',
    disableSkeleton: false,
    disableAnimation: false,
  },
};

export const RoundedShadowZoom: Story = {
  args: {
    width: 400,
    radius: 'full',
    shadow: 'md',
    isZoomed: true,
    isBlurred: false,
    src: 'https://www.w3schools.com/css/rock600x400.jpg',
    alt: 'Rounded Shadow Zoom Image',
    disableSkeleton: false,
    disableAnimation: false,
  },
};

export const BlurredZoom: Story = {
  args: {
    width: 400,
    radius: 'lg',
    shadow: 'none',
    isZoomed: true,
    isBlurred: true,
    src: 'https://www.w3schools.com/css/img_5terre.jpg',
    alt: 'Blurred Image',
    disableSkeleton: false,
    disableAnimation: false,
  },
};

export const Skeleton: Story = {
    args: {
      width: 400,
      radius: 'md',
      shadow: 'none',
      isZoomed: false,
      isBlurred: false,
      src: 'https://www.w3schools.com/css/paris.jpg',
      alt: 'Skeleton Image',
      disableSkeleton: false,
      disableAnimation: false,
    },
  };