import React from 'react';

export interface IconTypes extends React.HTMLAttributes<SVGElement> {
  children: React.ReactElement;
  size: number;
}
