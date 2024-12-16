import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';

import './Styles/calendar.css';

export interface CalendarProps {
  color?: 'default' | 'primary' | 'dark';
  className?: string;
  style?: React.CSSProperties;
  showShadow?: boolean;
  hideDisabledDates?: boolean;
  showMonthAndYearPickers?: boolean;
  visibleMonths?: number;
  weekdayStyle?: 'narrow' | 'short' | 'long';
  disableAnimation?: boolean;
  onDateSelect?: (date: Date) => void; // Callback for selected date
}

const Calendar: React.FC<CalendarProps> = ({
  color = 'dark',
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
  const [selectedDay, setSelectedDay] = useState(currentDate.getDate()); // Track selected day
  const [pickerOpen, setPickerOpen] = useState(false); // Toggle month/year picker
  const [selectedMonth, setSelectedMonth] = useState(currentDate.getMonth());
  const [selectedYear, setSelectedYear] = useState(currentDate.getFullYear());

  const daysOfWeek = Array.from({ length: 7 }, (_, i) =>
    new Date(2023, 0, i + 1).toLocaleString('default', {
      weekday: weekdayStyle,
    })
  );

  // Get the current date's day
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  useEffect(() => {
    // Set the selected day to the current day when the month changes
    setSelectedDay(currentDate.getDate());
  }, [currentDate]);

  // Function to change the current month
  const changeMonth = (step: number) => {
    setCurrentDate((prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() + step, 1));
  };

  // Generate the days for the current month
  const generateCalendar = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const prevMonthDays = new Date(year, month, 0).getDate();

    const days = [];
    // Previous Month Days
    if (!hideDisabledDates) {
      for (let i = firstDay; i > 0; i--) {
        days.push(
          <div key={`prev-${i}`} className="calendar-day inactive">
            {prevMonthDays - i + 1}
          </div>
        );
      }
    }
    // Current Month Days
    for (let day = 1; day <= daysInMonth; day++) {
      const isSelected = day === selectedDay;
      const isCurrentDay = day === currentDay && month === currentMonth && year === currentYear;

      days.push(
        <div
          key={`day-${day}`}
          className={classNames('calendar-day', {
            'calendar-day-selected': isSelected,
            'calendar-day-current': isCurrentDay, // Always highlight current day
          })}
          onClick={() => {
            setSelectedDay(day);
            onDateSelect && onDateSelect(new Date(date.getFullYear(), date.getMonth(), day));
          }}
        >
          {day}
        </div>
      );
    }

    return days;
  };

  // Open Month/Year Picker
  const togglePicker = () => {
    setSelectedMonth(currentDate.getMonth());
    setSelectedYear(currentDate.getFullYear());
    setPickerOpen(!pickerOpen);
  };

  // Apply selected month/year
  const applyMonthYear = () => {
    setCurrentDate(new Date(selectedYear, selectedMonth, 1));
    setPickerOpen(false);
  };

  const calendarClass = classNames(
    'calendar',
    `calendar-${color}`,
    {
      'calendar-shadow': showShadow,
      'calendar-no-animation': disableAnimation,
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
          <div key={`month-${index}`} className="calendar-month">
            {/* Header */}
            <div className="calendar-header">
              {index === 0 && (
                <button
                  className="calendar-nav"
                  onClick={() => changeMonth(-1)}
                  aria-label="Previous Month"
                >
                  <IoIosArrowDropleft size={24} />
                </button>
              )}
              <span className="calendar-title" onClick={togglePicker}>
                {showMonthAndYearPickers
                  ? displayDate.toLocaleString('default', {
                      month: 'long',
                      year: 'numeric',
                    })
                  : `${displayDate.getMonth() + 1} / ${displayDate.getFullYear()}`}
              </span>
              {index === visibleMonths - 1 && (
                <button
                  className="calendar-nav"
                  onClick={() => changeMonth(1)}
                  aria-label="Next Month"
                >
                  <IoIosArrowDropright size={24} />
                </button>
              )}
            </div>

            {/* Month/Year Picker */}
            {pickerOpen && index === 0 && (
              <div className="calendar-picker">
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
            <div className="calendar-days">
              {daysOfWeek.map((day, i) => (
                <div key={`day-name-${i}`} className="calendar-day-name">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Grid */}
            <div className="calendar-grid">{generateCalendar(displayDate)}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Calendar;
