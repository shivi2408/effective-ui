import React, { ReactNode, useState } from 'react';
import classNames from 'classnames';
import './Styles/badge.css'

interface BadgeProps {
  variant?: 'solid' | 'flat' | 'faded' |'shadow';
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  placement?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  showOutline?: boolean;
  isInvisible?: boolean;
  content?: ReactNode;
  disableAnimation?: boolean;
  trigger?: ReactNode;
}

const Badge: React.FC<BadgeProps> = ({
  variant = 'solid',
  color = 'default',
  size = 'md',
  radius= 'full',
  placement = 'top-right',
  showOutline = false,
  isInvisible = false,
  content,
  disableAnimation = false,
  trigger,
  ...props
}) => {
  const isDot = !content;

  const badgeContentClass = classNames(
    'badge-content',
    `badge-content--variant-${variant}`,
    `badge-content--color-${color}`,
    `badge-content--size-${size}`,
    `badge-content--radius-${radius}`, 
    `badge-content--placement-${placement}`,
    {
      'badge-content--outline': showOutline,
      'badge-content--invisible': isInvisible,
      'badge-content--no-animation': disableAnimation,
      'badge-content--dot': isDot,
    },
  );

   return (
      <div className="badge" {...props}>
        <div className="badge-trigger">{trigger }</div>
        <div className={badgeContentClass}>
        {!isDot && !isInvisible && content}
          </div>
      </div>
  );
};

export default Badge;
