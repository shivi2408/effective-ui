import React, { useState } from 'react';
import classNames from 'classnames';
import { FaRegEye,FaRegEyeSlash } from "react-icons/fa";
import './Styles/input.css';

export interface InputBoxProps {
  label?: string;
  placeholder?: string;
  variant?: 'flat' | 'faded' | 'bordered' | 'underlined';
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  fullWidth?: boolean;
  labelPlacement?: 'inside' | 'outside' | 'outside-left' ; 
  disabled?: boolean;
  isMultiline?: boolean;
  validationBehavior?: string; 
  isPassword?: boolean;
  className?: string;
  style?: React.CSSProperties;
  onChange?: (value: string) => void;
  [x: string]: any; 
}

const InputBox: React.FC<InputBoxProps> = ({
  label,
  placeholder = 'Enter text...',
  variant = 'flat',
  color = 'secondary',
  size = 'md',
  radius = 'md',
  fullWidth = false,
  labelPlacement = 'inside',
  disabled = false,
  isMultiline = false,
  isPassword = false, 
  validationBehavior,
  defaultValue = '',
  className,
  style,
  onChange,
  ...props
}) => {
  const [value, setValue] = useState(defaultValue);
  const [showPassword, setShowPassword] = useState(false); 

  const inputClass = classNames(
    'input-box__input',
  );
  
  const labelClass = classNames(
    'input-box__label',
    `input-box__label--${labelPlacement}`
  );

  const passwordClass = classNames(
    'input-box__password',
  );
  
  const inputBoxClass = classNames(
    'input-box',
    { 'input-box--full-width': fullWidth },
    { 'input-box--disabled': disabled },
    `input-box--size-${size}`, 
    `input-box--variant-${variant}`, 
    `input-box--radius-${radius}`, 
    `input-box--color-${color}` 
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
  const inputType = isPassword && !showPassword ? 'password' : 'text'; 

const isPlaceholderEmpty = placeholder === "";
const displayPlaceholder = isPlaceholderEmpty ? label : placeholder;
const displayLabel = isPlaceholderEmpty && value ? label : isPlaceholderEmpty ? "" : label;


return (
  <>
  {labelPlacement !== "inside" && (
         <span className={labelClass}>{displayLabel}</span>
        )}
  <div className={inputBoxClass} style={style} aria-disabled={disabled}>
  {labelPlacement === "inside" && (
         <span className={labelClass}>{displayLabel}</span>
        )}
    <div className="inputbox__input-wrapper">
      <InputComponent
        className={inputClass}
        placeholder={displayPlaceholder} 
        value={value}
        onChange={handleInputChange}
        disabled={disabled}
        type={inputType}
        {...props}
      />
      {isPassword && (
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className={passwordClass}
          aria-label={showPassword ? 'Hide password' : 'Show password'}
        >
          {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
        </button>
      )}
    </div>
  </div>
  </>
);
};
   
export default InputBox;
