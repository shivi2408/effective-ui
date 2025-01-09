import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Dropdown from '../Components/Dropdown/Dropdown'; 
import { FaFile, FaLink, FaEdit, FaTrash } from 'react-icons/fa'; 

export default {
    title: 'Components/Dropdown',
    component: Dropdown,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
      options: {
        control: { type: 'object' }, 
        description: 'Array of options for the dropdown menu.',
        defaultValue: [
          { label: 'New file', value: 'new_file', icon: <FaFile /> },
          { label: 'Copy link', value: 'copy_link', icon: <FaLink /> },
          { label: 'Edit file', value: 'edit_file', icon: <FaEdit /> },
          { label: 'Delete file', value: 'delete_file', danger: true, icon: <FaTrash /> },
        ],
      },
      triggerLabel: {
        control: { type: 'text' },
        description: 'Label for the dropdown trigger button.',
        defaultValue: 'Trigger',
      },
      placement: {
        control: { type: 'select' },
        description: 'Placement of the dropdown menu relative to the trigger.',
        options: ['top', 'bottom', 'left', 'right'],
        defaultValue: 'bottom',
      },
      multipleSelection: {
        control: { type: 'boolean' },
        description: 'Allow multiple selections.',
        defaultValue: false,
      },
      disabledKeys: {
        control: { type: 'text' }, 
        description: 'Comma-separated list of disabled keys.',
        defaultValue: '',
      },
      withAnimation: {
        control: { type: 'boolean' },
        description: 'Toggle dropdown animation.',
        defaultValue: true,
      },
    },
  } as Meta<typeof Dropdown>;

  type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    options: [
      { label: 'New file', value: 'new_file', icon: <FaFile /> },
      { label: 'Copy link', value: 'copy_link', icon: <FaLink /> },
      { label: 'Edit file', value: 'edit_file', icon: <FaEdit /> },
      { label: 'Delete file', value: 'delete_file', danger: true, icon: <FaTrash /> },
    ],
    triggerLabel: 'Trigger',
    placement: 'bottom',
    multipleSelection: false,
    disabledKeys: [],
    withAnimation: true,
  },
};

export const ManyOptions: Story = {
  args: {
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
      { label: 'Option 4', value: 'option4' },
      { label: 'Option 5', value: 'option5' },
      { label: 'Option 6', value: 'option6' },
    ],
    triggerLabel: 'Dropdown with Many Options',
    placement: 'right',
    multipleSelection: false,
    disabledKeys: [],
    withAnimation: true,
  },
};

export const DisabledState: Story = {
  args: {
    options: [],
    triggerLabel: 'Disabled Dropdown',
    placement: 'bottom',
    multipleSelection: false,
    disabledKeys: [],
    withAnimation: false,
  },
};

export const MultiSelect: Story = {
  args: {
    options: [
      { label: 'Option 1', value: 'option1', icon: <FaFile /> },
      { label: 'Option 2', value: 'option2', icon: <FaLink /> },
      { label: 'Option 3', value: 'option3', icon: <FaEdit /> },
      { label: 'Option 4', value: 'option4', icon: <FaTrash /> },
    ],
    triggerLabel: 'Multi Select Dropdown',
    placement: 'bottom',
    multipleSelection: true,
    disabledKeys: [],
    withAnimation: true,
  },
};

export const DisabledOptions: Story = {
  args: {
    options: [
      { label: 'New file', value: 'new_file' },
      { label: 'Copy link', value: 'copy_link', disabled: true },
      { label: 'Edit file', value: 'edit_file' },
      { label: 'Delete file', value: 'delete_file', danger: true },
    ],
    triggerLabel: 'Dropdown with Disabled Options',
    placement: 'bottom',
    multipleSelection: false,
    disabledKeys: ['copy_link'],
    withAnimation: true,
  },
};
