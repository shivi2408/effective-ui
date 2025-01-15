import React from 'react';
import classNames from 'classnames';
import './Styles/link.css';

export interface LinkProps {
  href?: string;
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  underline?: 'none' | 'hover' | 'always' | 'active' | 'focus';
  isBlock?: boolean;
  isDisabled?: boolean;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  showAnchorIcon?: boolean;
  className?: string;
  style?: React.CSSProperties;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  [x: string]: any;
}

const Link: React.FC<LinkProps> = ({
  href = '#',
  color = 'default',
  size = 'md',
  underline = 'none',
  isBlock = false,
  isDisabled = false,
  children,
  icon,
  showAnchorIcon = false,
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
    `link--color-${color}`,
    `link--size-${size}`,
    `link--underline-${underline}`,
    { 'link--isBlock': isBlock },
    { 'link--disabled': isDisabled },
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
      {showAnchorIcon && icon && <span className="link_icon">{icon}</span>}
    </a>
  );
};

export default Link;
