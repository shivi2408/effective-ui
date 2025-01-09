import type { Meta, StoryObj } from '@storybook/react';
import Breadcrumbs from '../Components/Breadcrumbs/Breadcrumbs'; 

const meta = {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    layout: 'centered', 
  },
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: 'object',
      description: 'An array of breadcrumb items with `label` and optional `link`.',
    },
    separator: {
      control: 'text',
      description: 'The separator string between breadcrumb items.',
      defaultValue: '>',
    },
    maxItems: {
      control: 'number',
      description: 'The maximum number of items to display, with "..." in the middle if truncated.',
    },
    isDisabled: {
      control: 'boolean',
      description: 'Disable interaction with breadcrumb links.',
    },
    variant: {
      control: 'select',
      options: ['light', 'solid', 'bordered'],
      description: 'Visual variant of the breadcrumbs.',
      defaultValue: 'light',
    },
    onClick: {
      action: 'clicked',
      description: 'Function called when a breadcrumb is clicked.',
    },
  },
  args: {
    separator: '>',
    variant: 'light',
    onClick: (label: string) => console.log(`Breadcrumb clicked: ${label}`),
  },
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { label: 'Home', link: '/' },
      { label: 'Category', link: '/category' },
      { label: 'Subcategory', link: '/subcategory' },
      { label: 'Item', link: '/item' },
    ],
    separator: '>',
    variant: 'light',
  },
};

export const WithCustomSeparator: Story = {
  args: {
    items: [
      { label: 'Home', link: '/' },
      { label: 'Category', link: '/category' },
      { label: 'Subcategory', link: '/subcategory' },
      { label: 'Item', link: '/item' },
    ],
    separator: '/',
    variant: 'light',
  },
};

export const MaxItems: Story = {
  args: {
    items: [
      { label: 'Home', link: '/' },
      { label: 'Category', link: '/category' },
      { label: 'Subcategory', link: '/subcategory' },
      { label: 'Item', link: '/item' },
      { label: 'Extra', link: '/extra' },
    ],
    maxItems: 3,
    variant: 'light',
  },
};

export const Disabled: Story = {
  args: {
    items: [
      { label: 'Home', link: '/' },
      { label: 'Category', link: '/category' },
      { label: 'Subcategory', link: '/subcategory' },
      { label: 'Item', link: '/item' },
    ],
    isDisabled: true,
    variant: 'light',
  },
};

export const SolidVariant: Story = {
  args: {
    items: [
      { label: 'Home', link: '/' },
      { label: 'Category', link: '/category' },
      { label: 'Subcategory', link: '/subcategory' },
      { label: 'Item', link: '/item' },
    ],
    variant: 'solid',
  },
};
