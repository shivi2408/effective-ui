import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames'; 
import './Styles/popover.css';

export interface PopoverProps {
  variant?: 'solid' | 'flat'| 'faded' | 'bordered' ;
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  trigger?: 'click' | 'hover'; 
  position?: 'top' | 'bottom' | 'left' | 'right'; 
  content: React.ReactNode; 
  isVisible?: boolean; 
  children: React.ReactNode; 
  backdrop?: 'transparent' | 'blur' | 'opaque'; 
  className?: string; 
  style?: React.CSSProperties; 
  onVisibilityChange?: (isVisible: boolean) => void; 
  [x: string]: any;
}

const Popover: React.FC<PopoverProps> = ({
  variant = 'solid',
  color = 'default',
  size = 'md',
  radius = 'md',
  trigger = 'click',
  position = 'top',
  content,
  isVisible: propIsVisible = false,
  children,
  backdrop = 'transparent',
  className,
  style,
  onVisibilityChange,
  ...props
}) => {
  const [visible, setVisible] = useState(propIsVisible);
  const popoverRef = useRef<HTMLDivElement>(null);
  const hideTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setVisible(propIsVisible);
  }, [propIsVisible]);

  const toggleVisibility = () => {
    const newVisibility = !visible;
    setVisible(newVisibility);
    onVisibilityChange?.(newVisibility);
  };

  const showPopover = () => {
    if (trigger === 'hover') {
      if (hideTimeout.current) {
        clearTimeout(hideTimeout.current);
      }
      setVisible(true);
      onVisibilityChange?.(true);
    }
  };

  const hidePopover = () => {
    if (trigger === 'hover') {
      hideTimeout.current = setTimeout(() => {
        setVisible(false);
        onVisibilityChange?.(false);
      }, 600); 
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setVisible(false);
        onVisibilityChange?.(false);
      }
    };

    if (visible) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [visible, onVisibilityChange]);
  const popoverClass = classNames(
    'popover', 
    `popover--variant-${variant}`,
    `popover--color-${color}`, 
    `popover--size-${size}`, 
    `popover--radius-${radius}`, 
    `popover--position-${position}`, 
    { 'popover--visible': visible }, 
    className
  );

  const popoverContainerClass = classNames(
    'popover_container'
  );

  const backdropClass = classNames(
    'popover_overlay',
    `popover_overlay--backdrop-${backdrop}` 
  );

  return (
    <>
      {visible && <div className={backdropClass} />}
      <div
        ref={popoverRef}
        className={popoverContainerClass} 
        onClick={trigger === 'click' ? toggleVisibility : undefined}
        onMouseEnter={showPopover}
        onMouseLeave={hidePopover}
        {...props}
      >
        <div className="popover-trigger">{children}</div>
        {visible && (
          <div className={popoverClass} style={style}>
            {content}
          </div>
        )}
      </div>
    </>
  );
};

export default Popover;
