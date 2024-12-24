import React from 'react';
import classNames from 'classnames';
import './Styles/avatar.css';
import { FaUser } from "react-icons/fa";

export interface AvatarProps {
  size?: 'small' | 'medium' | 'large'; // Size of the avatar
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  src?: string; // URL for avatar image
  alt?: string; // Alternate text for the avatar image
  name?: string;
  initials?: string; // Initials to display if no image is provided
  icon?: React.ReactNode; // Icon to display if no image or initials
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'danger'; // Background color for the avatar
  isBordered?: boolean; // Option to add a border around the avatar
  className?: string; // Custom className for the avatar
  style?: React.CSSProperties; // Custom styles for the avatar
  onClick?: () => void; // Optional click handler
  [x: string]: any; // Additional props
}

const Avatar: React.FC<AvatarProps> = ({
  size = 'md',
  radius = 'md',
  src,
  alt,
  name,
  initials,
  icon,
  color = 'default',
  isBordered = false,
  className,
  style,
  onClick,
  ...props
}) => {
  // Function to generate initials from the provided name
  const generateInitials = (name: string | undefined) => {
    if (!name) return '';
    const nameParts = name.split(' ');
    const firstInitial = nameParts[0]?.charAt(0) || '';
    const secondInitial = nameParts[1]?.charAt(0) || '';
    return (firstInitial + secondInitial).toUpperCase();
  };

  // Set initials to either the passed initials or the generated ones from the name
  const avatarInitials = initials || generateInitials(name);

  const avatarClass = classNames(
    'avatar',
    `avatar-${size}`,
    `avatar-${radius}`,
    `avatar-${color}`,
    { 'avatar-bordered': isBordered },
    className
  );

  return (
    <div
      className={avatarClass}
      style={style}
      onClick={onClick}
      {...props}
    >
      {src ? (
        <img src={src} alt={alt || 'Avatar'} className="avatar-img" />
      ) : avatarInitials ? (
        <span className="avatar-initials">{avatarInitials}</span> // Display initials
      ) : icon ? (
        <span className="avatar-icon">{icon}</span> // Display icon if provided
      ) : (
        <span className="avatar-icon">
          <FaUser size={22} /> 
        </span>
      )}
    </div>
  );
};

export default Avatar;
