import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';

import './Styles/calendar.css';

export interface CalendarProps {
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'theme';
  className?: string;
  style?: React.CSSProperties;
  showShadow?: boolean;
  hideDisabledDates?: boolean;
  showMonthAndYearPickers?: boolean;
  visibleMonths?: number;
  weekdayStyle?: 'narrow' | 'short' | 'long';
  disableAnimation?: boolean;
  onDateSelect?: (date: Date) => void;
}

const Calendar: React.FC<CalendarProps> = ({
  color = 'theme',
  className,
  style,
  showShadow = false,
  hideDisabledDates = false,
  showMonthAndYearPickers = true,
  visibleMonths = 1,
  weekdayStyle = 'short',
  disableAnimation = false,
  onDateSelect,
}) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null); // Updated to null initially
  const [pickerOpen, setPickerOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState(currentDate.getMonth());
  const [selectedYear, setSelectedYear] = useState(currentDate.getFullYear());

  const daysOfWeek = Array.from({ length: 7 }, (_, i) =>
    new Date(2023, 0, i + 1).toLocaleString('default', {
      weekday: weekdayStyle,
    })
  );

  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  useEffect(() => {
    setSelectedMonth(currentDate.getMonth());
    setSelectedYear(currentDate.getFullYear());
  }, [currentDate]);

  const changeMonth = (step: number) => {
    setCurrentDate((prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() + step, 1));
    setSelectedDate(null); // Reset selected date when changing months
  };

  const generateCalendar = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const prevMonthDays = new Date(year, month, 0).getDate();
  
    const days = [];
  
    // Add days from the previous month
    for (let i = firstDay; i > 0; i--) {
      days.push(
        <div
          key={`prev-${i}`}
          className={classNames('calendar_day inactive', {
            'calendar_day_hidden': hideDisabledDates,
          })}
        >
          {prevMonthDays - i + 1}
        </div>
      );
    }
  
    // Add days of the current month
    for (let day = 1; day <= daysInMonth; day++) {
      const isSelected =
        selectedDate &&
        selectedDate.getDate() === day &&
        selectedDate.getMonth() === month &&
        selectedDate.getFullYear() === year;
  
      const isCurrentDay =
        day === currentDay &&
        month === currentMonth &&
        year === currentYear;
  
      days.push(
        <div
          key={`day_${day}`}
          className={classNames('calendar_day', {
            calendar_day_selected: isSelected,
            calendar_day_current: isCurrentDay , // Only highlight today if no date is selected
          })}
          onClick={() => {
            setSelectedDate(new Date(year, month, day)); // User selects a specific day
            onDateSelect && onDateSelect(new Date(year, month, day));
          }}
        >
          {day}
        </div>
      );
    }
  
    // Add days from the next month to fill the grid
    const remainingCells = (7 - (days.length % 7)) % 7;
    for (let i = 1; i <= remainingCells; i++) {
      days.push(
        <div
          key={`next-${i}`}
          className={classNames('calendar_day inactive', {
            'calendar_day_hidden': hideDisabledDates,
          })}
        >
          {i}
        </div>
      );
    }
  
    return days;
  };
  

  const togglePicker = () => {
    setSelectedMonth(currentDate.getMonth());
    setSelectedYear(currentDate.getFullYear());
    setPickerOpen(!pickerOpen);
  };

  const applyMonthYear = () => {
    setCurrentDate(new Date(selectedYear, selectedMonth, 1));
    setPickerOpen(false);
    setSelectedDate(null); // Reset selected date when month/year changes
  };

  const calendarClass = classNames(
    'calendar',
    `calendar--color-${color}`,
    {
      'calendar--shadow': showShadow,
      'calendar--no_animation': disableAnimation,
    },
    className
  );

  return (
    <div className={calendarClass} style={style}>
      {/* Render multiple months */}
      {Array.from({ length: visibleMonths }).map((_, index) => {
        const displayDate = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth() + index,
          1
        );

        return (
          <div key={`month-${index}`} className="calendar_month">
            {/* Header */}
            <div className="calendar_header">
              {index === 0 && (
                <button
                  className="calendar_nav"
                  onClick={() => changeMonth(-1)}
                  aria-label="Previous Month"
                >
                  <IoIosArrowDropleft size={24} />
                </button>
              )}
              <span className="calendar_title" onClick={togglePicker}>
                {showMonthAndYearPickers
                  ? displayDate.toLocaleString('default', {
                      month: 'long',
                      year: 'numeric',
                    })
                  : `${displayDate.getMonth() + 1} / ${displayDate.getFullYear()}`}
              </span>
              {index === visibleMonths - 1 && (
                <button
                  className="calendar_nav"
                  onClick={() => changeMonth(1)}
                  aria-label="Next Month"
                >
                  <IoIosArrowDropright size={24} />
                </button>
              )}
            </div>

            {pickerOpen && index === 0 && (
              <div className="calendar_picker">
                <select
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(parseInt(e.target.value, 10))}
                >
                  {Array.from({ length: 12 }).map((_, i) => (
                    <option key={i} value={i}>
                      {new Date(2023, i, 1).toLocaleString('default', {
                        month: 'long',
                      })}
                    </option>
                  ))}
                </select>
                <input
                  type="number"
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(parseInt(e.target.value, 10))}
                />
                <button onClick={applyMonthYear}>Apply</button>
              </div>
            )}

            {/* Days of the Week */}
            <div className="calendar_days">
              {daysOfWeek.map((day, i) => (
                <div key={`day-name-${i}`} className="calendar-day-name">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Grid */}
            <div className="calendar_grid">{generateCalendar(displayDate)}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Calendar;
