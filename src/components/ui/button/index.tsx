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
  loading?: boolean;
}> = ({
  variant = 'contained',
  children,
  onClick,
  styles = {},
  className = '',
  text = '',
  loading,
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
      {!loading && (children ? children : text)}
      {loading && <span className={classes.loading} />}
    </button>
  );
};

export default Button;
