import React from 'react';
import classNames from 'classnames';
import './Styles/appbar.css';

export interface AppBarProps {
  logo: React.ReactNode; // Logo element or image.
  menuItems: Array<{ label: string; onClick: () => void }>; // Menu items.
  responsiveBreakpoint?: number; // Breakpoint for menu collapse.
  className?: string; // Custom CSS classes.
  style?: React.CSSProperties; // Inline styles.
  userMenu?: Array<{ label: string; onClick: () => void }>; // User menu items.
}

const AppBar: React.FC<AppBarProps> = ({
  logo,
  menuItems,
  responsiveBreakpoint = 768,
  className,
  style,
  userMenu = [],
}) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = React.useState(false);

  const appBarClass = classNames('appbar', className);
  const menuClass = classNames('appbar-menu', { 'appbar-menu-open': isMenuOpen });
  const userMenuClass = classNames('appbar-user-menu', { 'appbar-user-menu-open': isUserMenuOpen });

  return (
    <header className={appBarClass} style={style}>
      <div className="appbar-logo">{logo}</div>
      <button
        className="appbar-toggle"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>
      <nav className={menuClass}>
        {menuItems.map((item, index) => (
          <button
            key={index}
            className="appbar-menu-item"
            onClick={item.onClick}
          >
            {item.label}
          </button>
        ))}
      </nav>
      <div className="appbar-user">
        <button
          className="appbar-user-icon"
          onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
          aria-label="User settings"
        >
          👤
        </button>
        {isUserMenuOpen && (
          <div className={userMenuClass}>
            {userMenu.map((item, index) => (
              <button
                key={index}
                className="appbar-user-menu-item"
                onClick={item.onClick}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default AppBar;
