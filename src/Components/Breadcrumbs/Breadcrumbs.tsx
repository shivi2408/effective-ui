import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';
import { FaEllipsis } from "react-icons/fa6";
import './Styles/breadcrumbs.css';

export interface BreadcrumbsProps {
  items: { label: string; link?: string }[];
  separator?: string;
  maxItems?: number;
  isDisabled?: boolean;
  variant?: 'light' | 'solid' | 'bordered';
  onClick?: (label: string) => void;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  separator = '>',
  maxItems,
  isDisabled = false,
  variant = 'light',
  onClick,
}) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleItemClick = (label: string, link?: string) => {
    console.log(`Item clicked: ${label}`);
    if (isDisabled || !link) return;
    if (onClick) {
      onClick(label);
    }
  };

  const handleEllipsisClick = () => {
    setIsDropdownVisible((prev) => !prev);
  };

  const renderBreadcrumbs = () => {
    if (!maxItems || items.length <= maxItems || maxItems < 3) {
      return items.map((item, index) => (
        <span key={index} className="breadcrumb-item">
          {item.link ? (
            <a
              href={isDisabled ? undefined : item.link}
              className={classNames('breadcrumb-link', {
                'breadcrumb-link-disabled': isDisabled,
              })}
              onClick={(e) => {
                e.preventDefault();
                handleItemClick(item.label, item.link);
              }}
            >
              {item.label}
            </a>
          ) : (
            <span className="breadcrumb-label">{item.label}</span>
          )}
          {index < items.length - 1 && (
            <span className="breadcrumb-separator">{separator}</span>
          )}
        </span>
      ));
    }

    const visibleStart = items.slice(0, Math.ceil((maxItems - 1) / 2));
    const visibleEnd = items.slice(-Math.floor((maxItems - 1) / 2));
    const hiddenItems = items.slice(Math.ceil((maxItems - 1) / 2), -Math.floor((maxItems - 1) / 2));

    return (
      <>
        {visibleStart.map((item, index) => (
          <span key={`start-${index}`} className="breadcrumb-item">
            {item.link ? (
              <a
                href={isDisabled ? undefined : item.link}
                className={classNames('breadcrumb-link', {
                  'breadcrumb-link-disabled': isDisabled,
                })}
                onClick={(e) => {
                  e.preventDefault();
                  handleItemClick(item.label, item.link);
                }}
              >
                {item.label}
              </a>
            ) : (
              <span className="breadcrumb-label">{item.label}</span>
            )}
            <span className="breadcrumb-separator">{separator}</span>
          </span>
        ))}
        <span className="breadcrumb-item breadcrumb-ellipsis" onClick={handleEllipsisClick} ref={dropdownRef}>
        <FaEllipsis size={18}/>
          {isDropdownVisible && (
            <div className="breadcrumb-dropdown">
              {hiddenItems.map((item, index) => (
                <div
                  key={`hidden-${index}`}
                  className="breadcrumb-dropdown-item"
                  onClick={() => handleItemClick(item.label, item.link)}
                >
                  {item.label}
                </div>
              ))}
            </div>
          )}
        </span>
        {visibleEnd.map((item, index) => (
          <span key={`end-${index}`} className="breadcrumb-item">
            <span className="breadcrumb-separator">{separator}</span>
            {item.link ? (
              <a
                href={isDisabled ? undefined : item.link}
                className={classNames('breadcrumb-link', {
                  'breadcrumb-link-disabled': isDisabled,
                })}
                onClick={(e) => {
                  e.preventDefault();
                  handleItemClick(item.label, item.link);
                }}
              >
                {item.label}
              </a>
            ) : (
              <span className="breadcrumb-label">{item.label}</span>
            )}
          </span>
        ))}
      </>
    );
  };

  return (
    <div
      className={classNames('breadcrumbs-container', {
        'breadcrumbs-light': variant === 'light',
        'breadcrumbs-solid': variant === 'solid',
        'breadcrumbs-bordered': variant === 'bordered',
      })}
    >
      {renderBreadcrumbs()}
    </div>
  );
};

export default Breadcrumbs;
