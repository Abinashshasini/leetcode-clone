import React, { FC } from 'react';

type TProps = {
  children: React.ReactNode;
  tooltip?: string;
  position?: string;
};

const Tooltip: FC<TProps> = ({
  children,
  tooltip = '',
  position = 'bottom',
}) => {
  return (
    <div>
      {children}
      <span data-position={position}>{tooltip}</span>
    </div>
  );
};

export default Tooltip;
