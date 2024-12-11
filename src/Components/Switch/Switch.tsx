import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import './Styles/switch.css';

export interface SwitchProps {
  color?: 'default' |'primary' | 'secondary' | 'success' | 'danger';
  size?: 'small' | 'medium' | 'large';
  isDisabled?: boolean;
  children?: React.ReactNode;
  onChange?: (checked: boolean) => void;
  checked?: boolean;
  className?: string;
  style?: React.CSSProperties;
  [x: string]: any;
}

const Switch: React.FC<SwitchProps> = ({
  color = 'default',
  size = 'medium',
  isDisabled = false,
  children,
  onChange,
  checked: checkedProp = false,
  className,
  style,
  ...props
}) => {
  const [checked, setChecked] = useState(checkedProp);

  useEffect(() => {
    if (checkedProp !== checked) {
      setChecked(checkedProp);
    }
  }, [checkedProp]);

  const handleToggle = () => {
    if (!isDisabled) {
      setChecked(!checked);
      if (onChange) {
        onChange(!checked); // Send reversed value in onChange
      }
    }
  };

  const switchClass = classNames(
    'switch',
    { 'switch-disabled': isDisabled },
    { 'switch-checked': !checked },
    `switch-${size}`,
    className
  );

  const trackClass = classNames(
    'switch-track',
    `switch-track-${color}`, // Apply color classes correctly
    `switch-${size}`,
    { 'switch-checked': !checked } // Apply checked state for color change
  );

  return (
    <div
      className={switchClass}
      style={style}
      onClick={handleToggle}
      {...props}
    >
      <div className={trackClass}>
        <div className="switch-thumb"></div>
      </div>
      {children && <span className="switch-label">{children}</span>}
    </div>
  );
};

export default Switch;
