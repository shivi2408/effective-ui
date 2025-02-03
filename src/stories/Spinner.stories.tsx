import type { Meta, StoryObj } from '@storybook/react';
import Spinner from '../Components/Spinner/Spinner';

const meta = {
  title: 'Components/Spinner',
  component: Spinner,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the spinner.',
      defaultValue: 'md',
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'danger'],
      description: 'Color variant of the spinner.',
    },
    variant: {
      control: 'select',
      options: ['solid', 'round', 'ring'],
      description: 'Visual variant of the spinner.',
      defaultValue: 'light',
    },
    label: {
      control: 'text',
      description: 'The label text string to show loading',
      defaultValue: 'Loading',
    },
    showLabel: {
        control: 'boolean',
        description: 'Disable interaction with breadcrumb links.',
      },
  },
  args: {
    size: 'md',
    variant: 'round',
  },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'md',
    color: 'primary',
    variant: 'solid',
    label:'Loading',
    showLabel:true
  },
};

