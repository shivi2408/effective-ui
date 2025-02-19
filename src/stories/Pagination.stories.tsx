import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Pagination from '../Components/Pagination/Pagination';

const meta = {
  title: 'Components/Pagination',
  component: Pagination,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['light' , 'flat', 'faded' , 'bordered' , ],
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
    total: {
      control: 'number',
      description: 'Total number of pages.',
    },
    siblings: {
      control: 'number',
      description: 'Number of sibling pages to show around the current page.',
    },
    boundaries: {
      control: 'number',
      description: 'Number of boundary pages to show at the beginning and end.',
    },
    initialPage: {
      control: 'number',
      description: 'Initial active page when the component is first rendered.',
    },
    disableCursorAnimation: {
      control: 'boolean',
      description: 'Disables cursor hover animations.',
    },
    isCompact: {
      control: 'boolean',
      description: 'Displays a more compact version of the pagination.',
    },
    showControls: {
      control: 'boolean',
      description: 'Shows previous and next controls.',
    },
    isDisabled: {
      control: 'boolean',
      description: 'Disables pagination interaction.',
    },
    showShadow: {
      control: 'boolean',
      description: 'Adds shadow effect around pagination.',
    },
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'flat',
    color: 'default',
    radius: 'md',
    size: 'md',
    total: 10,
    initialPage: 2,
    siblings: 1,
    boundaries: 1,
    disableCursorAnimation: false,
    isCompact: false,
    showControls: true,
    isDisabled: false,
    showShadow: false,
  },
};

export const Compact: Story = {
  args: {
    variant: 'flat',
    color: 'default',
    radius: 'md',
    size: 'md',
    total: 15,
    initialPage: 1,
    siblings: 1,
    boundaries: 1,
    isCompact: true,
    showControls: true,
  },
};

export const Disabled: Story = {
  args: {
    variant: 'flat',
    color: 'default',
    radius: 'md',
    size: 'md',
    total: 8,
    initialPage: 1,
    siblings: 1,
    boundaries: 1,
    isDisabled: true,
    showControls: true,
  },
};

export const ShadowEffect: Story = {
  args: {
    variant: 'flat',
    color: 'default',
    radius: 'md',
    size: 'md',
    total: 6,
    initialPage: 1,
    siblings: 1,
    boundaries: 1,
    showShadow: true,
    showControls: true,
  },
};
