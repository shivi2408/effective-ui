import React, { useState } from 'react';
import classNames from 'classnames';
import './Styles/image.css';

export interface ImageProps {
  width?: number;
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  shadow?: 'none' | 'sm' | 'md' | 'lg';
  isZoomed?: boolean;
  isBlurred?: boolean;
  src: string;
  alt: string;
  disableSkeleton?: boolean;
  disableAnimation?: boolean;
  className?: string;
  style?: React.CSSProperties;
  [x: string]: any;
}

const Image: React.FC<ImageProps> = ({
  width = 400,
  radius = 'md',
  shadow = 'none',
  isZoomed = false,
  isBlurred = false,
  src,
  alt,
  disableSkeleton = false,
  disableAnimation = false,
  className,
  style,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const imageContainerClass = classNames(
    'img-container',
    `img-container--radius-${radius}`,
    `img-container--shadow-${shadow}`,
  );
    

  const imageClass = classNames(
    'img',
    { 'img--zoom': isZoomed },
    { 'img--blurred': isBlurred },
    { 'img--loaded': isLoaded || disableSkeleton },
    { 'img--no-animation': disableAnimation },
    className
  );

  return (
    <div
      className={imageContainerClass}
      style={{ width: width, ...style }}
      {...props}
    >
      <img
        src={src}
        alt={alt}
        className={imageClass}
        onLoad={() => setIsLoaded(true)}
      />
      {!isLoaded && !disableSkeleton && (
        <div className="img-skeleton" />
      )}
    </div>
  );
};

export default Image;
