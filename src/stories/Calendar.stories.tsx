import type { Meta, StoryObj } from '@storybook/react';
import Calendar from '../Components/Calendar/Calendar'; 

const meta = {
  title: 'Components/Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'success', 'warning','danger', 'theme'], 
      description: 'The color theme of the calendar.',
    },
    showShadow: {
      control: 'boolean',
      description: 'Show shadow around the calendar.',
    },
    hideDisabledDates: {
      control: 'boolean',
      description: 'Hide disabled or unavailable dates.',
    },
    showMonthAndYearPickers: {
      control: 'boolean',
      description: 'Show dropdowns for month and year selection.',
    },
    visibleMonths: {
      control: 'number',
      description: 'Number of months to display.',
    },
    weekdayStyle: {
      control: 'select',
      options: ['narrow', 'short', 'long'],
      description: 'Style of weekdays (narrow, short, or long).',
    },
    disableAnimation: {
      control: 'boolean',
      description: 'Disable animations for calendar transitions.',
    },
  },
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: 'default',
    showShadow: true,
    hideDisabledDates: false,
    showMonthAndYearPickers: true,
    visibleMonths: 1,
    weekdayStyle: 'narrow',
    disableAnimation: false,
  },
};

export const WithoutShadow: Story = {
  args: {
    color: 'theme',
    showShadow: false,
    visibleMonths: 1,
    weekdayStyle: 'short',
    disableAnimation: false,
  },
};

export const MultiMonthView: Story = {
  args: {
    color: 'theme',
    showShadow: true,
    visibleMonths: 2,
    showMonthAndYearPickers: true,
    hideDisabledDates: false,
    weekdayStyle: 'short',
    disableAnimation: true,
  },
};

export const DisabledAnimations: Story = {
  args: {
    color: 'default',
    disableAnimation: true,
    visibleMonths: 1,
    showMonthAndYearPickers: false,
    showShadow: false,
    hideDisabledDates: true,
    weekdayStyle: 'short',
  },
};
