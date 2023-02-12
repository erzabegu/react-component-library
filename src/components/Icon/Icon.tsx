import React from 'react';
import { IconTypes } from './Icon.types';

const Icon = ({ children, size, ...rest }: IconTypes) => {
  return React.cloneElement(children, {
    width: size,
    height: size,
    ...rest,
  });
};

export default Icon;
