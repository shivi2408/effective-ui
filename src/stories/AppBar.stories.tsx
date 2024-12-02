import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import AppBar, { AppBarProps } from '../Components/Appbar/AppBar'; // Adjust the import path as needed.

const meta: Meta<typeof AppBar> = {
  title: 'Components/AppBar', // Category and name in Storybook.
  component: AppBar,
  parameters: {
    layout: 'fullscreen', // Ensures the app bar is displayed properly.
  },
  tags: ['autodocs'],
  argTypes: {
    logo: { control: 'text', description: 'The logo displayed in the AppBar.' },
    responsiveBreakpoint: { 
      control: 'number', 
      description: 'Screen width breakpoint for menu collapse.' 
    },
    menuItems: { control: 'object', description: 'Menu items for the AppBar.' },
    userMenu: { control: 'object', description: 'User menu items for the AppBar.' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    logo: <img src="src/stories/assets/discord.svg" alt="Logo" />,
    menuItems: [
      { label: 'Home', onClick: () => alert('Home clicked') },
      { label: 'About', onClick: () => alert('About clicked') },
      { label: 'Contact', onClick: () => alert('Contact clicked') },
    ],
    responsiveBreakpoint: 768,
    userMenu: [
      { label: 'Profile', onClick: () => alert('Profile clicked') },
      { label: 'Logout', onClick: () => alert('Logout clicked') },
    ],
  },
};

export const WithCustomMenuItems: Story = {
  args: {
    logo: <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Effective UI</div>,
    menuItems: [
      { label: 'Dashboard', onClick: () => alert('Dashboard clicked') },
      { label: 'Profile', onClick: () => alert('Profile clicked') },
      { label: 'Settings', onClick: () => alert('Settings clicked') },
    ],
    responsiveBreakpoint: 600,
    userMenu: [
      { label: 'My Account', onClick: () => alert('My Account clicked') },
      { label: 'Sign Out', onClick: () => alert('Sign Out clicked') },
    ],
  },
};

export const WithOnlyUserMenu: Story = {
  args: {
    logo: <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Minimal UI</div>,
    menuItems: [],
    responsiveBreakpoint: 768,
    userMenu: [
      { label: 'Settings', onClick: () => alert('Settings clicked') },
      { label: 'Logout', onClick: () => alert('Logout clicked') },
    ],
  },
};
