import React from 'react';
import styles from './index.module.scss';
import { ButtonGroupTypes } from './ButtonGroup.types';

const ButtonGroups = ({ children, ...rest }: ButtonGroupTypes) => {
  return (
    <div className={styles.buttonGroups} {...rest}>
      {children}
    </div>
  );
};

export default ButtonGroups;
