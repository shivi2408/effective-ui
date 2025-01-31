import React, { useState } from 'react';
import classNames from 'classnames';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import './Styles/input.css';

export interface InputBoxProps {
  variant?: 'flat' | 'faded' | 'bordered' | 'underlined';
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  disabled?: boolean;
  fullWidth?: boolean;
  label?: React.ReactNode;
  placeholder?: string;
  labelPlacement?: 'inside' | 'outside' | 'outside-left';
  isMultiline?: boolean;
  isPassword?: boolean;
  isRequired?: boolean;
  validationBehavior?: string;
  defaultValue?: string;
  className?: string;
  style?: React.CSSProperties;
  onChange?: (value: string) => void;
}

const InputBox: React.FC<InputBoxProps> = ({
  variant = 'flat',
  color = 'secondary',
  size = 'md',
  radius = 'md',
  disabled = false,
  fullWidth = false,
  label,
  placeholder = 'Enter text...',
  labelPlacement = 'inside',
  isMultiline = false,
  isPassword = false,
  isRequired = false,
  defaultValue = '',
  className,
  style,
  onChange,
  ...props
}) => {
  const [value, setValue] = useState(defaultValue);
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (!disabled) {
      const newValue = event.target.value;
      setValue(newValue);
      onChange?.(newValue);
    }
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const getLabelText = (labelNode: React.ReactNode): string => {
    if (typeof labelNode === 'string' || typeof labelNode === 'number') return String(labelNode);
    if (React.isValidElement(labelNode)) {
      const children = labelNode.props.children;
      return Array.isArray(children) ? children.map(getLabelText).join('') : getLabelText(children);
    }
    return '';
  };

  const InputComponent = isMultiline ? 'textarea' : 'input';
  const inputType = isPassword && !showPassword ? 'password' : 'text';

  const labelText = (
    <>
      {label}
      {isRequired && <span className="input-box__required"> *</span>}
    </>
  );

  const isPlaceholderEmpty = placeholder === '';
  const displayPlaceholder = isPlaceholderEmpty ? getLabelText(labelText) : placeholder;
  const displayLabel = isPlaceholderEmpty && value ? labelText : isPlaceholderEmpty ? null : labelText;

  const containerClass = classNames(
    "input-box__container",
    `input-box__container--${labelPlacement}`,
    `input-box__container--color-${color}`
  );

  const labelClass = classNames(
    "input-box__label",
    `input-box__label--${labelPlacement}`
  );

  const inputBoxClass = classNames(
    "input-box",
    `input-box--variant-${variant}`,
    `input-box--size-${size}`, 
    `input-box--radius-${radius}`, 
    { 'input-box--disabled': disabled, 'input-box--full-width': fullWidth },
    className
  );

  const inputClass = classNames("input-box__input");
  const passwordClass = classNames("input-box__password");

  return (
    <div className={containerClass}>
      {labelPlacement !== "inside" && displayLabel && (
        <span className={labelClass}>{displayLabel}</span>
      )}

      <div className={inputBoxClass} style={style} aria-disabled={disabled}>
        {/* Render label inside input */}
        {labelPlacement === "inside" && displayLabel && (
          <span className="input-box__label">{displayLabel}</span>
        )}

        <div className="input-box__input-wrapper">
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
    </div>
  );
};

export default InputBox;
