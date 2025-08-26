import React, { ChangeEvent, FocusEvent } from 'react';
import styles from './Form.module.scss';

interface TextAreaFieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur: (event: FocusEvent<HTMLTextAreaElement>) => void;
  onFocus?: (event: FocusEvent<HTMLTextAreaElement>) => void;
  error?: string;
  textareaClassName?: string;
  labelClassName?: string;
  conditionalTextareaClassName?: string;
  conditionalLabelClassName?: string;
}

export const TextAreaField: React.FC<TextAreaFieldProps> = ({
  id,
  label,
  value,
  onChange,
  onBlur,
  onFocus,
  error,
  textareaClassName = '',
  labelClassName = '',
  conditionalTextareaClassName = '',
  conditionalLabelClassName = '',
}) => {
  return (
    <div className={styles.textareaWrapper}>
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
      <textarea
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        className={
          error
            ? `${conditionalTextareaClassName} ${textareaClassName}`
            : textareaClassName
        }
      />
      {error && <span className={styles.errorText}>{error}</span>}
    </div>
  );
};
