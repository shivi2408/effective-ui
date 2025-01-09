import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import DateInput from '../Components/DateInput/DateInput'; // Adjust the import path as needed.

const meta: Meta<typeof DateInput> = {
  title: 'Components/DateInput',
  component: DateInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label for the date input field.',
    },
    variant: {
      control: 'select',
      options: ['none', 'flat', 'outlined'],
      description: 'The variant style of the date input.',
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'success', 'danger'],
      description: 'The color variant of the date input.',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the date input.',
    },
    radius: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
      description: 'The border radius of the date input.',
    },
    labelPlacement: {
      control: 'select',
      options: ['inside', 'outside'],
      description: 'Placement of the label.',
    },
    isDisabled: {
      control: 'boolean',
      description: 'Disable the date input.',
    },
    validationBehavior: {
      control: 'select',
      options: ['onBlur', 'onChange', 'onSubmit'],
      description: 'When to trigger validation.',
    },
    value: {
      control: 'object',
      description: 'The date value in { dd, mm, yyyy } format.',
    },
    onChange: {
      action: 'changed',
      description: 'Callback when the date input changes.',
    },
    showCalendarButton: {
      control: 'boolean',
      description: 'Show the calendar button for date picking.',
    },
  },
  args: {
    onChange: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: '',
    variant: 'none',
    color: 'default',
    size: 'md',
    radius: 'sm',
    labelPlacement: 'inside',
    isDisabled: false,
    value: { dd: '', mm: '', yyyy: '' },
  },
};

export const Outlined: Story = {
  args: {
    label: 'Date',
    variant: 'outlined',
    color: 'primary',
    size: 'md',
    labelPlacement: 'outside',
    value: { dd: '', mm: '', yyyy: '' },
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled date',
    variant: 'flat',
    color: 'secondary',
    size: 'sm',
    isDisabled: true,
    value: { dd: '', mm: '', yyyy: '' },
  },
};

export const WithLabelOutside: Story = {
  args: {
    label: 'Birth date',
    variant: 'outlined',
    color: 'default',
    size: 'lg',
    labelPlacement: 'outside',
    value: { dd: '', mm: '', yyyy: '' },
  },
};

export const WithCalendarButton: Story = {
  args: {
    label: 'Pick Date',
    variant: 'outlined',
    color: 'primary',
    size: 'md',
    labelPlacement: 'outside',
    value: { dd: '', mm: '', yyyy: '' },
    showCalendarButton: true,
  },
};