'use client'
import React, { useState } from "react";
import styles from  "./Form.module.scss";
import Plus from '../../../public/Renovation.svg'
import Image from "next/image";


const ContactForm = ({formProp}: {formProp: any}) => {
  // Stan i funkcje walidacji początkowe
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
   <div id="form" className={formProp ? styles.contactSection : styles.contactFormSection}>
        <form className="contact-form" onSubmit={handleSubmit}>
        {formProp ? null : (
  <div>
    <h4 className={styles.contactHeading}>Wyceń renowację swoich grzejników!</h4>
    {/* Dodaj tutaj inne elementy, jeśli są potrzebne */}
  </div>
)}
         
          <div className={styles.formGroup}>
            <div className={`${styles.inputWrapper} ${nameError ? "error" : ""}`}>
             
              <div className={`${styles.inputContainer} ${nameError ? "error" : ""}`}>
              <label className={`input-label body-small ${nameError ? "error" : ""}`} htmlFor="name">
                Imię
              </label>
                <input
                  className={`${styles.customInput} ${nameError ? "error" : ""}`}
                  id="name"
                  type="text"
                  aria-invalid="false"
                  value={name}
                  onChange={handleNameChange}
                  onBlur={handleNameBlur}
                  onFocus={() => handleInputFocus("name")} 

                />
              </div>
              <span style={{ color: "red", height:"18px" }}>{nameError}</span>
            </div>
            <div className={`${styles.inputWrapper} ${surnameError ? "error" : ""}`}>
            
              <div className={`${styles.inputContainer} ${surnameError ? "error" : ""}`}>
              <label className={`input-label body-small ${surnameError ? "error" : ""}`} htmlFor="surname">
                Nazwisko
              </label>
                <input
                  className={`${styles.customInput} ${surnameError ? "error" : ""}`}
                  id="surname"
                  type="text"
                  aria-invalid="false"
                  value={surname}
                  onChange={handleSurnameChange}
                  onBlur={handleSurnameBlur}
                  onFocus={() => handleInputFocus("surname")}

                />
              </div>
              <span style={{ color: "red", height:"18px" }}>{surnameError}</span>
            </div>
          </div>
          <div className={styles.formGroup}>
            <div className={`${styles.inputWrapper} ${emailError ? "error" : ""}`}>
             
              <div className={`${styles.inputContainer} ${emailError ? "error" : ""}`}>
              <label className={`input-label body-small ${emailError ? "error" : ""}`} htmlFor="email">
                Email
              </label>
                <input
                  className={`${styles.customInput} ${emailError ? "error" : ""}`}
                  id="email"
                  type="email"
                  aria-invalid="false"
                  value={email}
                  onChange={handleEmailChange}
                  onBlur={handleEmailBlur}
                  onFocus={() => handleInputFocus("email")}

                />
              </div>
              <span style={{ color: "red", height:"18px" }}>{emailError}</span>
            </div>
            <div className={`${styles.inputWrapper} ${telephoneError ? "error" : ""}`}>
 
  <div className={`${styles.inputContainer} ${telephoneError ? "error" : ""}`}>
  <label className={`input-label body-small ${telephoneError ? "error" : ""}`} htmlFor="telephone">
    Numer Telefonu
  </label>
    <input
      className={`${styles.customInput} ${telephoneError ? "error" : ""}`}
      id="telephone"
      type="tel" // Zmiana typu na "tel"
      aria-invalid="false"
      value={telephone}
      onChange={handleTelephoneChange}
      onBlur={handleTelephoneBlur}
      onFocus={() => handleInputFocus("telephone")}
    />
  </div>
  <span style={{ color: "red", height:"18px" }}>{telephoneError}</span>
</div>
          </div>
        
      
        
            <div className={styles.textareaWrapper}>
       <div className={`${styles.textareaContainer} ${messageError ? "error" : ""}`}>
       <label className="textarea-label body-small-smaller-second" htmlFor="message">Wiadomość</label>
    
              <textarea
                className={`${styles.textarea} ${messageError ? "error" : ""}`}
                id="message"
                aria-invalid="false"
                placeholder="Podaj ilość sztuk, ilość żeber oraz ich wymiary (długość, szerokość, wysokość w cm)"
                draggable="false"
                value={message}
                onChange={(e) => handleMessageChange}
                onBlur={handleMessageBlur}
                onFocus={() => handleInputFocus("message")}
              ></textarea>
            </div>

            <div
            className={`${styles.textError} ${messageError ? "error" : ""}`}
            
          >
              <span style={{ color: "red" }}>{messageError}</span>
            </div>
      </div>
      {formProp ? null : (
  <div>
    <div className={`${styles.photoText} body-small-smaller-second`}>
      <p className="p13">Zdjęcia grzejników</p>
    </div>
    <div className={styles.photoButton}>
      <div className={styles.customFileInput}>
        <button className={styles.customFileInputButton} type="button">
          <div className={styles.customFileInputButtonInner}>
            <span className={styles.customFileInputIcon}>
              <Image src={Plus} alt="plus" />
            </span>
            <span className={`${styles.customFileInput} body-small-smaller-second`}>
              Dodaj zdjęcia
            </span>
          </div>
        </button>
        <input className={styles.customFileInputHidden} type="file" />
      </div>
    </div>
  </div>
)}

    
          

          <button className="custom-submit-button button" type="submit" data-button="true">
            Wyślij zapytanie
          </button>
        </form>
        </div>
    </>
  );
};

export default ContactForm;