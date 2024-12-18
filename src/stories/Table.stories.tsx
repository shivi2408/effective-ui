import type { Meta, StoryObj } from '@storybook/react';
import Table, { TableColumn } from '../Components/Table/Table'; // Adjust the import path as needed.

const meta = {
  title: 'Components/Table', // Adjust category name
  component: Table,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    striped: {
      control: 'boolean',
      description: 'Applies striped styles to alternate rows.',
    },
    bordered: {
      control: 'boolean',
      description: 'Applies border styles to the table.',
    },
    radius: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
      description: 'Sets the border radius of the table.',
    },
    cellPadding: {
      control: 'text',
      description: 'Custom padding for table cells.',
      defaultValue: '8px 12px', // Default padding
    },
    onRowClick: {
      action: 'rowClicked',
      description: 'Function called when a row is clicked.',
    },
    style: {
      control: 'object',
      description: 'Inline styles for the table container.',
    },
    className: {
      control: 'text',
      description: 'Custom class for the table.',
    },
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

const columns: TableColumn[] = [
  { key: 'id', title: 'ID', width: '10%', align: 'center' },
  { key: 'name', title: 'Name', align: 'left' },
  { key: 'age', title: 'Age', align: 'center' },
  { key: 'status', title: 'Status', align: 'center' },
];

const data = [
  { id: 1, name: 'John Doe', age: 28, status: 'Active' },
  { id: 2, name: 'Jane Smith', age: 34, status: 'Paused' },
  { id: 3, name: 'Sam Wilson', age: 23, status: 'Vacation' },
  { id: 4, name: 'Zoey Lang', age: 32, status: 'Active' },
];

export const Default: Story = {
  args: {
    columns,
    data,
    striped: false,
    bordered: true,
    radius: 'none',
    cellPadding: '12px', // Default padding
  },
};

export const Striped: Story = {
  args: {
    columns,
    data,
    striped: true,
    bordered: true,
    radius: 'sm',
    cellPadding: '10px 15px', // Custom padding
  },
};

export const EmptyState: Story = { 
    args: {
      columns, // Table columns
      data: [], // Empty data array, no rows
      striped: false,
      bordered: true,
      radius: 'none',
      cellPadding: '12px', // Default padding
    },
  };

export const ClickableRows: Story = {
  args: {
    columns,
    data,
    striped: true,
    bordered: true,
    onRowClick: (record) => alert(`Row clicked: ${record.name}`),
    radius: 'md',
    cellPadding: '8px 12px', // Default padding
  },
};

export const LargeRadius: Story = {
  args: {
    columns,
    data,
    striped: true,
    bordered: true,
    radius: 'lg',
    cellPadding: '12px 16px', // Custom padding
  },
};
