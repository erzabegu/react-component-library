import React, { FC } from 'react';
import { GridItemProps, GridProps } from './Grid.types';
import styles from './index.module.scss';

const Grid: FC<GridProps> & {
  Item: FC<GridItemProps>;
} = ({ children, spacing, ...rest }: GridProps) => {
  return (
    <div
      style={{ gridGap: spacing && spacing }}
      className={[styles.Grid, rest.className].join(' ')}
    >
      {children}
    </div>
  );
};

const Item: FC<GridItemProps> = ({
  children,
  sm,
  md,
  lg,
  ...rest
}: GridItemProps) => {
  const classSM = {
    1: styles.colSMOne,
    2: styles.colSMTwo,
    3: styles.colSMThree,
    4: styles.colSMFour,
  };

  const classMD = {
    1: styles.colMDOne,
    2: styles.colMDTwo,
    3: styles.colMDThree,
    4: styles.colMDFour,
    5: styles.colMDFive,
    6: styles.colMDSix,
  };

  const classLG = {
    1: styles.colLGOne,
    2: styles.colLGTwo,
    3: styles.colLGThree,
    4: styles.colLGFour,
    5: styles.colLGFive,
    6: styles.colLGSix,
    7: styles.colLGSeven,
    8: styles.colLGEight,
    9: styles.colLGNine,
    10: styles.colLGTen,
    11: styles.colLGEleven,
    12: styles.colLGTwelve,
  };

  return (
    <div
      {...rest}
      className={[
        sm && classSM[sm],
        md && classMD[md],
        lg && classLG[lg],
        rest.className,
      ].join(' ')}
    >
      {children}
    </div>
  );
};

Grid.Item = Item;

export default Grid;
