import React from 'react';
import classNames from 'classnames'; // Optional for handling dynamic class names.
import './Styles/colors.css';

export interface ColorsProps {
  variant?: 
    | 'app'
    | 'blue'
    | 'purple'
    | 'green'
    | 'red'
    | 'pink'
    | 'yellow'
    | 'cyan'
    | 'layout'
    | 'content'
    | 'base'
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger';
  className?: string; 
}

type VariantType =
| 'app'
| 'blue'
| 'purple'
| 'green'
| 'red'
| 'pink'
| 'yellow'
| 'cyan'
| 'layout'
| 'content'
| 'base'
| 'default'
| 'primary'
| 'secondary'
| 'success'
| 'warning'
| 'danger';

const Colors: React.FC<ColorsProps> = ({
  variant = 'app',
  ...props
}) => {

  const colorsClass = classNames(
    'color-group',
    `color-group-${variant}`
  );

  return (
    <div className={colorsClass} {...props}>
      <h3>{variant.charAt(0).toUpperCase() + variant.slice(1)} Colors</h3>
      <div className="color-grid">
        {getColorList(variant).map((color) => (
          <div 
            key={color} 
            className="color-block" 
            style={{ backgroundColor: color }}>
            {color}
          </div>
        ))}
      </div>
    </div>
  );
};

const colors: Record<VariantType, string[]> = {
    app: ['#FFFFFF', '#000000'],
    blue: [
      '#E6F1FE', '#CCE3FD', '#99C7FB', '#66AAF9', '#338EF7',
      '#006FEE', '#005BC4', '#004493', '#002E62', '#001731'
    ],
    purple: [
      '#F2EAFA', '#E4D4F4', '#C9A9E9', '#AE7EDE', '#9353D3',
      '#7828C8', '#6020A0', '#481878', '#301050', '#180828'
    ],
    green: [
      '#E8FAF0', '#D1F4E0', '#A2E9C1', '#74DFA2', '#45D483',
      '#17C964', '#12A150', '#0E793C', '#095028', '#052814'
    ],
    red: [
      '#FEE7EF', '#FDD0DF', '#FAA0BF', '#F871A0', '#F54180',
      '#F31260', '#C20E4D', '#920B3A', '#610726', '#310413'
    ],
    pink: [
      '#FFEDFA', '#FFDCF5', '#FFB8EB', '#FF95E1', '#FF71D7',
      '#FF4ECD', '#CC3EA4', '#992F7B', '#661F52', '#331029'
    ],
    yellow: [
      '#FEFCE8', '#FDEDD3', '#FBDBA7', '#F9C97C', '#F7B750',
      '#F5A524', '#C4841D', '#936316', '#62420E', '#312107'
    ],
    cyan: [
      '#F0FCFF', '#E6FAFE', '#D7F8FE', '#C3F4FD', '#A5EEFD',
      '#7EE7FC', '#06B7DB', '#09AACD', '#0E8AAA', '#053B48'
    ],
    layout: [
      '#FFFFFF', '#000000', '#d4d4d8', '#006FEE'
    ],
    content: [
      '#fafafa', '#f4f4f5', '#e5e4e6', '#d4d4d8'
    ],
    base: [
      '#d4d4d8', '#006FEE', '#7828C8', '#17C964', '#F5A524',
      '#F31260'
    ],
    default: [
      '#fafafa', '#f4f4f5', '#e5e4e6', '#d4d4d8', '#a1a0ab',
      '#70707a', '#53525a', '#3e3e46', '#26262a', '#18191a'
    ],
    primary: [
      '#E6F1FE', '#CCE3FD', '#99C7FB', '#66AAF9', '#338EF7',
      '#006FEE', '#005BC4', '#004493', '#002E62', '#001731'
    ],
    secondary: [
      '#F2EAFA', '#E4D4F4', '#C9A9E9', '#AE7EDE', '#9353D3',
      '#7828C8', '#6020A0', '#481878', '#301050', '#180828'
    ],
    success: [
      '#E8FAF0', '#D1F4E0', '#A2E9C1', '#74DFA2', '#45D483',
      '#17C964', '#12A150', '#0E793C', '#095028', '#052814'
    ],
    warning: [
      '#FEFCE8', '#FDEDD3', '#FBDBA7', '#F9C97C', '#F7B750',
      '#F5A524', '#C4841D', '#936316', '#62420E', '#312107'
    ],
    danger: [
      '#FEE7EF', '#FDD0DF', '#FAA0BF', '#F871A0', '#F54180',
      '#F31260', '#C20E4D', '#920B3A', '#610726', '#310413'
    ],
  };
  
  const getColorList = (variant: VariantType): string[] => {
    return colors[variant];
  };

export default Colors;
