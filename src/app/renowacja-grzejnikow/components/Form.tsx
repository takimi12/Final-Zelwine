'use client'
import React, { useRef, useState } from 'react';
import Plus from "../../../../public/Renovation.svg";
import Image from "next/image";
import styles from "./Form.module.scss";

const Form = () => {

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    inputRef.current?.click();
  };

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
  const [nameTouched, setNameTouched] = useState(false);
  const [surnameTouched, setSurnameTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [telephoneTouched, setTelephoneTouched] = useState(false);
  const [messageTouched, setMessageTouched] = useState(false);

    // Funkcje obsługujące zmianę wartości pól
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
  
    const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setMessage(e.target.value);
    };
      // Funkcje walidacji
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
    if (!message) {
      setMessageError("tekst musi mieć przynajmniej 10 znaków");
    } else {
      setMessageError("");
    }
  };
  const handleInputFocus = (inputName: string) => {
    switch (inputName) {
      case "name":
        setNameTouched(true);
        setNameError(""); // Usunięcie błędu dla pola "name" po ponownym kliknięciu
        break;
      case "surname":
        setSurnameTouched(true);
        setSurnameError(""); // Usunięcie błędu dla pola "surname" po ponownym kliknięciu
        break;
      case "email":
        setEmailTouched(true);
        setEmailError(""); // Usunięcie błędu dla pola "email" po ponownym kliknięciu
        break;
      case "telephone":
        setTelephoneTouched(true);
        setTelephoneError(""); // Usunięcie błędu dla pola "telephone" po ponownym kliknięciu
        break;
      case "message":
        setMessageTouched(true);
        setMessageError(""); // Usunięcie błędu dla pola "message" po ponownym kliknięciu
        break;
      default:
        break;
    }
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Wywołanie funkcji walidacji przed przesłaniem
    handleNameBlur();
    handleSurnameBlur();
    handleEmailBlur();
    handleTelephoneBlur();
    handleMessageBlur();

    // Sprawdzenie, czy nie ma żadnych błędów walidacji
    if (!nameError && !surnameError && !emailError && !telephoneError && !messageError) {
      // Tutaj dodaj kod do przesłania formularza
      console.log("Formularz przesłany poprawnie!");
    }
  };

  return (
    <>
  <section className={styles.formSection} id="form">
    <form className={styles.renovationForm} onSubmit={handleSubmit}>
      <h4 className={styles.formTitle}>Wyceń renowację swoich grzejników!</h4>
      <div className={styles.formGroup}>

        <div className={styles.inputWrapper}>
          <label className={styles.label} htmlFor="name">Imię</label>
          <div className={styles.inputContainer}>
            <input
              className={styles.customInput}
              id="name"
              type="text"
              aria-invalid="false"
              
            />
          </div>
        </div>
        <div className={styles.inputWrapper}>
          <label className={styles.label} htmlFor="name">Nazwisko</label>
          <div className={styles.inputContainer}>
            <input
              className={styles.customInput}
              id="surname"
              type="text"
              aria-invalid="false"

            />
          </div>
        </div>
        </div>
      <div className={styles.formGroup}>

        <div className={styles.inputWrapper}>
          <label className={styles.label} htmlFor="name">Adres e-mail</label>
          <div className={styles.inputContainer}>
            <input
              className={styles.customInput}
              id="name"
              type="e-mail"
              aria-invalid="false"
            />
          </div>
        </div>
        <div className={styles.inputWrapper}>
          <label className={styles.label} htmlFor="name">Numer telefonu</label>
          <div className={styles.inputContainer}>
            <input
              className={styles.customInput}
              id="name"
              type="number"
              aria-invalid="false"
            />
          </div>
        </div>
        </div>
      <div className={styles.textareaWrapper}>
        <label className={styles.label} htmlFor="message">Wiadomość</label>
        <div className={styles.textareaConainer}>
          <textarea
            className={styles.textarea}
            id="message"
            aria-invalid="false"
            draggable="false"
            placeholder="Podaj ilość sztuk, ilość żeber oraz ich wymiary (długość, szerokość, wysokość)"
          ></textarea>
        </div>
      </div>
      <div className="photo-stack">
        <div className="photo-text body-small-smaller-second">Zdjęcia grzejników</div>


      <div id="photoButton" onClick={handleClick} className={styles.choseFile}>
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
        <input id="inputHidden" ref={inputRef} className={styles.inputHidden} type="file"  placeholder="ddd" multiple/>
      </div>

    </div>


      <button className="custom-submit-button button-text-big" type="submit" data-button="true">
        Wyślij zapytanie
      </button>
    </form>

    </section>

    </>
  );
};

export default Form;

