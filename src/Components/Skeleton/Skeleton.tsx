import React from 'react';
import classNames from 'classnames';
import './Styles/skeleton.css';

export interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  variant?: 'text' | 'circle' | 'rect' ;
  animation?: 'pulse' | 'wave' | 'none';
  className?: string;
  style?: React.CSSProperties;
}

const Skeleton: React.FC<SkeletonProps> = ({
  width,
  height,
  color = 'default',
  radius = 'sm',
  variant = 'text',
  animation = 'pulse',
  className,
  style,
}) => {
  const skeletonClass = classNames(
    'skeleton',
    `skeleton--variant-${variant}`,
    `skeleton--color-${color}`, 
    `skeleton--radius-${radius}`, 
    { [`skeleton--animation-${animation}`]: animation !== 'none' },
    className
  );

  return (
    <div
      className={skeletonClass}
      style={{ width, height, ...style }}
    />
  );
};

export default Skeleton;
