'use client';
import React, { useRef, useState } from 'react';
import styles from './Form.module.scss'; 
import ThankYou from "./ThankYouModal"
import Plus from "../../../../public/Renovation.svg";
import Image from 'next/image';

const MyForm: React.FC<{ contact: number }> = ({ contact }) => {
  const [attachedFiles, setAttachedFiles] = useState<File[]>([]);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [message, setMessage] = useState("");

  const [nameError, setNameError] = useState("");
  const [surnameError, setSurnameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [telephoneError, setTelephoneError] = useState("");
  const [messageError, setMessageError] = useState("");

  const [showModal, setShowModal] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setAttachedFiles(Array.from(e.target.files));
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSurnameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSurname(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleTelephoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const onlyDigits = e.target.value.replace(/\D/g, "");
    if (onlyDigits.length <= 9) {
      setTelephone(onlyDigits);
    }
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleNameBlur = () => {
    if (name.length < 2) {
      setNameError("Imię musi zawierać przynajmniej dwie litery");
    } else {
      setNameError("");
    }
  };

  const handleSurnameBlur = () => {
    if (surname.length < 2) {
      setSurnameError("Nazwisko musi mieć przynajmniej dwie litery");
    } else {
      setSurnameError("");
    }
  };

  const handleEmailBlur = () => {
    if (!email) {
      setEmailError("Email musi zawierać znak @");
    } else if (!email.includes("@")) {
      setEmailError("Niepoprawny adres email");
    } else {
      setEmailError("");
    }
  };

  const handleTelephoneBlur = () => {
    if (!telephone) {
      setTelephoneError("Pole nie może być puste");
    } else if (telephone.length < 9) {
      setTelephoneError("Numer telefonu musi składać się z co najmniej 9 cyfr");
    } else {
      setTelephoneError("");
    }
  };

  const handleMessageBlur = () => {
    if (!message || message.length < 10) {
      setMessageError("Tekst musi mieć przynajmniej 10 znaków");
    } else {
      setMessageError("");
    }
  };

  const handleInputFocus = (inputName: string) => {
    switch (inputName) {
      case "name":
        setNameError("");
        break;
      case "surname":
        setSurnameError("");
        break;
      case "email":
        setEmailError("");
        break;
      case "telephone":
        setTelephoneError("");
        break;
      case "message":
        setMessageError("");
        break;
      default:
        break;
    }
  };

  const validateForm = () => {
    let isValid = true;

    if (name.length < 2) {
      setNameError("Imię musi zawierać przynajmniej dwie litery");
      isValid = false;
    } else {
      setNameError("");
    }

    if (surname.length < 2) {
      setSurnameError("Nazwisko musi mieć przynajmniej dwie litery");
      isValid = false;
    } else {
      setSurnameError("");
    }

    if (!email) {
      setEmailError("Email musi zawierać znak @");
      isValid = false;
    } else if (!email.includes("@")) {
      setEmailError("Niepoprawny adres email");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!telephone) {
      setTelephoneError("Pole nie może być puste");
      isValid = false;
    } else if (telephone.length < 9) {
      setTelephoneError("Numer telefonu musi składać się z co najmniej 9 cyfr");
      isValid = false;
    } else {
      setTelephoneError("");
    }

    if (!message || message.length < 10) {
      setMessageError("Tekst musi mieć przynajmniej 10 znaków");
      isValid = false;
    } else {
      setMessageError("");
    }

    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const isFormValid = validateForm();

    if (isFormValid) {
      setShowModal(true); 

    }
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.contactFormSection}>
      {contact !== 1 && (
        <h3 className={styles.renovation}>Wyceń renowację swoich grzejników</h3>
        )}
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <div className={styles.inputWrapper}>
              <label htmlFor="name" className={nameError ? `${styles.error} ${styles.inputLabel}` : styles.inputLabel}>Imię:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={handleNameChange}
                onBlur={handleNameBlur}
                onFocus={() => handleInputFocus("name")}
                className={nameError ? `${styles.customInput} ${styles.error}` : styles.customInput}
              />
              {nameError && <span className={styles.errorText}>{nameError}</span>}
            </div>
            <div className={styles.inputWrapper}>
              <label htmlFor="surname" className={surnameError ? `${styles.error} ${styles.inputLabel}` : styles.inputLabel}>Nazwisko:</label>
              <input
                type="text"
                id="surname"
                value={surname}
                onChange={handleSurnameChange}
                onBlur={handleSurnameBlur}
                onFocus={() => handleInputFocus("surname")}
                className={surnameError ? `${styles.customInput} ${styles.error}` : styles.customInput}
              />
              {surnameError && <span className={styles.errorText}>{surnameError}</span>}
            </div>
          </div>
          <div className={styles.formGroup}>
            <div className={styles.inputWrapper}>
              <label htmlFor="email" className={emailError ? `${styles.error} ${styles.inputLabel}` : styles.inputLabel}>Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                onBlur={handleEmailBlur}
                onFocus={() => handleInputFocus("email")}
                className={emailError ? `${styles.customInput} ${styles.error}` : styles.customInput}
              />
              {emailError && <span className={styles.errorText}>{emailError}</span>}
            </div>
            <div className={styles.inputWrapper}>
              <label htmlFor="telephone" className={telephoneError ? `${styles.error} ${styles.inputLabel}` : styles.inputLabel}>Telefon:</label>
              <input
                type="tel"
                id="telephone"
                value={telephone}
                onChange={handleTelephoneChange}
                onBlur={handleTelephoneBlur}
                onFocus={() => handleInputFocus("telephone")}
                className={telephoneError ? `${styles.customInput} ${styles.error}` : styles.customInput}
              />
              {telephoneError && <span className={styles.errorText}>{telephoneError}</span>}
            </div>
          </div>
          <div className={styles.textareaWrapper}>
            <label htmlFor="message" className={messageError ? `${styles.error} ${styles.textareaLabel}` : styles.textareaLabel}>Wiadomość:</label>
            <textarea
              id="message"
              value={message}
              onChange={handleMessageChange}
              onBlur={handleMessageBlur}
              onFocus={() => handleInputFocus("message")}
              className={messageError ? `${styles.customtextarea} ${styles.error}` : styles.textarea}
            ></textarea>
            {messageError && <span className={styles.errorText}>{messageError}</span>}
          </div>
          {contact !== 1 && (
            <>
              <p>Zdjęcia grzejników</p>
              <div id="photoButton" onClick={handleClick} className={styles.choseFiles}>
                <button className={styles.customFileInputButton} type="button">
                  <div className={styles.positionButton}>
                    <Image 
                      src={Plus}  
                      alt="popraw" 
                      width={10}
                      height={10}
                    />
                    <span className={`${styles.customFileInputText} body-small-smaller-second`}>Dodaj zdjęcia</span>
                  </div>
                </button>
                <input 
                  id="inputHidden" 
                  ref={inputRef} 
                  className={styles.inputHidden} 
                  type="file"  
                  placeholder="ddd" 
                  multiple 
                  onChange={handleFileChange}
                />
              </div>
            </>
          )}

          <div className={styles.photoButton}>
            <button type="submit" className={`Button ${styles.choseFile}`}>
              <span className={styles.customFileInputButton}>
                <span className={styles.positionButton}>Wyślij</span>
              </span>
            </button>
          </div>
        </form>
      </div>
      {showModal && <ThankYou onClose={closeModal} />}
    </section>
  );
};

export default MyForm;
