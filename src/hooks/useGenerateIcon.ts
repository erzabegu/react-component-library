import React from 'react';

type IconProps = React.SVGAttributes<SVGElement>;

const useGenerateIcon = ({ ...props }: IconProps) => {
  return React.createElement('svg', { ...props });
};
export default useGenerateIcon;
