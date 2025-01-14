'use client';
import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styles from './Form.module.scss';
import ThankYou from './ThankYouModal';
import sendEmail from '@/app/utils/email';
import ControllerWrapper from './FormControllerComponent';
import { Button } from './Button';
import { PhotoUploadButton } from './PhotoUpLoadButton';

const schema = yup.object({
  name: yup
    .string()
    .min(2, 'Imię musi zawierać przynajmniej dwie litery')
    .required('Imię jest wymagane'),
  surname: yup
    .string()
    .min(2, 'Nazwisko musi mieć przynajmniej dwie litery')
    .required('Nazwisko jest wymagane'),
  email: yup
    .string()
    .email('Niepoprawny adres email')
    .required('Email jest wymagany'),
  telephone: yup
    .string()
    .matches(/^\d{9}$/, 'Numer telefonu musi składać się z co najmniej 9 cyfr')
    .required('Numer telefonu jest wymagany'),
  message: yup
    .string()
    .min(10, 'Tekst musi mieć przynajmniej 10 znaków')
    .required('Wiadomość jest wymagana'),
});

const MyForm: React.FC<{ contact: number }> = ({ contact }) => {
  const [attachedFiles, setAttachedFiles] = useState<File[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setAttachedFiles(Array.from(e.target.files));
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    try {
      await sendEmail(
        data.name,
        data.surname,
        data.message,
        data.email,
        data.telephone,
      );
      setShowModal(true);
    } catch (error) {
      console.error('Error sending email:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.contactFormSection}>
        {contact !== 1 && (
          <h3 className={styles.renovation}>
            Wyceń renowację swoich grzejników
          </h3>
        )}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.formGroup}>
            <ControllerWrapper
              name="name"
              control={control}
              label="Imię:"
              errors={errors}
            />
            <ControllerWrapper
              name="surname"
              control={control}
              label="Nazwisko:"
              errors={errors}
            />
          </div>
          <div className={styles.formGroup}>
            <ControllerWrapper
              name="email"
              control={control}
              label="Email:"
              type="email"
              errors={errors}
            />
            <ControllerWrapper
              name="telephone"
              control={control}
              label="Telefon:"
              type="tel"
              errors={errors}
            />
          </div>
          <ControllerWrapper
            name="message"
            control={control}
            label="Wiadomość:"
            errors={errors}
            isTextarea={true}
          />
          <PhotoUploadButton
            onFileChange={handleFileChange}
            onClick={() => inputRef.current?.click()}
            contact={contact}
          />
          <div className={styles.photoButton}>
            <Button type="submit" isLoading={isLoading}>
              Wyślij
            </Button>
          </div>
        </form>
      </div>
      {showModal && <ThankYou onClose={closeModal} />}
    </section>
  );
};

export default MyForm;