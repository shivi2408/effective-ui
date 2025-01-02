import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import './Styles/inputotp.css';

export interface InputOTPProps {
  variant?: 'flat' | 'bordered' | 'faded' | 'underlined';
  length?: number; // Number of OTP input fields
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'danger';
  size?: 'none' |'sm' | 'md' | 'lg';
  isDisabled?: boolean;
  radius?: 'sm' | 'md' | 'lg';
  onChange?: (otp: string) => void;
  validationBehavior?: 'none' | 'numeric' | 'alphanumeric'; // Validation type
  className?: string;
  style?: React.CSSProperties;
  [x: string]: any;
}

const InputOTP: React.FC<InputOTPProps> = ({
  variant = 'solid',
  length = 4,
  color = 'default',
  size = 'md',
  isDisabled = false,
  radius = 'md',
  onChange,
  validationBehavior = 'numeric',
  className,
  style,
  ...props
}) => {
  const [otp, setOtp] = useState<string[]>(Array(length).fill(''));

  useEffect(() => {
    setOtp(Array(length).fill(''));
  }, [length]);

  const handleInputChange = (value: string, index: number) => {
    if (isDisabled) return;

    const newOtp = [...otp];
    if (
      validationBehavior === 'numeric' &&
      !/^\d*$/.test(value) // Allow only numbers
    ) {
      return;
    }
    if (
      validationBehavior === 'alphanumeric' &&
      !/^[a-zA-Z0-9]*$/.test(value) // Allow alphanumeric characters
    ) {
      return;
    }

    newOtp[index] = value.slice(-1); // Keep only the last character
    setOtp(newOtp);

    if (onChange) {
      onChange(newOtp.join(''));
    }

    // Move to the next input field if available
    if (value && index < length - 1) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    if (isDisabled) return;

    if (event.key === 'Backspace' && otp[index] === '') {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      prevInput?.focus();
    }
  };

  const inputClass = classNames(
    'inputotp-field',
    `inputotp-${variant}`,
    `inputotp-${size}`,
    `inputotp-${color}`,
    `inputotp-radius-${radius}`,
    { 'inputotp-disabled': isDisabled },
    className
  );

  return (
    <div className="inputotp-container" style={style} {...props}>
      {otp.map((value, index) => (
        <input
          key={index}
          id={`otp-${index}`}
          type="text"
          maxLength={1}
          value={value}
          onChange={(e) => handleInputChange(e.target.value, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          disabled={isDisabled}
          className={inputClass}
        />
      ))}
    </div>
  );
};

export default InputOTP;
