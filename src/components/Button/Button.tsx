import React, { forwardRef } from 'react';
import styles from './index.module.scss';
import { ButtonProps } from './Button.types';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ color, children, size, iconBefore, iconAfter, ...rest }, ref) => {
    return (
      <button
        {...rest}
        tabIndex={0}
        ref={ref}
        aria-label={typeof children === 'string' ? children : ''}
        className={[
          styles.button,
          styles[`btn-${color}`],
          styles[size],
          (iconAfter || iconBefore) && !children && styles[`icon-${size}`],
        ].join(' ')}
      >
        {iconBefore && iconBefore}
        {children}
        {iconAfter && iconAfter}
      </button>
    );
  }
);
Button.displayName = 'Button';
export default Button;
