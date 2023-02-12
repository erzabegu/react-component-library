import React, { ReactNode } from 'react';

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  spacing?: number | string;
}

export interface GridItemProps extends React.HTMLAttributes<HTMLDivElement> {
  sm?: 1 | 2 | 3 | 4;
  md?: 1 | 2 | 3 | 4 | 5 | 6;
  lg?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  children: ReactNode;
}
