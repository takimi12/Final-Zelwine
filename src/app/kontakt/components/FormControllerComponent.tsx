import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { InputField } from './Input';
import { TextAreaField } from './TextareField';
import styles from './Form.module.scss';

type InputType = "text" | "email" | "tel" | "password";

interface ControllerWrapperProps {
  name: string;
  control: Control<any>;
  label: string;
  type?: InputType;
  errors: any;
  isTextarea?: boolean;
}

const ControllerWrapper: React.FC<ControllerWrapperProps> = ({
  name,
  control,
  label,
  type = 'text',
  errors,
  isTextarea = false
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => 
        isTextarea ? (
          <TextAreaField
            id={name}
            label={label}
            value={field.value}
            onChange={field.onChange}
            onBlur={field.onBlur}
            error={errors[name]?.message}
            textareaClassName={styles.textarea}
            labelClassName={styles.textareaLabel}
            conditionalTextareaClassName={errors[name] ? styles.error : ''}
            conditionalLabelClassName={errors[name] ? styles.error : ''}
          />
        ) : (
          <InputField
            id={name}
            label={label}
            type={type}
            value={field.value}
            onChange={field.onChange}
            onBlur={field.onBlur}
            error={errors[name]?.message}
            inputClassName={styles.customInput}
            labelClassName={styles.inputLabel}
            conditionalInputClassName={errors[name] ? styles.error : ''}
            conditionalLabelClassName={errors[name] ? styles.error : ''}
          />
        )
      }
    />
  );
};

export default ControllerWrapper;