import React, {
  forwardRef,
  ForwardRefRenderFunction,
  CSSProperties,
  InputHTMLAttributes,
} from 'react';
import classes from './style.module.scss';

type TProps = {
  id?: string;
  error?: string;
  label?: string;
  type?: string;
  required?: boolean;
  styles?: CSSProperties;
  className?: string;
  placeholder: string;
};

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input: ForwardRefRenderFunction<HTMLInputElement, TProps & InputProps> = (
  {
    label,
    type = 'text',
    className = '',
    id = '',
    error = '',
    required,
    styles,
    placeholder = '',
    ...props
  },
  ref
) => {
  return (
    <div className={classes.container}>
      {label && (
        <label htmlFor={id} className={classes.label}>
          {label} <span data-required={required}></span>
        </label>
      )}
      <div className={classes.inputContainer} style={styles}>
        <input
          type={type}
          className={`${classes.input} ${className}`}
          ref={ref}
          id={id}
          placeholder={placeholder}
          data-error={error.length > 0}
          {...props}
        />

        {error.length > 0 && (
          <span className={classes.errorMessage}>{error}</span>
        )}
      </div>
    </div>
  );
};

export default forwardRef(Input);
