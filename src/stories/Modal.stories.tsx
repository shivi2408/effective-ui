import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import Modal from '../Components/Modal/Modal';
import InputBox from '../Components/Input/Input';
import Button from '../Components/Buttons/Button';

const meta = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
      description: 'Size of the modal window.',
    },
    radius: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'full'],
      description: 'Border radius of the modal window.',
    },
    shadow: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
      description: 'Shadow effect on the modal box.',
    },
    placement: {
      control: 'select',
      options: ['auto', 'top', 'bottom'],
      description: 'Modal position in the viewport.',
    },
    title: {
      control: 'text',
      description: 'Title for the modal',
    },
    backdrop: {
      control: 'select',
      options: ['transparent', 'opaque', 'blur'],
      description: 'Background overlay style.',
    },
    scrollBehavior: {
      control: 'select',
      options: ['inside', 'outside'],
      description: 'Defines how scrolling is handled inside the modal.',
    },
    isDismissable: {
      control: 'boolean',
      description: 'If true, clicking outside the modal closes it.',
    },
    isKeyboardDismissDisabled: {
      control: 'boolean',
      description: 'If true, pressing Esc does not close the modal.',
    },
    disableAnimation: {
      control: 'boolean',
      description: 'Disables open/close animation.',
    },
    shouldBlockScroll: {
      control: 'boolean',
      description: 'Prevents background scrolling when modal is open.',
    },
    open: {
      control: 'boolean',
      description: 'Controls modal visibility.',
    },
    onClose: {
      action: 'closed',
      description: 'Callback triggered when modal closes.',
    },
  },
  args: {
    open: false,
    size: 'md',
    radius: 'md',
    shadow: 'sm',
    placement: 'auto',
    backdrop: 'opaque',
    scrollBehavior: 'inside',
    isDismissable: false,
    isKeyboardDismissDisabled: false,
    disableAnimation: false,
    shouldBlockScroll: false,
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    open: true,
    size: 'sm',
    title: 'Default Modal',
    children: <div>
      <p>Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi.
        Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis.<br />
        Sunt ad dolore quis aute consequat. Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing.</p>
        </div>,
  },
};

export const LoginModal: Story = {
  args: {
    open: true,
    size: 'sm',
    backdrop: 'blur',
    title: 'Log In',
    children: <div style={{width:"100%",display:"flex",flexDirection:"column",gap:"0.75rem"}}>
                <InputBox color="default" fullWidth defaultValue="" label="Email" labelPlacement="inside" placeholder="Enter text..." radius="md" size="md" variant="bordered" />
                <InputBox color="default" defaultValue="" isPassword fullWidth label="Password" placeholder="Enter your password" radius="md" size="md" variant="bordered" />
                <div style={{display:"flex",gap:"0.5rem",justifyContent:"flex-end"}}>
                  <Button color="secondary" onClick={() => {}} radius="sm" size="md" variant="flat" >Sign Up</Button>
                  <Button color="primary" onClick={() => {}} radius="sm" size="md" variant="solid" >Log In</Button>
                </div>
              </div>,
  },
};

export const Dismissable: Story = {
  args: {
    open: true,
    isDismissable: true,
    title: 'Dismissable',
    children: <p>Click outside to close this modal.</p>,
  },
};

export const ScrollContent: Story = {
args: {
  open: true,
  title: 'ScrollContent',
  children: <div>
    <p>Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi.
      Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis.<br />
      Sunt ad dolore quis aute consequat. Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.</p>
      <p>Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi.
      Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis.<br />
      Sunt ad dolore quis aute consequat. Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.</p>
      <p>Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi.
      Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis.<br />
      Sunt ad dolore quis aute consequat. Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.</p>
      <p>Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi.
      Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis.<br />
      Sunt ad dolore quis aute consequat.Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis.</p>
    </div>,
},
};

