import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import './Styles/checkbox.css';

export interface CheckboxProps {
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  disabled?: boolean;
  defaultChecked?: boolean;
  checked?: boolean; // Added this prop
  label: string;
  textColor?: boolean;
  lineThrough?: boolean;
  className?: string;
  style?: React.CSSProperties;
  as?: React.ElementType;
  onClick?: (event: React.MouseEvent) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; // Added this prop
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
  checked,
  className,
  style,
  as: Component = 'button',
  onClick,
  onChange,
  ...props
}) => {
  const [internalChecked, setInternalChecked] = useState(defaultChecked);

  useEffect(() => {
    if (checked !== undefined) {
      setInternalChecked(checked);
    }
  }, [checked]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled) {
      const newChecked = !internalChecked;
      setInternalChecked(newChecked);
      if (onChange) {
        onChange(event);
      }
    }
  };

  const checkboxClass = classNames(
    'checkbox',
    `checkbox--color-${color}`,
    `checkbox--size-${size}`,
    { 'checkbox--disabled': disabled },
    { 'checkbox--textColor': textColor },
    { 'checkbox--lineThrough': lineThrough },
    { 'checkbox_input--checked': internalChecked },
    className
  );

  const inputClass = classNames(
    'checkbox_input',
    { 'checkbox_input--checked': internalChecked }
  );

  const checkboxCustomClass = classNames(
    'checkbox_custom',
    `checkbox_custom--size-${size}`,
    `checkbox_custom--radius-${radius}`,
    { 'checkbox_input--checked': internalChecked }
  );

  return (
    <label className={checkboxClass} style={style}>
      <input
        type="checkbox"
        className={inputClass}
        checked={internalChecked}
        onChange={handleCheckboxChange}
        disabled={disabled}
        {...props}
      />
      <span className={checkboxCustomClass}></span>
      <span className={classNames({ 'checkbox--lineThrough': internalChecked && lineThrough })}>{label}</span>
    </label>
  );
};

export default Checkbox;
