import React, { useState } from "react";
import classNames from "classnames";
import "./Styles/tabs.css";

export interface TabItem {
  label: string;
  content: React.ReactNode; 
}

export interface TabsProps {
  items: TabItem[];
  defaultActiveIndex?: number;
  variant?: 'solid' | 'underlined' | 'bordered' | 'light';
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  isDisabled?: boolean;
  isVertical?: boolean; 
  fullWidth?: boolean; 
  className?: string;
  style?: React.CSSProperties;
  onTabChange?: (index: number) => void;
  disabledKeys?: string[];
}

const Tabs: React.FC<TabsProps> = ({ 
    items, 
    variant = 'light',
    color = 'primary',
    size = 'md',
    radius = 'md',
    isDisabled = false,
    isVertical = false,
    fullWidth = false,
    className,
    style,
    defaultActiveIndex = 0, 
    onTabChange,
    disabledKeys = [] 
}) => {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);

  const handleTabClick = (index: number) => {
    if (!isDisabled && !disabledKeys.includes(items[index].label)) {
      setActiveIndex(index);
      if (onTabChange) onTabChange(index);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (isDisabled) return;
  
    let newIndex = activeIndex;
  
    const isTabDisabled = (index: number) => disabledKeys.includes(items[index].label);
  
    switch (event.key) {
      case "ArrowRight":
      case "ArrowDown":
        do {
          newIndex = (newIndex + 1) % items.length;
        } while (isTabDisabled(newIndex));
        break;
  
      case "ArrowLeft":
      case "ArrowUp":
        do {
          newIndex = (newIndex - 1 + items.length) % items.length;
        } while (isTabDisabled(newIndex));
        break;
  
      case "Home":
        newIndex = 0;
        while (newIndex < items.length && isTabDisabled(newIndex)) {
          newIndex++;
        }
        break;
  
      case "End":
        newIndex = items.length - 1;
        while (newIndex >= 0 && isTabDisabled(newIndex)) {
          newIndex--;
        }
        break;
  
      default:
        return;
    }
  
    setActiveIndex(newIndex);
    if (onTabChange) onTabChange(newIndex);
  };
  

  const tabContainerClass = classNames(
    "tabs_container",
    { "tabs_container--vertical": isVertical }
  );
    const tabListClass = classNames(
      'tab_list',
      `tab_list--variant-${variant}`,
      `tab_list--color-${color}`,
      `tab_list--radius-${radius}`,
      `tab_list--size-${size}`,
      { 'tab_list--disabled': isDisabled },
      { 'tab_list--vertical': isVertical},
      { 'tab_list--full-width': fullWidth },
      className
    );


    return (
        <div className={tabContainerClass}>
          <div className={tabListClass}
          role="tablist"
          aria-orientation="horizontal"
          onKeyDown={handleKeyDown} 
          >
            {items.map((item, index) => {
              const isTabDisabled = isDisabled || disabledKeys.includes(item.label);
              const tabClass = classNames(
                "tab",
                `tab--radius-${radius}`,
                { "active-tab": activeIndex === index },
                { "tab--disabled": isTabDisabled }
              );
    
              return (
                <button
                  key={index}
                  className={tabClass}
                  onClick={() => handleTabClick(index)}
                  disabled={isTabDisabled} 
                  role="tab"
                  tabIndex={activeIndex === index ? 0 : -1} 
                  aria-selected={activeIndex === index}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
          <div className="tab_content">{items[activeIndex].content}</div>
        </div>
      );
    };

export default Tabs;
