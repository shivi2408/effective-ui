import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';
import './Styles/modal.css';
import Button from '../Buttons/Button';
import { IoClose } from "react-icons/io5";

export interface ModalProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' ;
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  shadow?: 'none' | 'sm' | 'md' | 'lg';
  placement?: 'auto' | 'top' | 'bottom';
  title?: string;
  backdrop?: 'transparent' | 'opaque' | 'blur';
  scrollBehavior?: 'outside' | 'inside';
  isDismissable?: boolean;
  isKeyboardDismissDisabled?: boolean;
  disableAnimation?: boolean;
  shouldBlockScroll?: boolean;
  open?: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Modal: React.FC<ModalProps> = ({
  size = 'md',
  radius = 'lg',
  shadow = 'sm',
  placement = 'auto',
  title = 'Modal Title',
  backdrop = 'opaque',
  scrollBehavior = 'inside',
  isDismissable = false,
  isKeyboardDismissDisabled = false,
  disableAnimation = false,
  shouldBlockScroll = false,
  open = false,
  onClose,
  children,
  className,
  style
}) => {
  const [isOpen, setIsOpen] = useState(open);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    if (onClose) {
      onClose();
    }
  };

  const handleBackdropClick = (event: MouseEvent) => {
    if (isDismissable && modalRef.current && !modalRef.current.contains(event.target as Node)) {
      handleClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleBackdropClick);
    } else {
      document.removeEventListener('mousedown', handleBackdropClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleBackdropClick);
    };
  }, [isOpen, isDismissable]);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const modalContainerClass = classNames(
    'modal-container',
    `modal-container--backdrop-${backdrop}`,
    `modal-container--scroll-${scrollBehavior}`,
    { 'modal-container--dismissable': isDismissable },
    { 'modal-container--keyboard-dismiss-disabled': isKeyboardDismissDisabled },
    { 'modal-container--disable-animation': disableAnimation },
    { 'modal-container--block-scroll': shouldBlockScroll },
    { 'modal-container--open': isOpen },
  );

  const modalClass = classNames(
    'modal',
    `modal--placement-${placement}`,
    `modal--size-${size}`,
    `modal--radius-${radius}`,
    `modal--shadow-${shadow}`,
    className
  );

  const modalContentClass = classNames(
    'modal-content',
    { 'modal-content--scroll-inside': scrollBehavior === 'inside' },
    { 'modal-content--scroll-outside': scrollBehavior === 'outside' },
  );

  return (
    <>
      <Button onClick={handleOpen} className="open-modal-button">Open Modal</Button>
      {isOpen && (
        <div className={modalContainerClass} style={style}aria-modal="true">
          <div className={modalClass} ref={modalRef}>
            <button onClick={handleClose} aria-label="Close"><IoClose className='close_btn'/></button>
            <h3 className='modal-title'>{title}</h3>
            <div className={modalContentClass}>{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;