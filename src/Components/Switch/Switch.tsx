import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import './Styles/switch.css';

export interface SwitchProps {
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'danger';
  size?: 'sm' | 'md'| 'lg';
  isDisabled?: boolean;
  children?: React.ReactNode;
  onChange?: (checked: boolean) => void;
  checked?: boolean;
  className?: string;
  style?: React.CSSProperties;
  onIcon?: React.ReactNode; // Icon when checked
  offIcon?: React.ReactNode; // Icon when unchecked
  [x: string]: any;
}

const Switch: React.FC<SwitchProps> = ({
  color = 'default',
  size = 'md',
  isDisabled = false,
  children,
  onChange,
  checked: checkedProp = false,
  className,
  style,
  onIcon,
  offIcon,
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
        onChange(!checked);
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
    `switch-track-${color}`,
    `switch-${size}`,
    { 'switch-checked': !checked }
  );

  return (
    <div
      className={switchClass}
      style={style}
      onClick={handleToggle}
      {...props}
    >
      <div className={trackClass}>
        <div className="switch-thumb">
          {checked ? (
            <span className="thumb-icon ">
              {onIcon}
            </span>
          ) : (
            <span className="thumb-icon ">
              {offIcon}
            </span>
          )}
        </div>
      </div>
      {children && <span className="switch-label">{children}</span>}
    </div>
  );
};

export default Switch;
