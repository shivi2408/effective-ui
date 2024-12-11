import React, { useState } from 'react';
import classNames from 'classnames';
import { IoIosArrowBack,IoIosArrowDown } from "react-icons/io";

import './Styles/accordion.css';

export interface AccordionProps {
    title: string;
    isOpen?: boolean;
    isDisabled?: boolean;
    isCompact?: boolean;
    children?: React.ReactNode;
    onToggle?: (isOpen: boolean) => void;
    className?: string;
    style?: React.CSSProperties;
    [x: string]: any;
  }

const Accordion: React.FC<AccordionProps> = ({
    title,
    isOpen: isOpenProp = false,
    isDisabled = false,
    isCompact = false,
    children,
    onToggle,
    className,
    style,
    ...props
  }) => {
  const [isOpen, setIsOpen] = useState(isOpenProp);

  const handleToggle = () => {
    if (!isDisabled) {
      setIsOpen(!isOpen);
      if (onToggle) {
        onToggle(!isOpen);
      }
    }
  };

  const accordionClass = classNames(
    'accordion',
    { 'accordion-disabled': isDisabled },
    { 'accordion-open': isOpen },
    { 'accordion-compact': isCompact },
    className
  );

  const headerClass = classNames('accordion-header', {
    'accordion-disabled-header': isDisabled
  });

  return (
    <div className={accordionClass} style={style} {...props}>
      <div className={headerClass} onClick={handleToggle}>
        <span className="accordion-title">{title}</span>
        <span className="accordion-icon">{isOpen ?  <IoIosArrowDown />:<IoIosArrowBack /> }</span>
      </div>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
};

export default Accordion;
