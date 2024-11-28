import React from 'react';
import classNames from 'classnames'; // Optional for handling dynamic class names.
import './Styles/button.css'
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'small' | 'medium' | 'large';
  icon?: React.ReactNode; // Icon element (e.g., from an icon library).
  iconPosition?: 'left' | 'right'; // Icon position relative to the label.
  isLoading?: boolean; // Loading state.
  disabled?: boolean; // Disabled state.
  fullWidth?: boolean; // Whether the button takes the full container width.
  children: React.ReactNode; // Button label or content.
  className?: string; // Custom CSS classes.
  style?: React.CSSProperties; // Inline styles.
  as?: React.ElementType; // Custom HTML tag (e.g., 'a' or 'div').
  onClick?: (event: React.MouseEvent) => void; // Click handler.
  [x: string]: any; // Additional props.
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  icon,
  iconPosition = 'left',
  isLoading = false,
  disabled = false,
  fullWidth = false,
  children,
  className,
  style,
  as: Component = 'button', // Default to <button>.
  onClick,
  ...props
}) => {
  const isDisabled = isLoading || disabled;

  const buttonClass = classNames(
    'btn', // Base button class.
    `btn-${variant}`, // Variant class (e.g., btn-primary).
    `btn-${size}`, // Size class (e.g., btn-medium).
    { 'btn-fullwidth': fullWidth }, // Full-width class.
    { 'btn-disabled': isDisabled }, // Disabled state class.
    className // Custom classes.
  );

  return (
    <Component
      className={buttonClass}
      style={style}
      onClick={!isDisabled ? onClick : undefined}
      disabled={Component === 'button' ? isDisabled : undefined} // Only apply `disabled` to <button>.
      aria-disabled={isDisabled} // For accessibility.
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
