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
  variant?: 'solid' | 'light' | 'shadow' | 'flat' | 'faded' | 'bordered';
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  placement?: 'top' | 'bottom' | 'left' | 'right';
  backdrop?: 'transparent' | 'blur' | 'opaque';
  disabled?: boolean;
  defaultOpen?: boolean;
  disabledKeys?: string[];
  withAnimation?: boolean;
  multipleSelection?: boolean;
  options: Option[];
  triggerLabel: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  [x: string]: any;
}

const Dropdown: React.FC<DropdownProps> = ({
  variant = 'flat',
  color = 'default',
  size = 'md',
  radius = 'md',
  placement = 'bottom',
  backdrop = 'transparent',
  disabled = false,
  defaultOpen = false, 
  disabledKeys = [],
  withAnimation = false,
  multipleSelection = false,
  options,
  triggerLabel,
  className,
  style,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsOpen(defaultOpen);
  }, [defaultOpen]);

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
      setIsOpen(false);
    }
  };

  const isDisabled = (value: string) => disabledKeys.includes(value);

  const dropdownClass = classNames(
    'dropdown',
    { 'dropdown--disabled': disabled },
    { 'dropdown--animated': withAnimation },
    className
  );

  const dropdownMenuClass = classNames(
    'dropdown_menu',
    `dropdown_menu--size-${size}`,
    `dropdown_menu--radius-${radius}`,
    `dropdown_menu--placement-${placement}`,
    { 'dropdown_menu--open': isOpen }
  );

  const backdropClass = classNames(
    'dropdown_overlay',
    `dropdown_overlay--backdrop-${backdrop}`
  );

  const dropdownItemClass = (option: Option) =>
    classNames(
      'dropdown_item',
      `dropdown_item--variant-${variant}`,
      `dropdown_item--color-${color}`,
      `dropdown_item--size-${size}`,
      {
        'dropdown_item--disabled': isDisabled(option.value),
        'dropdown_item--selected': selectedOptions.includes(option.value),
        'dropdown_item--danger': option.danger,
      }
    );

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
    <>
      {isOpen && <div className={backdropClass} />}
      <div className={dropdownClass} style={style} ref={dropdownRef} {...props}>
        <div className="dropdown_trigger" onClick={toggleDropdown}>
          {getTriggerLabel()}
        </div>
        {isOpen && (
          <ul className={dropdownMenuClass}>
            {options.map((option, index) => (
              <li
                key={index}
                className={dropdownItemClass(option)}
                onClick={() => !isDisabled(option.value) && handleOptionClick(option.value)}
              >
                {multipleSelection && selectedOptions.includes(option.value) && (
                  <span className="dropdown_checkmark">✔</span>
                )}
                {option.icon && <span className="dropdown_icon">{option.icon}</span>}
                <div className="dropdown_text">
                  <span className="dropdown_label">{option.label}</span>
                  {option.description && (
                    <span className="dropdown_description">{option.description}</span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Dropdown;
