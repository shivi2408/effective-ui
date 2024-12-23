import React, { useState } from 'react';
import classNames from 'classnames';
import { FaRegEye,FaRegEyeSlash } from "react-icons/fa";
import './Styles/input.css';

interface InputBoxProps {
  label?: string;
  placeholder?: string;
  variant?: 'flat' | 'faded' | 'bordered' | 'underlined';
  color?: 'primary' | 'secondary' | 'success' | 'warning';
  size?: 'sm' | 'md' | 'lg';
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  fullWidth?: boolean;
  labelPlacement?: 'inside' | 'outside'; // Position of the label
  disabled?: boolean;
  isMultiline?: boolean;
  validationBehavior?: string; // You can add options based on validation rules
  isPassword?: boolean; // Add a prop to determine if it's a password field
  className?: string;
  style?: React.CSSProperties;
  onChange?: (value: string) => void;
  [x: string]: any; // To handle additional props dynamically
}

const InputBox: React.FC<InputBoxProps> = ({
  label,
  placeholder = 'Enter text...',
  variant = 'flat',
  color = 'secondary',
  size = 'md',
  radius = 'sm',
  fullWidth = false,
  labelPlacement = 'outside',
  disabled = false,
  isMultiline = false,
  isPassword = false, // Default isPassword to false
  validationBehavior,
  defaultValue = '',
  className,
  style,
  onChange,
  ...props
}) => {
  const [value, setValue] = useState(defaultValue);
  const [showPassword, setShowPassword] = useState(false); // To toggle password visibility

  const inputBoxClass = classNames(
    'input',
    { 'input-fullWidth': fullWidth },
    { 'input-disabled': disabled },
    className
  );

  const labelClass = classNames(
    'inputbox-label',
    `inputbox-label-${labelPlacement}` // Adjust label placement
  );

  const inputClass = classNames(
    'inputbox',
    `inputbox-${size}`, // Styling for size
    `inputbox-${variant}`, // Styling for variant
    `inputbox-${radius}`, // Border radius
    `inputbox--${color}` // Optional color classes
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (!disabled) {
      setValue(event.target.value);
      onChange?.(event.target.value);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const InputComponent = isMultiline ? 'textarea' : 'input';
  const inputType = isPassword && !showPassword ? 'password' : 'text'; // Conditionally set input type

  return (
    <label className={inputBoxClass} style={style}>
      {label && <span className={labelClass}>{label}</span>}
      <div className="input-wrapper">
        <InputComponent
          className={inputClass}
          placeholder={placeholder}
          value={value}
          onChange={handleInputChange}
          disabled={disabled}
          type={inputType} // Use conditional type
          {...props}
        />
        {isPassword && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="toggle-password-visibility"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? <FaRegEyeSlash /> : <FaRegEye />} {/* Icon for visibility */}
          </button>
        )}
      </div>
    </label>
  );
};
   
export default InputBox;
