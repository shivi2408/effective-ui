import React, { useState } from 'react';
import classNames from 'classnames'; 
import { IoArrowBackOutline } from "react-icons/io5";
import './Styles/carousel.css';

interface CarouselProps {
  items: React.ReactNode[];
  visibleItems?: number; 
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  carouselWidth?: string;
  borderless?: boolean; 
}

const Carousel: React.FC<CarouselProps> = ({ 
    items,
    visibleItems = 1,
    radius = 'md',
    carouselWidth = '600px', 
    borderless = false, 
}) => {
  const maxVisible = Math.min(visibleItems, 3);
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? items.length - maxVisible : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => 
      prevIndex >= items.length - maxVisible ? 0 : prevIndex + 1
    );
  };

  // Calculate width based on visible items
  const itemWidth = `calc(100% / ${maxVisible} - ${(maxVisible - 1) * 10 / maxVisible}px)`; // Adjust for gap

  const carouselClass = classNames(
    'carousel', 
    `carousel--width`,
  );
  const carouselItemClass = classNames(
      'carousel_item', 
      `carousel_item--radius-${radius}`,
      { 'carousel-item--borderless': borderless }
    );
  return (
    <div className={carouselClass} style={{ width: carouselWidth }}>
      <button className="carousel_btn left" onClick={handlePrev}>
        <IoArrowBackOutline />
      </button>
      <div className="carousel_content fade">
        {items.slice(activeIndex, activeIndex + maxVisible).map((item, index) => (
          <div key={index} className={carouselItemClass} style={{ width: itemWidth }}>
            {item}
          </div>
        ))}
      </div>
      <button className="carousel_btn right" onClick={handleNext}>
        <IoArrowBackOutline />
      </button>
    </div>
  );
};

export default Carousel;
