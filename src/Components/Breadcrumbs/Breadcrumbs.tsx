import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';
import { FaEllipsis } from "react-icons/fa6";
import './Styles/breadcrumbs.css';

export interface BreadcrumbsProps {
  items: { label: string; link?: string }[];
  variant?: 'solid' | 'bordered' | 'light';
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  underline?: 'none' | 'hover' | 'always' | 'active' | 'focus';
  separator?: string;
  maxItems?: number;
  itemsBeforeCollapse?: number;
  itemsAfterCollapse?: number;
  isDisabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  onClick?: (label: string) => void;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  variant = 'light',
  color = 'default',
  size = 'md',
  underline = 'hover',
  separator = '>',
  maxItems,
  itemsBeforeCollapse = 1,
  itemsAfterCollapse = 1,
  isDisabled = false,
  className,
  style,
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
    if (isDisabled || !link) return;
    onClick && onClick(label);
  };

  const handleEllipsisClick = () => {
    setIsDropdownVisible((prev) => !prev);
  };

  const breadcrumbClass = classNames(
    'breadcrumbs',
    `breadcrumbs--variant-${variant}`,
    `breadcrumbs--color-${color}`,
    `breadcrumbs--size-${size}`,
    { 'breadcrumbs--disabled': isDisabled },
    className
  );

  const breadcrumbItemClass = classNames('breadcrumb-item');
  const breadcrumbLinkClass = (linkDisabled: boolean) =>
    classNames(
      'breadcrumb-link', 
      `breadcrumbs-link--underline-${underline}`,
      { 'breadcrumb-link--disabled': linkDisabled });
  const breadcrumbSeparatorClass = classNames('breadcrumb-separator');
  const breadcrumbEllipsisClass = classNames('breadcrumb-ellipsis');
  const breadcrumbDropdownClass = classNames('breadcrumb-dropdown');

  const renderBreadcrumbs = () => {
    if (!maxItems || items.length <= maxItems || maxItems < 3) {
      return items.map((item, index) => (
        <span key={index} className={breadcrumbItemClass}>
          {item.link ? (
            <a
              href={isDisabled ? undefined : item.link}
              className={breadcrumbLinkClass(isDisabled)}
              onClick={(e) => {
                e.preventDefault();
                handleItemClick(item.label, item.link);
              }}
            >
              {item.label}
            </a>
          ) : (
            <span>{item.label}</span>
          )}
          {index < items.length - 1 && (
            <span className={breadcrumbSeparatorClass}>{separator}</span>
          )}
        </span>
      ));
    }

    const visibleStart = items.slice(0, itemsBeforeCollapse);
    const visibleEnd = items.slice(-itemsAfterCollapse);
    const hiddenItems = items.slice(itemsBeforeCollapse, -itemsAfterCollapse);

    return (
      <>
        {visibleStart.map((item, index) => (
          <span key={`start-${index}`} className={breadcrumbItemClass}>
            {item.link ? (
              <a
                href={isDisabled ? undefined : item.link}
                className={breadcrumbLinkClass(isDisabled)}
                onClick={(e) => {
                  e.preventDefault();
                  handleItemClick(item.label, item.link);
                }}
              >
                {item.label}
              </a>
            ) : (
              <span>{item.label}</span>
            )}
            <span className={breadcrumbSeparatorClass}>{separator}</span>
          </span>
        ))}
        <span className={breadcrumbEllipsisClass} onClick={handleEllipsisClick} ref={dropdownRef}>
          <FaEllipsis size={18} />
          {isDropdownVisible && (
            <div className={breadcrumbDropdownClass}>
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
          <span key={`end-${index}`} className={breadcrumbItemClass}>
            <span className={breadcrumbSeparatorClass}>{separator}</span>
            {item.link ? (
              <a
                href={isDisabled ? undefined : item.link}
                className={breadcrumbLinkClass(isDisabled)}
                onClick={(e) => {
                  e.preventDefault();
                  handleItemClick(item.label, item.link);
                }}
              >
                {item.label}
              </a>
            ) : (
              <span>{item.label}</span>
            )}
          </span>
        ))}
      </>
    );
  };

  return (
    <nav className={breadcrumbClass} style={style}>
      {renderBreadcrumbs()}
    </nav>
  );
};

export default Breadcrumbs;
