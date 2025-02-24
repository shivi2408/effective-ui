import React from 'react';
import classNames from 'classnames'; 
import './Styles/button.css'

export interface ButtonProps {
  variant?: 'solid' | 'light' | 'shadow' | 'ghost' | 'flat'| 'faded' | 'bordered' | 'underlined';
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  disabled?: boolean; 
  fullWidth?: boolean; 
  icon?: React.ReactNode; 
  iconPosition?: 'left' | 'right'; 
  isLoading?: boolean; 
  isIconOnly?: boolean;
  children: React.ReactNode; 
  className?: string;
  style?: React.CSSProperties; 
  as?: React.ElementType; 
  onClick?: (event: React.MouseEvent) => void; 
  [x: string]: any; 
}

const Button: React.FC<ButtonProps> = ({
  variant = 'flat',
  color = 'default',
  size = 'md',
  radius = 'md',
  disabled = false,
  fullWidth = false,
  icon,
  iconPosition = 'left',
  isLoading = false,
  isIconOnly = false,
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
    { 'btn--disabled': isDisabled },
    { 'btn--full-width': fullWidth},
    { 'btn--icon-only': isIconOnly },
    className 
  );

  const buttonSpinnerClass = classNames(
    'btn-spinner', 
    `btn-spinner--size-${size}`,
  );

  const buttonIconClass = classNames(
    'btn-icon', 
    `btn-icon--size-${size}`,
    `btn-icon--position-${iconPosition}`
  );

  const buttonLabelClass = classNames(
    'btn-label', 
    `btn-label--size-${size}`,
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
      {isLoading && <span className={buttonSpinnerClass} aria-hidden="true" />}
      {icon && iconPosition === 'left' && <span className={buttonIconClass}>{icon}</span>}
      {!isIconOnly && <span className={buttonLabelClass}>{children}</span>}
      {icon && iconPosition === 'right' && <span className={buttonIconClass}>{icon}</span>}
    </Component>
  );
};

export default Button;
