import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import './Styles/tooltip.css';

export interface TooltipProps {
  variant?: 'solid' | 'flat' | 'faded' | 'bordered';
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  position?: 'top' | 'bottom' | 'left' | 'right';
  backdrop?: 'transparent' | 'blur' | 'opaque';
  delay?: number;
  arrow?: boolean;
  content: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  defaultOpen?: boolean;
  disabled?: boolean;
}

const Tooltip: React.FC<TooltipProps> = ({
  variant = 'solid',
  color = 'default',
  size = 'sm',
  radius = 'full',
  position = 'top',
  backdrop = 'transparent',
  delay = 0,
  arrow = false,
  content,
  children,
  className,
  style,
  defaultOpen = false,
  disabled = false,
}) => {
  const [visible, setVisible] = useState(defaultOpen);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const showTooltip = () => {
    if (disabled) return;
    if (timeoutId) clearTimeout(timeoutId);
    const id = setTimeout(() => setVisible(true), delay * 1000);
    setTimeoutId(id);
  };

  const hideTooltip = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    if (!defaultOpen) setVisible(false);
  };

  useEffect(() => {
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [timeoutId]);

  const tooltipClass = classNames(
    'tooltip',
    `tooltip--variant-${variant}`,
    `tooltip--color-${color}`, 
    `tooltip--size-${size}`, 
    `tooltip--radius-${radius}`, 
    `tooltip--position-${position}`,
    {
      'tooltip--visible': visible,
      'tooltip--with-arrow': arrow,
      'tooltip--disabled': disabled,
    },
    className
  );
  const triggerClass = classNames(
    'tooltip-trigger',
    {'tooltip--disabled': disabled,}
  );
  const backdropClass = classNames(
      'tooltip_overlay',
      `tooltip_overlay--backdrop-${backdrop}` 
    );

  return (
    <>
      {/* {visible && <div className={backdropClass} />} */}
        <div
        className="tooltip-container"
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        >
        <div className={triggerClass}>{children}</div>
        {visible && !disabled && (
            <div className={tooltipClass} style={style}>
            {content}
            {arrow && <div className="tooltip-arrow"></div>}
            </div>
        )}
        </div>
    </>
  );
};

export default Tooltip;