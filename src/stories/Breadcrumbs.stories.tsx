import type { Meta, StoryObj } from '@storybook/react';
import Breadcrumbs from '../Components/Breadcrumbs/Breadcrumbs';

const meta = {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: 'object',
      description: 'An array of breadcrumb items with `label` and optional `link`.',
    },
    variant: {
      control: 'select',
      options: ['solid', 'bordered', 'light'],
      description: 'Visual variant of the breadcrumbs.',
      defaultValue: 'light',
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'danger'],
      description: 'Color variant of the button box.',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the button box.',
    },
    underline: {
      control: 'select',
      options: ['none', 'hover', 'always', 'active', 'focus'],
      description: 'Underline style of the link.',
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
    itemsBeforeCollapse: {
      control: 'number',
      description: 'Number of items to show before collapse.',
      defaultValue: 1,
    },
    itemsAfterCollapse: {
      control: 'number',
      description: 'Number of items to show after collapse.',
      defaultValue: 1,
    },
    isDisabled: {
      control: 'boolean',
      description: 'Disable interaction with breadcrumb links.',
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
    itemsBeforeCollapse: 2,
    itemsAfterCollapse: 1,
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
