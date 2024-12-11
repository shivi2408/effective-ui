import React, { useState } from 'react';
import classNames from 'classnames'; // Optional for dynamic class names
import './Styles/popover.css';

export interface PopoverProps {
  trigger?: 'click' | 'hover'; // Trigger type
  position?: 'top' | 'bottom' | 'left' | 'right'; // Popover position relative to the trigger
  content: React.ReactNode; // Popover content
  isVisible?: boolean; // Controlled visibility state
  children: React.ReactNode; // Trigger element
  backdrop?: 'transparent' | 'blur' | 'opaque'; // Backdrop types
  className?: string; // Custom CSS classes
  style?: React.CSSProperties; // Inline styles
  onVisibilityChange?: (isVisible: boolean) => void; // Callback when visibility changes
  [x: string]: any; // Additional props
}

const Popover: React.FC<PopoverProps> = ({
  trigger = 'click',
  position = 'top',
  content,
  isVisible: controlledVisibility,
  children,
  backdrop = 'transparent',
  className,
  style,
  onVisibilityChange,
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(controlledVisibility || false);

  const toggleVisibility = () => {
    const newVisibility = !isVisible;
    setIsVisible(newVisibility);
    onVisibilityChange?.(newVisibility);
  };

  const showPopover = () => {
    if (trigger === 'hover') {
      setIsVisible(true);
      onVisibilityChange?.(true);
    }
  };

  const hidePopover = () => {
    if (trigger === 'hover') {
      setIsVisible(false);
      onVisibilityChange?.(false);
    }
  };

  // Determine the correct classes for the popover container
  const popoverClass = classNames(
    'popover', // Base popover class
    `popover-${position}`, // Dynamic position class (popover-top, popover-bottom, etc.)
    { 'popover-visible': isVisible }, // Conditional visibility class
    className // Additional custom classes
  );

  // Class for the backdrop effect
  const backdropClass = classNames(
    'popover-container',
    `popover-container-${backdrop}` // Dynamic class for backdrop based on the prop
  );

  return (
    <div
      className={backdropClass} // Apply backdrop class to the container
      onClick={trigger === 'click' ? toggleVisibility : undefined}
      onMouseEnter={showPopover}
      onMouseLeave={hidePopover}
      {...props}
    >
      <div className="popover-trigger">{children}</div>
      {isVisible && (
        <div className={popoverClass} style={style}>
          {content}
        </div>
      )}
    </div>
  );
};

export default Popover;
