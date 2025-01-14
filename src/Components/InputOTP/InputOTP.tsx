import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import './Styles/inputotp.css';

export interface InputOTPProps {
  variant?: 'flat' | 'faded' | 'bordered' | 'underlined';
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  radius?: 'none' |'sm' | 'md' | 'lg'| 'full';
  isDisabled?: boolean;
  length?: number; 
  validationBehavior?: 'none' | 'numeric' | 'alphanumeric'; // Validation type
  onChange?: (otp: string) => void;
  className?: string;
  style?: React.CSSProperties;
  [x: string]: any;
}

const InputOTP: React.FC<InputOTPProps> = ({
  variant = 'flat',
  color = 'default',
  size = 'md',
  radius = 'md',
  isDisabled = false,
  length = 4,
  validationBehavior = 'numeric',
  onChange,
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
      !/^\d*$/.test(value)
    ) {
      return;
    }
    if (
      validationBehavior === 'alphanumeric' &&
      !/^[a-zA-Z0-9]*$/.test(value) 
    ) {
      return;
    }

    newOtp[index] = value.slice(-1); 
    setOtp(newOtp);

    if (onChange) {
      onChange(newOtp.join(''));
    }

    
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

  const inputotpClass = classNames(
    'inputotp-field',
    `inputotp--variant-${variant}`,
    `inputotp--size-${size}`,
    `inputotp--color-${color}`,
    `inputotp--radius-${radius}`,
    { 'inputotp--disabled': isDisabled },
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
          className={inputotpClass}
        />
      ))}
    </div>
  );
};

export default InputOTP;
