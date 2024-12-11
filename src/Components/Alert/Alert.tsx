import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { MdInfoOutline } from "react-icons/md";
import { GoCheckCircle } from "react-icons/go";
import { LuShieldAlert } from "react-icons/lu";
import { TbAlertHexagon } from "react-icons/tb";
import './Styles/alert.css';

export interface AlertProps {
  message: string;
  type?: 'default' |'success' | 'info' | 'warning' | 'danger';
  icon?: React.ReactNode; 
  duration?: number; // in milliseconds
  onClose?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

const Alert: React.FC<AlertProps> = ({
  message,
  type = 'info',
  icon,
  duration = 200000,
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
    `alert-${type}`,
    className
  );

  const renderIcon = () => {
    if (icon) {
      return <span className="alert-icon">{icon}</span>;
    }

    // Default icons for each type
    switch (type) {
      case 'success':
        return <GoCheckCircle className="alert-icon" />
      case 'default':
        return <MdInfoOutline className="alert-icon" />;
      case 'info':
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
      <button className="alert-close" onClick={() => setVisible(false)}>
        &times;
      </button>
    </div>
  );
};

export default Alert;
