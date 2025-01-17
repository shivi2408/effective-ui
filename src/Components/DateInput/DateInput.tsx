import React, { useState } from 'react';
import classNames from 'classnames';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { IoCalendar } from "react-icons/io5";
import './Styles/dateinput.css';

export interface DateInputProps {
  label?: string;
  variant?: 'flat' | 'faded' | 'bordered' | 'underlined';
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  radius?: 'none' | 'sm' | 'md' | 'lg';
  labelPlacement?: 'inside' | 'outside' | 'outside-left';
  isDisabled?: boolean; 
  fullWidth?: boolean; 
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
  fullWidth = false,
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
  const [error, setError] = useState('');

  const validateDate = (newValue: { dd: string; mm: string; yyyy: string }) => {
    const { dd, mm, yyyy } = newValue;
    const day = parseInt(dd, 10);
    const month = parseInt(mm, 10);
    const year = parseInt(yyyy, 10);

    if (
      isNaN(day) || isNaN(month) || isNaN(year) ||
      day < 1 || day > 31 || month < 1 || month > 12 || yyyy.length !== 4 ||
      (month === 2 && day > 29) || 
      ([4, 6, 9, 11].includes(month) && day > 30) || 
      (month === 2 && day === 29 && (year % 4 !== 0 || (year % 100 === 0 && year % 400 !== 0)))
    ) {
      setError('Please enter a valid date.');
      return false;
    }

    setError('');
    return true;
  };

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

    validateDate(newValue);
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
      setError('');
    }
  };

  const dateinputContainerClass = classNames(
    'dateinput_container',
    `dateinput_container--color-${color}`, 
    `dateinput_container--size-${size}`,
    { 'dateinput_container--disabled': isDisabled },
    { 'dateinput_container--full-width': fullWidth },
    { [`dateinput_container--label-placement-${labelPlacement}`]: labelPlacement === 'outside-left' }
  );

  const dateinputClass = classNames(
    'dateinput',
    `dateinput--variant-${variant}`,
    `dateinput--color-${color}`, 
    `dateinput--size-${size}`,
    `dateinput--radius-${radius}`,
    className
  );

  const dateinputWrapperClass = classNames(
    'dateinput_wrapper',
    `dateinput_wrapper--size-${size}`,
  );

  const dateinputLabelClass = classNames(
    'dateinput_label',
    `dateinput_label--size-${size}`,
  );

  const monthRef = React.createRef<HTMLInputElement>();
  const yearRef = React.createRef<HTMLInputElement>();

  return (
    <div className={dateinputContainerClass}>
      {(labelPlacement === 'outside' || labelPlacement === 'outside-left') && <label className={dateinputLabelClass}>{label}</label>}
      <div className='colflex'>
      <div className={dateinputClass} style={style} {...props}>
        <div className={dateinputWrapperClass}>
          {labelPlacement === 'inside' && <label className={dateinputLabelClass}>{label}</label>}
          <div className='date_wrapper'>
            <input
              type="text"
              placeholder="dd"
              value={inputValue.dd}
              onChange={(e) => handleInputChange(e, 'dd', monthRef)}
              disabled={isDisabled}
              className="dateinput_field dateinput-dd"
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
              className="dateinput_field dateinput-mm"
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
              className="dateinput_field dateinput-yyyy"
              maxLength={4}
            />
            {showCalendarButton && (
              <DatePicker
                selected={calendarDate}
                onChange={handleDateChange}
                customInput={<IoCalendar className="dateinput-calendar-button" />}
                disabled={isDisabled}
              />
            )}
          </div>
        </div>
      </div>
      {error && <div className="dateinput-error">{error}</div>}
      </div>
    </div>
  );
};

export default DateInput;
