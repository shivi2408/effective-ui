import React from 'react';
import classNames from 'classnames';
import './Styles/spinner.css';

export interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  variant?: 'solid' | 'round' | 'ring';
  label?: string;
  showLabel?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const Spinner: React.FC<SpinnerProps> = ({
  size = 'md',
  color = 'primary',
  variant = 'solid',
  label = 'Loading',
  showLabel = true,
  className,
  style,
}) => {

    const spinnerContainerClass = classNames(
        'spinner_container',
        `spinner_container--size-${size}`,
    );
  const spinnerClass = classNames(
    'spinner',
    `spinner--color-${color}`,
    `spinner--variant-${variant}`,
    className
  );

  return (
  <div className={spinnerContainerClass}>
    <div className={spinnerClass} style={style}></div>
    {showLabel && <div className="spinner_label ">{label}</div>}
  </div>
  );
};

export default Spinner;
