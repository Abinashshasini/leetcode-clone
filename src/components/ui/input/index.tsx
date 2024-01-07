import React, {
  forwardRef,
  ForwardRefRenderFunction,
  CSSProperties,
  InputHTMLAttributes,
} from 'react';
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';
import classes from './style.module.scss';

type TProps = {
  id?: string;
  error?:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined;
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
          data-error={error && typeof error === 'string' && error.length > 0}
          {...props}
        />

        {error && typeof error === 'string' && (
          <span className={classes.errorMessage}>{error}</span>
        )}
      </div>
    </div>
  );
};

export default forwardRef(Input);
