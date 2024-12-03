import React, { useState } from 'react';
import classNames from 'classnames';
import './Styles/dropdown.css'; // Custom CSS for styling (see below).

interface Option {
  label: string;
  value: string;
  disabled?: boolean;
  danger?: boolean;
  description?: string;  // Add description to options
  icon?: React.ReactNode; // Add icon to options
}

interface DropdownProps {
  options: Option[];
  triggerLabel: string;
  multipleSelection?: boolean;
  disabledKeys?: string[]; // List of disabled keys
  withAnimation?: boolean; // Toggle animation
  className?: string; 
  style?: React.CSSProperties; 
  [x: string]: any; 
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  triggerLabel,
  multipleSelection = false,
  disabledKeys = [],
  withAnimation = false,
  className,
  style,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (value: string) => {
    if (multipleSelection) {
      setSelectedOptions((prevSelected) =>
        prevSelected.includes(value)
          ? prevSelected.filter((item) => item !== value)
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
    { 'dropdown-open': isOpen }
  );

  const dropdownItemClass = (option: Option) => classNames(
    'dropdown-item',
    { 'dropdown-disabled': isDisabled(option.value) },
    { 'dropdown-selected': selectedOptions.includes(option.value) },
    { 'dropdown-danger': option.danger }
  );

  return (
    <div className={dropdownClass} style={style} {...props}>
      <button
        className="dropdown-trigger"
        onClick={toggleDropdown}
        disabled={isDisabled(triggerLabel)}
      >
        {triggerLabel}
      </button>
      {isOpen && (
        <ul className={dropdownMenuClass}>
          {options.map((option, index) => (
            <li
              key={index}
              className={dropdownItemClass(option)}
              onClick={() => !isDisabled(option.value) && handleOptionClick(option.value)}
            >
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
