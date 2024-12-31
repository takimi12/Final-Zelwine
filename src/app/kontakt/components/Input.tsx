import React, { FocusEvent, ChangeEvent } from 'react';
import styles from './Form.module.scss';

interface InputFieldProps {
  id: string;
  label: string;
  type?: 'text' | 'email' | 'tel' | 'password';
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;  // Zmieniamy na opcjonalne
  error?: string;
  inputClassName?: string;
  labelClassName?: string;
  conditionalInputClassName?: string;
  conditionalLabelClassName?: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  type = 'text',
  value,
  onChange,
  onBlur,
  onFocus,  // onFocus będzie opcjonalne
  error,
  inputClassName = '',
  labelClassName = '',
  conditionalInputClassName = '',
  conditionalLabelClassName = '',
}) => {
  return (
    <div className={styles.inputWrapper}>
      <label
        htmlFor={id}
        className={
          error
            ? `${conditionalLabelClassName} ${labelClassName}`
            : labelClassName
        }
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}  // Przekazujemy onFocus jeśli jest dostępny
        className={
          error
            ? `${conditionalInputClassName} ${inputClassName}`
            : inputClassName
        }
      />
      {error && <span className={styles.errorText}>{error}</span>}
    </div>
  );
};
