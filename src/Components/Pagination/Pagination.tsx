import React, { useState } from 'react';
import classNames from 'classnames'; 
import { IoIosArrowForward } from "react-icons/io";
import { FaEllipsis } from "react-icons/fa6";
import './Styles/pagination.css';

interface PaginationProps {
  variant?: 'light' | 'flat' | 'faded' | 'bordered';
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  total: number;
  siblings?: number;
  boundaries?: number;
  initialPage?: number;
  onPageChange?: (page: number) => void;
  disableCursorAnimation?: boolean;
  isCompact?: boolean;
  showControls?: boolean;
  isDisabled?: boolean;
  showShadow?: boolean;
}

const Pagination: React.FC<PaginationProps> = ({
  variant = 'flat',
  color = 'default',
  size = 'md',
  radius = 'md',
  total,
  siblings = 1,
  boundaries = 1,
  initialPage = 1,
  onPageChange,
  disableCursorAnimation = false,
  isCompact = false,
  showControls = true,
  isDisabled = false,
  showShadow = false,
}) => {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const handleClick = (page: number) => {
    if (page < 1 || page > total) return;
    setCurrentPage(page);
    onPageChange?.(page);
  };

  const getPages = () => {
    const pages = [];
    const start = Math.max(2, currentPage - siblings);
    const end = Math.min(total - 1, currentPage + siblings);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  };

  const paginationClass = classNames(
    'pagination',
    `pagination--variant-${variant}`,
    `pagination--radius-${radius}`,
    { 'pagination--compact': isCompact },
    { 'pagination--no-animation': disableCursorAnimation },
    { 'pagination--disabled': isDisabled },
  );

  const pageItemClass = (page?: number) =>
    classNames(
      'pagination-item',
      `pagination-item--variant-${variant}`,
      `pagination-item--color-${color}`,
      `pagination-item--size-${size}`,
      `pagination-item--radius-${radius}`,
      { 'pagination-item--shadow': showShadow },
      { 'pagination-item--active': currentPage === page }
    );

  return (
    <div className={paginationClass}>
      {showControls && (
        <span
          className={classNames(pageItemClass(), 'pagination-control', 'pagination-control--prev', {
            'pagination-control--disabled': currentPage === 1,
          })}
          onClick={() => handleClick(currentPage - 1)}
          style={{transform: 'rotate(180deg)'}}
        >
        <IoIosArrowForward />
        </span>
      )}
      <span className={pageItemClass(1)} onClick={() => handleClick(1)}>
        1
      </span>
      {currentPage > siblings + boundaries + 1 && (
        <span className={classNames(pageItemClass(), 'pagination-ellipsis')}><FaEllipsis /></span>
      )}
      {getPages().map((page) => (
        <span key={page} className={pageItemClass(page)} onClick={() => handleClick(page)}>
          {page}
        </span>
      ))}
      {currentPage < total - siblings - boundaries && (
        <span className={classNames(pageItemClass(), 'pagination-ellipsis')}><FaEllipsis /></span>
      )}
      <span className={pageItemClass(total)} onClick={() => handleClick(total)}>
        {total}
      </span>
      {showControls && (
        <span
          className={classNames(pageItemClass(), 'pagination-control', 'pagination-control--next', {
            'pagination-control--disabled': currentPage === total,
          })}
          onClick={() => handleClick(currentPage + 1)}
        >
        <IoIosArrowForward />
        </span>
      )}
    </div>
  );
};

export default Pagination;
