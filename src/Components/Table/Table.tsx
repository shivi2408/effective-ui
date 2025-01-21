import React from 'react';
import classNames from 'classnames';
import './Styles/table.css';

export interface TableColumn {
  key: string;
  title: string;
  render?: (value: any, record: any, index: number) => React.ReactNode;
  width?: string | number;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export interface TableProps {
  columns: TableColumn[];
  data: any[];
  shadow?: 'none' | 'sm' | 'md' | 'lg';
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  radius?: 'none' | 'sm' | 'md' | 'lg';
  className?: string;
  hideHeader?: boolean; 
  style?: React.CSSProperties;
  onRowClick?: (record: any, index: number) => void;
  striped?: boolean;
  bordered?: boolean;
  cellPadding?: string | number; 
  [x: string]: any;
}

const Table: React.FC<TableProps> = ({
  columns,
  data,
  shadow = 'none',
  color = 'default',
  radius = 'none',
  hideHeader = false,
  className,
  style,
  onRowClick,
  striped = false,
  bordered = true,
  cellPadding = '8px 12px',
  ...props
}) => {
  const tableClass = classNames(
    'table',
    { 'table--striped': striped },
    className
  );

  const containerClass = classNames(
    'table_container', 
    `table_container--shadow-${shadow}`,
    `table_container--color-${color}`, 
    `table_container--radius-${radius}`,
    { 'table_container--bordered': bordered },
  );

  return (
    <div className={containerClass} style={style} {...props}>
      <table className={tableClass}>
      {!hideHeader && ( 
        <thead>
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                style={{ width: col.width, textAlign: col.align || 'left', padding: cellPadding }} // Apply padding here
                className={col.className}
              >
                {col.title}
              </th>
            ))}
          </tr>
        </thead>
        )}
        <tbody>
        {data.length === 0 ? (
          <tr>
            <td colSpan={columns.length} style={{ textAlign: 'center', padding: '55px 12px' }}>
              No data available
            </td>
          </tr>
        ) : (
          data.map((record, index) => (
            <tr
              key={index}
              onClick={() => onRowClick && onRowClick(record, index)}
              className={onRowClick ? 'clickable_row' : ''}
            >
              {columns.map((col) => (
                <td
                  key={col.key}
                  style={{ textAlign: col.align || 'left', padding: cellPadding }}
                  className={col.className}
                >
                  {col.render ? col.render(record[col.key], record, index) : record[col.key]}
                </td>
              ))}
            </tr>
          ))
        )}
      </tbody>

      </table>
    </div>
  );
};

export default Table;
