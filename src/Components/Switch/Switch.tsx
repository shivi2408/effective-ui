import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import './Styles/switch.css';

export interface SwitchProps {
  variant?: 'flat' | 'bordered' ;
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md'| 'lg';
  isDisabled?: boolean;
  children?: React.ReactNode;
  onChange?: (checked: boolean) => void;
  checked?: boolean;
  className?: string;
  style?: React.CSSProperties;
  onIcon?: React.ReactNode; 
  offIcon?: React.ReactNode; 
  [x: string]: any;
}

const Switch: React.FC<SwitchProps> = ({
  variant = 'flat',
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
    `switch--size-${size}`,
    `switch--color-${color}`,
    { 'switch--disabled': isDisabled },
    { 'switch--checked': checked },
    className
  );

  const trackClass = classNames(
    'switch_track',
    `switch_track--variant-${variant}`,
    `switch_track--color-${color}`,
    `switch_track--size-${size}`,
  );

  const switchLabelClass = classNames(
    'switch_label',
    `switch_label--size-${size}`,
  );

  return (
    <div
      className={switchClass}
      style={style}
      onClick={handleToggle}
      {...props}
    >
      <div className={trackClass}>
        <div className="switch_thumb">
          {checked ? (<span className="thumb-icon ">{onIcon}</span>) : 
                    (<span className="thumb-icon "> {offIcon}</span>
          )}
        </div>
      </div>
      {children && <span className={switchLabelClass}>{children}</span>}
    </div>
  );
};

export default Switch;
