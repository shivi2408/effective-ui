import React, { useState, useEffect } from 'react';
import classNames from 'classnames'; 
import './Styles/radio.css'; // Assuming this is the CSS file location

export interface RadioProps {
  name: string;
  options: { value: string; label?: string }[];
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  selected?: string;
  onChange?: (value: string) => void;
  orientation?: 'row' | 'column'; 
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean; 
  disableOption?: string[]; 
}

const Radio: React.FC<RadioProps> = ({
  name,
  options,
  color = 'primary',
  size = 'md',
  selected: selectedProp,
  onChange,
  orientation = 'column',
  className,
  style,
  disabled = false, 
  disableOption = [],
}) => {
  const [selected, setSelected] = useState(selectedProp || '');

  useEffect(() => {
    if (selectedProp !== undefined && selectedProp !== selected) {
      setSelected(selectedProp);
    }
  }, [selectedProp]);

  const handleChange = (value: string) => {
    if (!disabled && !disableOption.includes(value)) {
      setSelected(value);
      if (onChange) {
        onChange(value);
      }
    }
  };

  const radioContainerClass = classNames(
    'radio_buttons_container',
    `radio_buttons_container--orientation-${orientation}`,
    `radio_buttons_container--color-${color}`, 
    `radio_buttons_container--size-${size}`, 
    className 
  );

  return (
    <div className={radioContainerClass} style={style}>
      {options.map((option, index) => {
        const isOptionDisabled = disabled || disableOption.includes(option.value);

        const radioButtonClass = classNames(
          'radio_button',
          { 'radio_button--disabled': isOptionDisabled }
        );

        const radioCustomClass = classNames(
          'radio_button_custom',
          { 'radio_button_custom--disabled': isOptionDisabled }
        );

        return (
          <div className={radioButtonClass} key={index}>
            <input
              name={name}
              id={`${name}-${index}`}
              className="radio_button_input"
              type="radio"
              value={option.value}
              checked={selected === option.value}
              onChange={() => handleChange(option.value)}
              disabled={isOptionDisabled}
            />
            <label htmlFor={`${name}-${index}`} className="radio_button_label">
              <span className={radioCustomClass}></span>
              <div className="option">{option.label || option.value}</div>
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default Radio;
