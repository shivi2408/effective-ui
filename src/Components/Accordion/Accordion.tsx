import React, { useState,useEffect } from 'react';
import classNames from 'classnames';
import { IoIosArrowBack, IoIosArrowDown } from 'react-icons/io';
import './Styles/accordion.css';

export interface AccordionProps {
  variant?: 'default' | 'shadow' | 'bordered' | 'splitted';
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  open?: boolean;
  isDisabled?: boolean;
  isCompact?: boolean;
  children?: React.ReactNode;
  onToggle?: (isOpen: boolean, index: number) => void; 
  className?: string;
  style?: React.CSSProperties;
  [x: string]: any;
}

const Accordion: React.FC<AccordionProps> = ({
  variant = 'default',
  color = 'default',
  size = 'md',
  radius = 'none',
  open = false,
  isDisabled = false,
  isCompact = false,
  children,
  onToggle,
  className,
  style,
  ...props
}) => {
  const [openState, setOpenState] = useState<boolean[]>(() => {
    return React.Children.map(children, () => false) as boolean[];
  });

  useEffect(() => {
    if (open) {
      setOpenState(React.Children.map(children, () => true) as boolean[]);
    } else {
      setOpenState(React.Children.map(children, () => false) as boolean[]); 
    }
  }, [open, children]);

  const handleToggle = (index: number) => {
    if (!isDisabled) {
      const newState = [...openState];
      newState[index] = !newState[index];
      setOpenState(newState);
      if (onToggle) {
        onToggle(newState[index], index);
      }
    }
  };

  const accordionContainerClass = classNames(
    'accordion_container',
    `accordion_container--variant-${variant}`,
    `accordion_container--color-${color}`, 
    `accordion_container--radius-${radius}`,
    { 'accordion_container--compact': isCompact },
  );

  const accordionClass = classNames(
    'accordion',
    `accordion--size-${size}`,
    { 'accordion--disabled': isDisabled },
    { 'accordion--open': openState.some(state => state) }, 
    className
  );

  const headerClass = classNames('accordion_header', {
    'accordion_header--disabled': isDisabled
  });

  return (
    <div className={accordionContainerClass} style={style} {...props}>
      {React.Children.map(children, (child, index) => (
        <div className={accordionClass} key={index}>
          <div className={headerClass} onClick={() => handleToggle(index)}>
            <span className="accordion_title">
              {(child as React.ReactElement).props.title}
            </span>
            <span className="accordion_icon">
              {openState[index] ? <IoIosArrowDown /> : <IoIosArrowBack />}
            </span>
          </div>
          {openState[index] && (
            <div className="accordion_content">
              {(child as React.ReactElement).props.children}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
