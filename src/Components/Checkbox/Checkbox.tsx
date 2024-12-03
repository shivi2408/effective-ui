import React, { useState } from 'react';
import classNames from 'classnames';
import './Styles/checkbox.css';

interface CheckboxProps {
  label: string;
  variant?: 'primary' | 'secondary' | 'success' | 'warning';
  borderRadius?: 'none' | 'sm' | 'md' | 'full';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  defaultChecked?: boolean;
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
  defaultChecked = false,
  className,
  style,
  as: Component = 'button',
  onClick,
  ...props
}) => {

  
 const [checked, setChecked] = useState(defaultChecked);

 const checkboxClass = classNames(
    'checkbox',
    `checkbox-${size}`, 
    { 'checkbox-disabled': disabled }, 
    className 
  );

  const inputClass = classNames(
    'checkbox-input',
    { 'checkbox-input-checked': checked }
  );

  
  const checkboxCustomClass = classNames(
    'checkbox-custom',
    `checkbox-custom-${variant}`,
    `checkbox-custom-${size}`,
    `checkbox-custom-${borderRadius}`,
  );

  const handleCheckboxChange = () => {
    if (!disabled) {
      setChecked((prev) => !prev);
    }
  };

  return (
    <label className={checkboxClass} style={style}>
       <input
        type="checkbox"
        className={inputClass}
        checked={checked}
        onChange={handleCheckboxChange}
      />
        <span className={checkboxCustomClass}></span>
        {label}
    </label>
  );
};

export default Checkbox;
