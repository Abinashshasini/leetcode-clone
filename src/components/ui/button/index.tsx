import React, { FC, ReactNode, CSSProperties } from 'react';
import classes from './style.module.scss';

const Button: FC<{
  variant?: 'contained' | 'outlined' | 'transparent';
  children?: ReactNode;
  onClick?: () => void;
  styles?: CSSProperties;
  className?: string;
  text?: string;
  disabled?: boolean;
}> = ({
  variant = 'contained',
  children,
  onClick,
  styles = {},
  className = '',
  text = '',
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick && onClick}
      data-variant={variant}
      style={styles}
      disabled={disabled}
      className={`${classes.button} ${className} flex items-center`}
    >
      {children ? children : text}
    </button>
  );
};

export default Button;
