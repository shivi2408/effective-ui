import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Dropdown from '../Components/Dropdown/Dropdown'; 
import Button from '../Components/Buttons/Button';
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
      variant: {
        control: 'select',
        options: ['solid' ,'light' , 'shadow' , 'flat', 'faded' , 'bordered' , ],
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
      placement: {
        control: { type: 'select' },
        description: 'Placement of the dropdown menu relative to the trigger.',
        options: ['top', 'bottom', 'left', 'right'],
        defaultValue: 'bottom',
      },
      backdrop: { 
        control: 'select', 
        options: ['transparent', 'blur', 'opaque'], 
        description: 'backdrop effect to the trigger element.' 
      },
      disabled: {
        control: { type: 'boolean' },
        description: 'disable trigger.',
        defaultValue: false,
      },
      defaultOpen: { 
        control: 'boolean', 
        description: 'Control the visibility of the dropdown.' 
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
    variant: 'flat',
    color: 'default',
    radius: 'md',
    size: 'md',
    triggerLabel: <Button>Trigger</Button>,
    placement: 'bottom',
    multipleSelection: false,
    defaultOpen: false,
    disabledKeys: [],
    withAnimation: true,
  },
};


export const DisabledState: Story = {
  args: {
    options: [],
    variant: 'flat',
    color: 'default',
    radius: 'md',
    size: 'md',
    triggerLabel: <Button>Disabled Dropdown</Button>,
    placement: 'bottom',
    disabled: true,
    multipleSelection: false,
    disabledKeys: [],
    withAnimation: false,
  },
};

export const MultiSelect: Story = {
  args: {
    options: [
      { label: 'Option 1', value: 'option1', icon: <FaFile /> ,},
      { label: 'Option 2', value: 'option2', icon: <FaLink /> },
      { label: 'Option 3', value: 'option3', icon: <FaEdit /> },
      { label: 'Option 4', value: 'option4', icon: <FaTrash /> },
    ],
    variant: 'flat',
    color: 'default',
    radius: 'md',
    size: 'md',
    triggerLabel:  <Button>Multi Select Dropdown</Button>,
    placement: 'bottom',
    multipleSelection: true,
    disabledKeys: [],
    withAnimation: true,
  },
};

export const DisabledOptions: Story = {
  args: {
    options: [
      { label: 'New file', value: 'new_file'},
      { label: 'Copy link', value: 'copy_link', disabled: true },
      { label: 'Edit file', value: 'edit_file' },
      { label: 'Delete file', value: 'delete_file', danger: true },
    ],
    variant: 'flat',
    color: 'default',
    radius: 'md',
    size: 'md',
    triggerLabel: <Button>Dropdown with Disabled Options</Button>,
    placement: 'bottom',
    multipleSelection: false,
    disabledKeys: ['copy_link'],
    withAnimation: true,
  },
};

export const withDescription: Story = {
  args: {
    options: [
      { label: 'New file', value: 'new_file',icon: <FaFile /> ,description: 'Create a new file'},
      { label: 'Copy link', value: 'copy_link',icon: <FaLink />,description: 'Copy the file link' },
      { label: 'Edit file', value: 'edit_file', icon: <FaEdit />,description: 'Allows you to edit the file' },
      { label: 'Delete file', value: 'delete_file', icon: <FaTrash />, danger: true ,description: 'Permanently delete the file'},
    ],
    variant: 'flat',
    color: 'default',
    radius: 'md',
    size: 'md',
    triggerLabel: <Button>With Description</Button>,
    placement: 'bottom',
    multipleSelection: false,
    disabledKeys: [],
    withAnimation: true,
  },
};
