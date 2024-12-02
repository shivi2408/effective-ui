import React, { useState } from 'react';
import classNames from 'classnames';
import './Styles/checkbox.css';

interface CheckboxProps {
  label: string;
  variant?: 'primary' | 'secondary' | 'success' | 'warning';
  borderRadius?: 'none' | 'sm' | 'md' | 'full';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  className?: string; 
  style?: React.CSSProperties; 
  as?: React.ElementType; 
  onClick?: (event: React.MouseEvent) => void; 
  [x: string]: any; 
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  variant = 'primary',
  borderRadius = 'sm',
  size = 'medium',
  disabled = false,
  className,
  style,
  as: Component = 'button',
  onClick,
  ...props
}) => {

 const [checked, setChecked] = useState(false);

 const checkboxClass = classNames(
    'checkbox',
    `checkbox-${size}`, 
    { 'checkbox-disabled': disabled }, 
    className 
  );

  const inputClass = classNames(
    'checkbox-input',
    `checkbox-input-${variant}`,
    `checkbox-input-${size}`,
    `checkbox-input-${borderRadius}`,
  );

  return (
    <label className={checkboxClass}>
        <span className={inputClass} onChange={(e) => setChecked(e.target.checked)}></span>
        {label}
    </label>
  );
};

export default Checkbox;
