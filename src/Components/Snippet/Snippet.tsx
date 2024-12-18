import React, { useState } from 'react';
import { GoCopy } from "react-icons/go";
import { MdOutlineLibraryAddCheck  } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import { IoCodeSlash } from "react-icons/io5";
import classNames from 'classnames';
import './Styles/snippet.css'; 

export interface SnippetProps { 
  code: string; 
  className?: string; 
  style?: React.CSSProperties; 
}

const Snippet: React.FC<SnippetProps> = ({ code, className, style }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 4000);
  };

  return (
    <div className={classNames('snippet-container', className)} style={style}>
      <span className="snippet-command">
        <span className="snippet-dollar"><IoCodeSlash size={18}/></span> {code}
      </span>
      <button className="snippet-copy-button" onClick={handleCopy} aria-label="Copy">
        {copied ? <FaCheck  className="icon-copied" /> : <GoCopy className="icon-copy" />}
      </button>
    </div>
  );
};

export default Snippet;
