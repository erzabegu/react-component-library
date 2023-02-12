import React, { FC, useEffect, useRef, useState } from 'react';
import useClickOutside from '../../hooks/useClickOutside';
import {
  DropdownItemProps,
  DropdownPlacement,
  DropdownProps,
} from './Dropdown.types';
import styles from './index.module.scss';
import { useLockScreen } from '../../hooks';

const Dropdown: FC<DropdownProps> & { Item: typeof DropdownItem } = ({
  triggerRef,
  open,
  onClose,
  placement,
  children,
}: DropdownProps) => {
  const dropdownRef = useRef<HTMLUListElement>(null);
  useLockScreen(open);

  const [dropdownPosition, setDropdownPosition] = useState<DropdownPlacement>({
    top: 'auto',
    bottom: 'auto',
    left: 'auto',
    right: 'auto',
  });

  const updateDropdownStyles = () => {
    if (!dropdownRef.current || !triggerRef) {
      return;
    }
    const triggerRect =
      triggerRef && triggerRef?.current?.getBoundingClientRect();
    const dropdownRect = dropdownRef.current?.getBoundingClientRect();
    if (
      dropdownRect.bottom > window.innerHeight &&
      triggerRect &&
      triggerRect.top > dropdownRect.height
    ) {
      if (triggerRect) {
        setDropdownPosition((prevState) => ({
          ...prevState,
          bottom: `${window.innerHeight - triggerRect.top}px`,
          top: 'auto',
        }));
      }
    } else {
      if (triggerRect) {
        setDropdownPosition((prevState) => ({
          ...prevState,
          top: `${triggerRect.top + triggerRect.height}px`,
        }));
      }
    }
    if (placement === 'bottom-end' && triggerRect) {
      setDropdownPosition((prevState) => ({
        ...prevState,
        left: triggerRect.right,
      }));
    }
    if (placement === 'bottom-start' && triggerRect) {
      setDropdownPosition((prevState) => ({
        ...prevState,
        left: triggerRect.left,
      }));
    }
  };
  useEffect(() => {
    updateDropdownStyles();
  }, [open]);

  useClickOutside(dropdownRef, () => {
    onClose();
  });

  const handleKeydown = (event: React.KeyboardEvent) => {
    if (event.key === 'Esc' || event.key === 'Enter') {
      onClose();
    }
  };
  useEffect(() => {
    if (triggerRef?.current?.id) {
      triggerRef.current.ariaHasPopup = 'true';
    }
  }, [triggerRef?.current]);
  useEffect(() => {
    if (open && dropdownRef) {
      dropdownRef?.current?.querySelector('li')?.focus();
    }
  }, [open]);
  return (
    <div className={[styles.wrapper, open && styles.open].join(' ')}>
      <ul
        aria-labelledby={triggerRef?.current?.id ? triggerRef.current.id : ''}
        style={{
          bottom: dropdownPosition.bottom,
          top: dropdownPosition.top,
          left: dropdownPosition.left,
        }}
        className={[
          styles.dropdown,
          open && styles.open,
          placement === 'bottom-start' ? styles.bottomStart : styles.bottomEnd,
        ].join(' ')}
        ref={dropdownRef}
        onKeyDown={handleKeydown}
        tabIndex={open ? 0 : -1}
      >
        {children}
      </ul>
    </div>
  );
};
const DropdownItem = ({ children, ...rest }: DropdownItemProps) => {
  const listRef = useRef<HTMLLIElement>(null);
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (!listRef.current) return;

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      const nextItem = event.currentTarget.nextSibling as HTMLLIElement;
      if (nextItem) {
        nextItem.focus();
      }
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      const previousItem = event.currentTarget.previousSibling as HTMLLIElement;
      if (previousItem) {
        previousItem.focus();
      }
    }
  };

  return (
    <li
      {...rest}
      className={styles.dropdownItem}
      ref={listRef}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {children}
    </li>
  );
};

Dropdown.Item = DropdownItem;
export default Dropdown;
