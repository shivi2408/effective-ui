import React, { useState, useEffect } from 'react';
import './Styles/radio.css'; // Assuming this is the CSS file location

export interface RadioProps {
  name: string;
  options: { value: string; label?: string }[];
  selected?: string;
  onChange?: (value: string) => void;
  orientation?: 'row' | 'column'; // New prop for orientation
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean; // New disabled prop
}

const Radio: React.FC<RadioProps> = ({
  name,
  options,
  selected: selectedProp,
  onChange,
  orientation = 'column', // Default to column orientation
  className,
  style,
  disabled = false, // Default to not disabled
}) => {
  const [selected, setSelected] = useState(selectedProp || '');

  useEffect(() => {
    if (selectedProp !== undefined && selectedProp !== selected) {
      setSelected(selectedProp);
    }
  }, [selectedProp]);

  const handleChange = (value: string) => {
    if (!disabled) {
      setSelected(value);
      if (onChange) {
        onChange(value);
      }
    }
  };

  return (
    <div
      className={`radio-input ${orientation === 'row' ? 'radio-row' : 'radio-column'} ${className}`}
      style={style}
    >
      {options.map((option, index) => (
        <label key={index} className="radio-label">
          <input
            type="radio"
            name={name}
            className="radioinput"
            value={option.value}
            checked={selected === option.value}
            onChange={() => handleChange(option.value)}
            disabled={disabled} // Disable the input if disabled is true
          />
          {option.label && <span className="radio-label-text">{option.label}</span>}
        </label>
      ))}
    </div>
  );
};

export default Radio;
