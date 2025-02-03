import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Tabs from '../Components/Tabs/Tabs';

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: 'object',
      description: 'An array of tab items with `label` and `content`.',
    },
    variant: {
      control: 'select',
      options: ['solid', 'underlined','bordered', 'light'],
      description: 'Visual variant of the tabs.',
      defaultValue: 'light',
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'danger'],
      description: 'Color variant of the tabs.',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the button box.',
    },
    radius: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'full'],
      description: 'The border radius of the tab.',
    },
    isDisabled: {
      control: 'boolean',
      description: 'Disable interaction with tabs.',
    },
    isVertical: {
        control: 'boolean',
        description: 'Vertical orientation of tab list',
      },
    fullWidth: {
      control: 'boolean',
      description: 'If true, the tab-container spans the full width of its container.',
    },
    defaultActiveIndex: {
      control: 'number',
      description: 'The index of the tab that should be active by default.',
      defaultValue: 0,
    },
    onTabChange: {
      action: 'tabChanged',
      description: 'Function called when a tab is clicked.',
    },
  },
  args: {
    defaultActiveIndex: 0,
    onTabChange: (index: number) => console.log(`Tab changed to index: ${index}`),
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { label: 'World', content: <p>Latest world news</p> },
      { label: 'N.Y', content: <p>New York updates</p> },
      { label: 'Business', content: <p>Stock market insights</p> },
      { label: 'Arts', content: <p>Art and culture events</p> },
      { label: 'Science', content: <p>Tech and science discoveries</p> },
    ],
    variant: 'solid',
    color: 'primary',
    size: 'md',
    radius: 'sm',
    isDisabled: false,
    fullWidth: false,
  },
};

export const WithCustomActiveTab: Story = {
  args: {
    items: [
      { label: 'Home', content: <p>Welcome to the homepage</p> },
      { label: 'Profile', content: <p>User profile details</p> },
      { label: 'Settings', content: <p>Adjust your preferences</p> },
    ],
    variant: 'underlined',
    color: 'primary',
    size: 'md',
    radius: 'sm',
    defaultActiveIndex: 1,
  },
};

export const disabledKeys: Story = {
  args: {
    items: [
      { label: 'World', content: <p>Latest world news</p> },
      { label: 'N.Y', content: <p>New York updates</p> },
      { label: 'Business', content: <p>Stock market insights</p> },
      { label: 'Arts', content: <p>Art and culture events</p> },
      { label: 'Science', content: <p>Tech and science discoveries</p> },
    ],
    variant: 'solid',
    color: 'primary',
    size: 'md',
    radius: 'sm',
    isDisabled: false,
    fullWidth: false,
    disabledKeys: ['N.Y', 'Arts'], 
  },
};

export const WithOnTabChange: Story = {
  args: {
    items: [
      { label: 'Overview', content: <p>Dashboard Overview</p> },
      { label: 'Reports', content: <p>Generated Reports</p> },
      { label: 'Analytics', content: <p>Data Analytics</p> },
    ],
    variant: 'bordered',
    color: 'primary',
    size: 'md',
    radius: 'md',
    onTabChange: (index: number) => alert(`Switched to tab index: ${index}`),
  },
};
