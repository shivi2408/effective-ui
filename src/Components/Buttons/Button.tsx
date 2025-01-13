import React from 'react';
import classNames from 'classnames'; 
import './Styles/button.css'

export interface ButtonProps {
  variant?: 'solid' | 'light' | 'shadow' | 'ghost' | 'flat'| 'faded' | 'bordered';
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  disabled?: boolean; 
  fullWidth?: boolean; 
  icon?: React.ReactNode; 
  iconPosition?: 'left' | 'right'; 
  isLoading?: boolean; 
  children: React.ReactNode; 
  className?: string;
  style?: React.CSSProperties; 
  as?: React.ElementType; 
  onClick?: (event: React.MouseEvent) => void; 
  [x: string]: any; 
}

const Button: React.FC<ButtonProps> = ({
  variant = 'solid',
  color = 'default',
  size = 'md',
  radius = 'md',
  disabled = false,
  fullWidth = false,
  icon,
  iconPosition = 'left',
  isLoading = false,
  children,
  className,
  style,
  as: Component = 'button', 
  onClick,
  ...props
}) => {
  const isDisabled = isLoading || disabled;

  const buttonClass = classNames(
    'btn',
    `btn--variant-${variant}`,
    `btn--color-${color}`, 
    `btn--size-${size}`, 
    `btn--radius-${radius}`, 
    { 'btn--disabled': disabled },
    { 'btn--full-width': isDisabled },
    className 
  );

  return (
    <Component
      className={buttonClass}
      style={style}
      onClick={!isDisabled ? onClick : undefined}
      disabled={Component === 'button' ? isDisabled : undefined} 
      aria-disabled={isDisabled}
      {...props}
    >
      {isLoading && <span className="btn-spinner" aria-hidden="true" />}
      {icon && iconPosition === 'left' && <span className="btn-icon">{icon}</span>}
      <span className="btn-label">{children}</span>
      {icon && iconPosition === 'right' && <span className="btn-icon">{icon}</span>}
    </Component>
  );
};

export default Button;
