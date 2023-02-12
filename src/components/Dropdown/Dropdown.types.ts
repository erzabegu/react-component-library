import React, { RefObject } from 'react';

export interface DropdownProps extends React.HTMLAttributes<HTMLUListElement> {
  triggerRef: RefObject<HTMLButtonElement> | undefined;
  open: boolean;
  onClose: (e?: MouseEvent | TouchEvent) => void;
  placement: 'bottom-start' | 'bottom-end';
  children: React.ReactNode;
}

export interface DropdownItemProps extends React.HTMLAttributes<HTMLLIElement> {
  children: React.ReactNode;
}

export interface DropdownPlacement {
  top: string | number;
  left: string | number;
  right: string | number;
  bottom: string | number;
}
