import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { MdInfoOutline } from "react-icons/md";
import { GoCheckCircle } from "react-icons/go";
import { LuShieldAlert } from "react-icons/lu";
import { TbAlertHexagon } from "react-icons/tb";
import { CgClose } from "react-icons/cg";
import './Styles/alert.css';

export interface AlertProps {
  message: string;
  variant?: 'solid' | 'flat'| 'faded' | 'bordered' ;
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  icon?: React.ReactNode; 
  hideIcon?: boolean;
  duration?: number; // in milliseconds
  onClose?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

const Alert: React.FC<AlertProps> = ({
  message,
  variant = 'flat',
  color = 'info',
  radius = 'md',
  icon,
  hideIcon = false,
  duration = 1000000,
  onClose,
  className,
  style,
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      if (onClose) {
        onClose();
      }
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!visible) return null;

  const alertClass = classNames(
    'alert',
    `alert--variant-${variant}`,
    `alert--color-${color}`, 
    `alert--radius-${radius}`, 
    className
  );

  const renderIcon = () => {
    if (hideIcon) {
      return null;
    }

    if (icon) {
      return <span className="alert-icon">{icon}</span>;
    }

    // Default icons for each type
    switch (color) {
      case 'success':
        return <GoCheckCircle className="alert-icon" />
      case 'default':
        return <MdInfoOutline className="alert-icon" />;
      case 'primary':
        return <MdInfoOutline className="alert-icon" />;
      case 'secondary':
        return <MdInfoOutline className="alert-icon" />;
      case 'warning':
        return <LuShieldAlert className="alert-icon" />;
      case 'danger':
        return <TbAlertHexagon className="alert-icon" />;
      default:
        return null;
    }
  };

  return (
    <div className={alertClass} style={style}>
        {renderIcon()}
      <span>{message}</span>
      {/* <button > */}
      <CgClose className="alert-close" onClick={() => setVisible(false)}/>
      {/* </button> */}
    </div>
  );
};

export default Alert;
