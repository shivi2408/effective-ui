import type { Meta, StoryObj } from '@storybook/react';
import Radio from '../Components/Radio/Radio';

const meta = {
  title: 'Components/Radio',
  component: Radio,
  parameters: {
    layout: 'centered', 
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
    disableOption: {
      control: 'object',
      description: 'Array of options to be disabled from the radio group. ',
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
    color: 'primary',
    size: "lg",
    selected: "option2",
    orientation: 'column', 
    disabled: false,
  },
};

export const lgGroup: Story = {
  args: {
    name: 'lg-group',
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
      color: 'default',
      selected: 'option1',
      orientation: 'column', 
      disabled: true,
    },
  };

  export const DisabledOption: Story = {
    args: {
      name: 'default-radio',
      options: [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
        { value: 'option4', label: 'Option 4' },
      ],
      selected: 'option1',
      orientation: 'column', 
      disabled: false,
      disableOption:['option2'],
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
