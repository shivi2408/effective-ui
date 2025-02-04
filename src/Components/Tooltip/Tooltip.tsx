import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import './Styles/tooltip.css';

export interface TooltipProps {
  variant?: 'solid' | 'flat'| 'faded' | 'bordered' ;
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
}) => {
  const [visible, setVisible] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const showTooltip = () => {
    if (timeoutId) clearTimeout(timeoutId);
    const id = setTimeout(() => setVisible(true), delay*1000);
    setTimeoutId(id);
  };

  const hideTooltip = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    setVisible(false);
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
    { 'tooltip--visible': visible ,'tooltip--with-arrow': arrow },
    className
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
        {children}
        {visible && (
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