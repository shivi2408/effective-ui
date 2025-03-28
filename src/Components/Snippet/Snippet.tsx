import React, { useState } from 'react';
import { FaCheck } from "react-icons/fa6";
import { FiClipboard } from "react-icons/fi";
import { IoCodeSlash } from "react-icons/io5";
import classNames from 'classnames';
import './Styles/snippet.css'; 

export interface SnippetProps {
  variant?: 'flat'| 'solid' |'bordered' | 'shadow' ;
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  symbol: string;
  code: string; 
  className?: string; 
  style?: React.CSSProperties; 
}

const Snippet: React.FC<SnippetProps> = ({ 
  variant = 'flat',
  color = 'default',
  size = 'md',
  radius = 'md',
  symbol = '$',
  code,
  className, 
  style }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  
  const snippetClass = classNames(
    'snippet',
    `snippet--variant-${variant}`,
    `snippet--color-${color}`,
    `snippet--size-${size}`, 
    `snippet--radius-${radius}`,
    className
  );

  const snippetSymbolClass = classNames(
    'snippet_symbol',
    className
  );

  const snippetCopyClass = classNames(
    'snippet_copy',
    { 'snippet_copy--copied': copied }
  );

  const snippetCommandClass = classNames(
    'snippet_command',
  );
  return (
    <div className={snippetClass} style={style}>
      <span className={snippetSymbolClass}>{symbol}</span>
      <span >{code}</span>
      <button
        className={snippetCopyClass}
        onClick={handleCopy}
        aria-label="Copy"
      >
        {copied ? <FaCheck className="icon-copied" /> : <FiClipboard className="icon-copy" />}
      </button>
    </div>
  );
};

export default Snippet;