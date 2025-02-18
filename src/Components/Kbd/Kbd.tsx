import React from 'react';
import './Styles/kbd.css';

const keyMap: { [key: string]: string } = {
    Cmd: '⌘',
    Command: '⌘',
    Control: '^',
    Option: '⌥',
    Shift: '⇧',
    Enter: '↵',
    Tab: '⇥',
    Escape: '⎋',
    Up: '↑',
    Down: '↓',
    Left: '←',
    Right: '→',
    PageUp: 'PgUp',
    PageDown: 'PgDn',
    Home: '⇱',
    End: '⇲',
    Help: '?',
    Space: '␣',
    CapsLock: '⇪'
  };

interface KbdProps {
  keys?: 'Command' | 'Shift' | 'Control' | 'Option' | 'Enter' | 'Delete' | 'Esc' | 'Tab' | 'CapsLock' | 'Up' | 'Right' | 'Down' | 'Left' | 'PageUp' | 'PageDown' | 'Home' | 'End' | 'Help' | 'Space' | string[]; 
  children?: React.ReactNode;
}


const Kbd: React.FC<KbdProps> = ({ keys = 'Command', children }) => {
  const renderKey = (key: string) => {
    return <kbd key={key}>{keyMap[key] || key}</kbd>;
  };

  return (
    <span className="kbd-group">
      {Array.isArray(keys) 
        ? keys.map((key, index) => (
            <React.Fragment key={index}>
              {renderKey(key)}
              {index < keys.length - 1 && <span className="kbd-separator">+</span>}
            </React.Fragment>
          ))
        : renderKey(keys)}
      {children && <span className="kbd-children">{children}</span>}
    </span>
  );
};

export default Kbd;
