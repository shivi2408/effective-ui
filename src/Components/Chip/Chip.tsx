import React from 'react';
import classNames from 'classnames';
import './Styles/chip.css';

export interface ChipProps {
  variant?: 'solid' | 'light' | 'shadow' | 'ghost' | 'flat'| 'faded' | 'bordered' | 'underlined' | 'dot';
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  isDisabled?: boolean;
  children?: React.ReactNode;
  icon?: React.ReactNode; 
  iconPosition?: 'left' | 'right'; 
  className?: string;
  style?: React.CSSProperties;
  [x: string]: any;
}

const Chip: React.FC<ChipProps> = ({
  variant = 'solid',
  color = 'default',
  size = 'md',
  radius = 'full',
  isDisabled = false,
  children,
  icon,
  iconPosition = 'left',
  className,
  style,
  ...props
}) => {

  const chipClass = classNames(
    'chip',
    `chip--variant-${variant}`,
    `chip--color-${color}`, 
    `chip--size-${size}`, 
    `chip--radius-${radius}`, 
    { 'chip--disabled': isDisabled },
    className 
  );

    const chipIconClass = classNames(
      'chip-icon', 
      `chip-icon--size-${size}`,
      `chip-icon--position-${iconPosition}`
    );
  
    const chipLabelClass = classNames(
      'chip-label', 
      `chip-label--size-${size}`,
    );

    const chipDotClass = classNames(
      'chip_dot', 
      `chip_dot--size-${size}`,
    );

    const dotDisplay = variant === 'dot' ? true : false;
  return (
    <div className={chipClass} style={style} {...props}>
     {dotDisplay && <span className={chipDotClass}>⬤</span>}
      {dotDisplay}
      {icon && iconPosition === 'left' && <span className={chipIconClass}>{icon}</span>}
      <span className={chipLabelClass}>{children}</span>
      {icon && iconPosition === 'right' && <span className={chipIconClass}>{icon}</span>}
    </div>
  );
};

export default Chip;
