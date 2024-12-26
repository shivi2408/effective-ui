import React from 'react';
import classNames from 'classnames';
import './Styles/chip.css';

export interface ChipProps {
  variant?: 'solid' | 'outlined' | 'light';
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  isDisabled?: boolean;
  children?: React.ReactNode;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
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
  startContent,
  endContent,
  className,
  style,
  ...props
}) => {
  const chipClass = classNames(
    'chip',
    `chip-${variant}`,
    `chip-${color}`,
    `chip-${size}`,
    `chip-radius-${radius}`,
    { 'chip-disabled': isDisabled },
    className
  );

  return (
    <div className={chipClass} style={style} {...props}>
      {startContent && <span className="chip-start-content">{startContent}</span>}
      <span className="chip-content">{children}</span>
      {endContent && <span className="chip-end-content">{endContent}</span>}
    </div>
  );
};

export default Chip;
