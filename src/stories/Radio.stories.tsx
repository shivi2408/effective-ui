import type { Meta, StoryObj } from '@storybook/react';
import Radio from '../Components/Radio/Radio'; // Adjust the import path as needed.

const meta = {
  title: 'Components/Radio', // Adjust category name
  component: Radio,
  parameters: {
    layout: 'centered', // Centers the radio in the Storybook Canvas
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'text',
      description: 'The name attribute for the radio group.',
    },
    options: {
      control: 'object',
      description: 'Array of options for the radio group. Each option should have a value and optionally a label.',
    },
    selected: {
      control: 'text',
      description: 'The currently selected value.',
    },
    onChange: {
      action: 'changed',
      description: 'Function called when a radio option is selected.',
    },
    orientation: {
      control: 'radio',
      options: ['row', 'column'],
      description: 'Sets the layout orientation of the radio group.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables all the radio buttons in the group.',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes for styling.',
    },
    style: {
      control: 'object',
      description: 'Inline styles for the radio group.',
    },
  },
  args: {
    onChange: () => {},
  },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'default-radio',
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ],
    selected: 'option1',
    orientation: 'column', 
    disabled: false,
  },
};

export const LargeGroup: Story = {
  args: {
    name: 'large-group',
    options: [
      { value: 'optionA', label: 'Option A' },
      { value: 'optionB', label: 'Option B' },
      { value: 'optionC', label: 'Option C' },
      { value: 'optionD', label: 'Option D' },
      { value: 'optionE', label: 'Option E' },
    ],
    selected: 'optionB',
    orientation: 'column',
    disabled: false,
  },
};

export const Disabled: Story = {
    args: {
      name: 'default-radio',
      options: [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
      ],
      selected: 'option1',
      orientation: 'column', 
      disabled: true,
    },
  };

export const WithoutLabels: Story = {
  args: {
    name: 'no-labels',
    options: [
      { value: '1' },
      { value: '2' },
      { value: '3' },
    ],
    selected: '2',
    orientation: 'column',
    disabled: false,
  },
};

export const RowFlex: Story = {
  args: {
    name: 'custom-styles',
    options: [
      { value: 'opt1', label: 'Custom 1' },
      { value: 'opt2', label: 'Custom 2' },
      { value: 'opt3', label: 'Custom 3' },
    ],
    selected: 'opt1',
    orientation: 'row', 
    style: {
      gap: '15px',
    },
    disabled: false,
  },
};
