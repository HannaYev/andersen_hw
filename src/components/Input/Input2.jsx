import React from "react";
import styles from "./Input.module.css";

function Input2(props){
  const {
    children,
    name,
    type = "text",
    placeholder,
    maxLength = "40",
    pattern,
    onChange,
    value ="",
    isValid,
    errorMessage,
    attemptingSubmit,
  } = props;



  return (
    <div className={styles.inputWrapper}>
      <label htmlFor={name}>{children}</label>
      <input
        className={styles.customInput}
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        maxLength={maxLength}
        pattern={pattern}
        onFocus={onChange}
        onChange={onChange}
        value={value.trim()}
      />
      {!isValid && value && (
        <div className={styles.errorMessage}>{errorMessage}</div>
      )}
      {!value.length && attemptingSubmit && (
        <div className={styles.errorMessage}>
          Поле пустое. Заполните, пожалуйста.
        </div>
      )}
    </div>
  );
}   

export default Input2;
