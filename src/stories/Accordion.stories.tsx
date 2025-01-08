import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Accordion from '../Components/Accordion/Accordion'; // Adjust the import path as needed.

const meta = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'The title of the accordion.',
    },
    isOpen: {
      control: 'boolean',
      description: 'Whether the accordion is open by default.',
    },
    isDisabled: {
      control: 'boolean',
      description: 'Disable the accordion.',
    },
    isCompact: {
        control: 'boolean',
        description: 'to make the accordion look compact',
      },
    children: {
      control: 'text',
      description: 'Content inside the accordion.',
    },
    onToggle: {
      action: 'toggled',
      description: 'Function called when the accordion is toggled.',
    },
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Accordion 1',
    isOpen: false,
    children: 'This is the content of the accordion.',
  },
};

export const Open: Story = {
  args: {
    title: 'Accordion 2',
    isOpen: true,
    children: 'This accordion is open by default.',
  },
};

export const Disabled: Story = {
  args: {
    title: 'Accordion ',
    isDisabled: true,
    children: 'This accordion is disabled.',
  },
};

export const MultipleAccordions: Story = {
    args: {
      title: 'Accordion',
      isCompact: false,
      isOpen: false, // Default state for all accordions
    },
    render: (args) => (
      <>
        <Accordion {...args} title="Accordion 1" isOpen={args.isOpen}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Accordion>
        <Accordion {...args} title="Accordion 2" isOpen={args.isOpen}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Accordion>
        <Accordion {...args} title="Accordion 3" isOpen={args.isOpen}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Accordion>
      </>
    ),
  };
  
  
  export const isCompact: Story = {
    args: {
      title: 'Accordion 1', // Add a default title here
      isCompact: true,
    },
    render: (args) => (
      <>
        <Accordion {...args} title="Accordion 1">
          Content of Accordion 1
        </Accordion>
        <Accordion {...args} title="Accordion 2">
          Content of Accordion 2
        </Accordion>
        <Accordion {...args} title="Accordion 3">
          Content of Accordion 3
        </Accordion>
      </>
    ),
  };
  