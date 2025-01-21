import type { Meta, StoryObj } from '@storybook/react';
import Table, { TableColumn } from '../Components/Table/Table'; 

const meta = {
  title: 'Components/Table', 
  component: Table,
  parameters: {
    layout: 'padded',
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
    shadow: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
      description: 'Sets the box-shadow of the table.',
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'success', 'warning','danger'],
      description: 'Color variant of the button box.',
    },
    radius: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
      description: 'Sets the border radius of the table.',
    },
    hideHeader: {
      control: 'boolean',
      description: 'Hide header from the table.',
    },
    cellPadding: {
      control: 'text',
      description: 'Custom padding for table cells.',
      defaultValue: '8px 12px',
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
    shadow: 'md',
    color: 'default',
    radius: 'md',
    hideHeader: false,
    striped: false,
    bordered: false,
    cellPadding: '12px', 
  },
};

export const Striped: Story = {
  args: {
    columns,
    data,
    color: 'default',
    radius: 'md',
    striped: true,
    bordered: true,
    cellPadding: '10px 15px',
  },
};

export const EmptyState: Story = { 
    args: {
      columns,
      data: [], 
      color: 'default',
      radius: 'none',
      striped: false,
      bordered: true,
      cellPadding: '12px', 
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
  },
};

