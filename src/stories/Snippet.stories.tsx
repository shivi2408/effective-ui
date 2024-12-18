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
    code: 'npm install @nextui-org/react',
  },
};

export const WithInlineStyle: Story = {
  args: {
    code: 'npx create-react-app my-app',
    style: { backgroundColor: '#1e1e1e', color: '#fff', padding: '12px', borderRadius: '8px' },
  },
};
