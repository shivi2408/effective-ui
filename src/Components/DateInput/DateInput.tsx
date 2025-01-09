import React, { useState } from 'react';
import classNames from 'classnames';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { IoCalendar } from "react-icons/io5";
import './Styles/dateinput.css';

export interface DateInputProps {
  label?: string;
  variant?: 'none' | 'flat' | 'outlined';
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  radius?: 'none' | 'sm' | 'md' | 'lg';
  labelPlacement?: 'inside' | 'outside';
  isDisabled?: boolean;
  validationBehavior?: 'onBlur' | 'onChange';
  value?: { dd: string; mm: string; yyyy: string };
  onChange?: (value: { dd: string; mm: string; yyyy: string }) => void;
  showCalendarButton?: boolean;
  className?: string;
  style?: React.CSSProperties;
  [x: string]: any;
}

const DateInput: React.FC<DateInputProps> = ({
  label = 'Date',
  variant = 'flat',
  color = 'default',
  size = 'md',
  radius = 'sm',
  labelPlacement = 'inside',
  isDisabled = false,
  validationBehavior = 'onBlur',
  value = { dd: '', mm: '', yyyy: '' },
  onChange,
  showCalendarButton = false,
  className,
  style,
  ...props
}) => {
  const [inputValue, setInputValue] = useState(value);
  const [calendarDate, setCalendarDate] = useState<Date | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: 'dd' | 'mm' | 'yyyy', nextFieldRef?: React.RefObject<HTMLInputElement>) => {
    const { value } = e.target;
    const newValue = { ...inputValue, [field]: value };

    if (field === 'dd' && value.length === 2 && nextFieldRef?.current) {
      nextFieldRef.current.focus();
    }
    
    if (field === 'mm') {
      if (parseInt(value, 10) > 12) {
        newValue.mm = '12';
      }
      if (value.length === 2 && nextFieldRef?.current) {
        nextFieldRef.current.focus();
      }
    }

    setInputValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  const handleDateChange = (date: Date | null) => {
    if (date) {
      const newValue = {
        dd: date.getDate().toString().padStart(2, '0'),
        mm: (date.getMonth() + 1).toString().padStart(2, '0'),
        yyyy: date.getFullYear().toString(),
      };
      setInputValue(newValue);
      setCalendarDate(date);
      if (onChange) {
        onChange(newValue);
      }
    }
  };

  const inputClass = classNames(
    'dateinput',
    `dateinput-${variant}`,
    `dateinput-${color}`,
    `dateinput-${size}`,
    { 'dateinput-disabled': isDisabled },
    { 'dateinput-radius-none': radius === 'none' },
    { [`dateinput-radius-${radius}`]: radius !== 'none' },
    className
  );

  const monthRef = React.createRef<HTMLInputElement>();
  const yearRef = React.createRef<HTMLInputElement>();
  return (
    <div className={inputClass} style={style} {...props}>
      {labelPlacement === 'outside' && <label>{label}</label>}
      <div className={classNames('dateinput-wrapper', { 'dateinput-inside': labelPlacement === 'inside' })}>
        {labelPlacement === 'inside' && <label>{label}</label>}
        <input
          type="text"
          placeholder="dd"
          value={inputValue.dd}
          onChange={(e) => handleInputChange(e, 'dd', monthRef)}
          disabled={isDisabled}
          className="dateinput-field dateinput-dd"
          maxLength={2}
        />
        <span className="dateinput-separator">/</span>
        <input
          type="text"
          ref={monthRef}
          placeholder="mm"
          value={inputValue.mm}
          onChange={(e) => handleInputChange(e, 'mm', yearRef)}
          disabled={isDisabled}
          className="dateinput-field dateinput-mm"
          maxLength={2}
        />
        <span className="dateinput-separator">/</span>
        <input
          type="text"
          ref={yearRef}
          placeholder="yyyy"
          value={inputValue.yyyy}
          onChange={(e) => handleInputChange(e, 'yyyy')}
          disabled={isDisabled}
          className="dateinput-field dateinput-yyyy"
          maxLength={4}
        />
        {showCalendarButton && (
          <DatePicker
            selected={calendarDate}
            onChange={handleDateChange}
            customInput={<IoCalendar className="dateinput-calendar-button" size={22} />}
            disabled={isDisabled}
          />
        )}
      </div>
    </div>
  );
  
};

export default DateInput;
