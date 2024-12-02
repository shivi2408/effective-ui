import React from 'react';
import './Styles/checkbox.css';

export interface CheckboxProps {
  label?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  style?: React.CSSProperties;
  color?: 'primary' | 'secondary' | 'success' | 'warning'; // New color prop
  borderRadius?: string; // New border radius prop
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  defaultChecked,
  disabled = false,
  indeterminate = false,
  onChange,
  className,
  style,
  color = 'primary', // Default to primary color
  borderRadius = '4px', // Default to 4px border radius
}) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  return (
    <label
      className={`checkbox-container ${className || ''}`}
      style={{ ...style, borderRadius }}
    >
      <input
        type="checkbox"
        className={`checkbox-input ${color}`}
        ref={inputRef}
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        onChange={onChange}
      />
      <span className={`checkbox-custom ${color}`} />
      {label && <span className="checkbox-label">{label}</span>}
    </label>
  );
};

export default Checkbox;
