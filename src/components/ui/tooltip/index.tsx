import React, { FC } from 'react';
import classes from './style.module.scss';

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
    <div className={classes.tooltipContainer}>
      {children}
      <span data-position={position}>{tooltip}</span>
    </div>
  );
};

export default Tooltip;
