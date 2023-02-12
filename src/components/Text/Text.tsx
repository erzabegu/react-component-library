import React from 'react';
import { DisplayHeadings, DisplayText } from './Text.type';
import styles from './Text.scss';

const Text = ({
  variant,
  weight,
  display,
  children,
  ...rest
}: DisplayText | DisplayHeadings) => {
  const heading = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
  const checker = (value: string) =>
    heading.some((element) => value.includes(element));

  const headingClassNames = `${styles[weight ?? 'regular']} ${
    styles[`${display ?? 'xxl'}Display`]
  }`;
  const textClassNames = `${styles[weight ?? 'regular']} ${
    styles[`${display ?? 'xl'}Text`]
  }`;

  return React.createElement(
    variant ?? 'h1',
    {
      ...rest,
      className: checker(variant ?? 'h1')
        ? [headingClassNames, rest.className].join(' ')
        : [textClassNames, rest.className].join(' '),
    },
    children
  );
};

export default Text;
