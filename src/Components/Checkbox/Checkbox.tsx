import React, { useState } from 'react';
import classNames from 'classnames';
import './Styles/checkbox.css';

export interface CheckboxProps {
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  radius?: 'none' | 'sm' | 'md' | 'lg' |'full';
  disabled?: boolean;
  defaultChecked?: boolean;
  label: string;
  textColor? : boolean;
  lineThrough? : boolean;
  className?: string; 
  style?: React.CSSProperties; 
  as?: React.ElementType; 
  onClick?: (event: React.MouseEvent) => void; 
  [x: string]: any; 
}

const Checkbox: React.FC<CheckboxProps> = ({
  color = 'default',
  size = 'medium',
  radius = 'sm',
  label,
  textColor = false,
  lineThrough = false,
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
    `checkbox--color-${color}`, 
    `checkbox--size-${size}`, 
    { 'checkbox--disabled': disabled }, 
    { 'checkbox--textColor': textColor },
    { 'checkbox--lineThrough': lineThrough },
    { 'checkbox_input--checked': checked },
    className 
  );

  const inputClass = classNames(
    'checkbox_input',
    { 'checkbox_input--checked': checked }
  );

  
  const checkboxCustomClass = classNames(
    'checkbox_custom',
    `checkbox_custom--size-${size}`,
    `checkbox_custom--radius-${radius}`,
    { 'checkbox_input--checked': checked }
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
        <span className={classNames({ 'checkbox--lineThrough': checked && lineThrough })}>{label}</span>
    </label>
  );
};

export default Checkbox;