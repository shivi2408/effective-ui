import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';
import './Styles/dropdown.css';

interface Option {
  label: string;
  value: string;
  disabled?: boolean;
  danger?: boolean;
  description?: string;
  icon?: React.ReactNode;
}

export interface DropdownProps {
  options: Option[];
  triggerLabel: string;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  multipleSelection?: boolean;
  disabledKeys?: string[];
  withAnimation?: boolean;
  className?: string;
  style?: React.CSSProperties;
  [x: string]: any;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  triggerLabel,
  placement = 'bottom',
  multipleSelection = false,
  disabledKeys = [],
  withAnimation = false,
  className,
  style,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Update trigger label when selections change (for multi-select only)
  const getTriggerLabel = () => {
    if (multipleSelection) {
      const selectedLabels = options
        .filter(option => selectedOptions.includes(option.value))
        .map(option => option.label);
      return selectedLabels.length > 0 ? selectedLabels.join(', ') : triggerLabel;
    }
    return triggerLabel;
  };

  const toggleDropdown = () => setIsOpen(prev => !prev);

  const handleOptionClick = (value: string) => {
    if (multipleSelection) {
      setSelectedOptions(prevSelected =>
        prevSelected.includes(value)
          ? prevSelected.filter(item => item !== value)
          : [...prevSelected, value]
      );
    } else {
      setSelectedOptions([value]);
      setIsOpen(false); // Close dropdown after selection
    }
  };

  const isDisabled = (value: string) => disabledKeys.includes(value);

  const dropdownClass = classNames(
    'dropdown',
    { 'dropdown-animated': withAnimation },
    className
  );

  const dropdownMenuClass = classNames(
    'dropdown-menu',
    `dropdown-${placement}`, // Add placement class
    { 'dropdown-open': isOpen }
  );

  const dropdownItemClass = (option: Option) =>
    classNames('dropdown-item', {
      'dropdown-disabled': isDisabled(option.value),
      'dropdown-selected': selectedOptions.includes(option.value),
      'dropdown-danger': option.danger
    });

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div className={dropdownClass} style={style} ref={dropdownRef} {...props}>
      <button
        className="dropdown-trigger"
        onClick={toggleDropdown}
        disabled={isDisabled(triggerLabel)}
      >
        {getTriggerLabel()}
      </button>
      {isOpen && (
        <ul className={dropdownMenuClass}>
          {options.map((option, index) => (
            <li
              key={index}
              className={dropdownItemClass(option)}
              onClick={() => !isDisabled(option.value) && handleOptionClick(option.value)}
            >
              {multipleSelection && selectedOptions.includes(option.value) && (
                <span className="dropdown-checkmark">✔</span>
              )}
              {option.icon && <span className="dropdown-icon">{option.icon}</span>}
              <span className="dropdown-label">{option.label}</span>
              {option.description && <span className="dropdown-description">{option.description}</span>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
