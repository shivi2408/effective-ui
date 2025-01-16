import React from 'react';
import classNames from 'classnames';
import './Styles/avatar.css';
import { FaUser } from "react-icons/fa";

export interface AvatarProps {
  size?: 'sm' | 'md' | 'lg'; 
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  name?: string;
  initials?: string; 
  isBordered?: boolean; 
  src?: string; 
  alt?: string; 
  icon?: React.ReactNode;
  className?: string; 
  style?: React.CSSProperties; 
  onClick?: () => void; 
  [x: string]: any; 
}

const Avatar: React.FC<AvatarProps> = ({
  size = 'md',
  radius = 'md',
  color = 'default',
  name,
  initials,
  isBordered = false,
  src,
  alt,
  icon,
  className,
  style,
  onClick,
  ...props
}) => {
  
  const generateInitials = (name: string | undefined) => {
    if (!name) return '';
    const nameParts = name.split(' ');
    const firstInitial = nameParts[0]?.charAt(0) || '';
    const secondInitial = nameParts[1]?.charAt(0) || '';
    return (firstInitial + secondInitial).toUpperCase();
  };

  const avatarInitials = initials || generateInitials(name);

  const avatarClass = classNames(
    'avatar',
    `avatar--size-${size}`,
    `avatar--radius-${radius}`,
    `avatar--color-${color}`,
    { 'avatar--bordered': isBordered },
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
        <span className="avatar-initials">{avatarInitials}</span>
      ) : icon ? (
        <span className="avatar-icon">{icon}</span>
      ) : (
        <span className="avatar-icon">
          <FaUser  /> 
        </span>
      )}
    </div>
  );
};

export default Avatar;
