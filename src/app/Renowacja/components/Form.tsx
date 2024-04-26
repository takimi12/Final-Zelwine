import React from "react";
import Plus from "../../../../public/Renovation.svg";
import Image from "next/image";
import styles from "./Form.module.scss";

const Form = () => {
  return (
    <>
  <section className={styles.formSection}>
    <form className={styles.renovationForm}>
      <h4 className={styles.formTitle}>Wyceń renowację swoich grzejników!</h4>
      <div className={styles.formGroup}>

        <div className={styles.inputWrapper}>
          <label className="input-label body-small-smaller-second" htmlFor="name">Imię</label>
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
          <label className="input-label body-small-smaller-second" htmlFor="name">Nazwisko</label>
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
          <label className="input-label body-small-smaller-second" htmlFor="name">Adres e-mail</label>
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
          <label className="input-label body-small-smaller-second" htmlFor="name">Numer telefonu</label>
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
        <label className="textarea-label body-small-smaller-second" htmlFor="message">Wiadomość</label>
        <div className={styles.textareaConainer}>
          <textarea
            className={styles.textarea}
            id="message"
            aria-invalid="false"
            draggable="false"
          ></textarea>
        </div>
      </div>
      <div className="photo-stack">
        <div className="photo-text body-small-smaller-second">Zdjęcia grzejników</div>
        <div className="photo-button">
              <div className={styles.customFileInput}>
  <button className={styles.customFileInputButton} type="button">
    <div className={styles.customFileInputButtonInner}>
      <span className={styles.customFileInputIcon}>
    <Image src={Plus}  alt="plus"/>
          </span>
      <span className={`${styles.customFileInputText} body-small-smaller-second"` } >Dodaj zdjęcia</span>
    </div>
  </button>
  <input className="custom-file-input-hidden" type="file"  />
</div>
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