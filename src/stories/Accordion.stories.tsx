import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Accordion from '../Components/Accordion/Accordion';

const meta = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'shadow', 'bordered', 'splitted'],
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
    open: {
      control: 'boolean',
      description: 'Whether the accordion is open by default.',
    },
    isDisabled: {
      control: 'boolean',
      description: 'Disable the accordion.',
    },
    isCompact: {
      control: 'boolean',
      description: 'To make the accordion look compact.',
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
    variant: 'default',
    color: 'default',
    radius: 'md',
    size: 'md',
  },
  render: (args) => (
    <Accordion {...args}>
      <div title="Accordion 1">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </div>
    </Accordion>
  ),
};

export const Open: Story = {
  args: {
    variant: 'default',
    color: 'primary',
    radius: 'none',
    size: 'md',
    open:true,
  },
  render: (args) => (
    <Accordion {...args}>
      <div title="Accordion 2">
        This accordion is open by default.
      </div>
    </Accordion>
  ),
};

export const Disabled: Story = {
  args: {
    variant: 'bordered',
    radius: 'md',
    size: 'md',
    isDisabled: true,
  },
  render: (args) => (
    <Accordion {...args}>
      <div title="Accordion">
        This accordion is disabled.
      </div>
    </Accordion>
  ),
};

export const MultipleAccordions: Story = {
  args: {
    variant: 'shadow',
    radius: 'sm',
    size: 'md',
  },
  render: (args) => (
    <>
      <Accordion {...args}>
        <div title="Accordion 1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
        <div title="Accordion 2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
        <div title="Accordion 3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
      </Accordion>
    </>
  ),
};

export const IsCompact: Story = {
  args: {
    color: 'primary',
    radius: 'none',
    size: 'md',
    isCompact: true,
  },
  render: (args) => (
    <>
      <Accordion {...args}>
        <div title="Accordion 1">
          Content of Accordion 1
        </div>
        <div title="Accordion 2">
          Content of Accordion 2
        </div>
        <div title="Accordion 3">
          Content of Accordion 3
        </div>
      </Accordion>
    </>
  ),
};
