import type { Meta, StoryObj } from '@storybook/react';
import Snippet, { SnippetProps } from '../Components/Snippet/Snippet'; 

const meta: Meta<SnippetProps> = {
  title: 'Components/Snippet', 
  component: Snippet,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [ 'flat' ,'solid' ,  'bordered' , 'shadow' ,],
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
    symbol: {
      control: 'text',
      description: 'The code symbol to display.',
    },
    code: {
      control: 'text',
      description: 'The code snippet text to display.',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes for custom styling.',
    },
    style: {
      control: 'object',
      description: 'Inline styles for the component.',
    },
  },
};

export default meta;

type Story = StoryObj<SnippetProps>;

export const Default: Story = {
  args: {
    variant: 'flat',
    color: 'default',
    size:'md',
    radius: 'md',
    symbol: '$',
    code: 'npm install @nextui-org/react',
  },
};

export const WithInlineStyle: Story = {
  args: {
    variant: 'solid',
    code: 'npx create-react-app my-app',
    style: { backgroundColor: '#1e1e1e', color: '#fff', padding: '12px', borderRadius: '8px' },
  },
};
