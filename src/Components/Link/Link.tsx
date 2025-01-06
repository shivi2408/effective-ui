import React from 'react';
import classNames from 'classnames';
import './Styles/link.css';

export interface LinkProps {
  href?: string;
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  isDisabled?: boolean;
  underline?: 'none' | 'hover' | 'always' | 'active' | 'focus';
  children?: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  [x: string]: any;
}

const Link: React.FC<LinkProps> = ({
  href = '#',
  color = 'default',
  size = 'md',
  isDisabled = false,
  underline = 'none',
  children,
  icon,
  className,
  style,
  onClick,
  ...props
}) => {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (isDisabled) {
      event.preventDefault();
      return;
    }
    if (onClick) {
      onClick(event);
    }
  };

  const linkClass = classNames(
    'link',
    `link-${color}`,
    `link-${size}`,
    `link-underline-${underline}`,
    { 'link-disabled': isDisabled },
    className
  );

  return (
    <a
      href={isDisabled ? undefined : href}
      className={linkClass}
      style={style}
      onClick={handleClick}
      {...props}
    >
      {children}
      {icon && <span className="link-icon">{icon}</span>}
    </a>
  );
};

export default Link;
