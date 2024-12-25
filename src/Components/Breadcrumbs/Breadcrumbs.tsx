import React from 'react';
import classNames from 'classnames';
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
  const handleItemClick = (label: string, link?: string) => {
    if (isDisabled || !link) return; 
    if (onClick) {
      onClick(label); 
    }
  };

  const renderBreadcrumbs = () => {
    const visibleItems = maxItems
      ? items.slice(0, maxItems).concat({ label: '...', link: '' }, items.slice(-1))
      : items;

    return visibleItems.map((item, index) => (
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
        {index < visibleItems.length - 1 && (
          <span className="breadcrumb-separator">{separator}</span>
        )}
      </span>
    ));
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
