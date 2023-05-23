import React from "react";
import styles from "./Textarea.module.css";


function Textarea (props){
    const {
        children,
        name,
        placeholder,
        rows = "7",
        cols = "50",
        maxLength = "610",
        onChange,
        value,
        isValid,     
        attemptingSubmit,
      } = props;

      return (
        <div className={styles.textareaWrapper}>
          <label htmlFor={name}>{children}</label>
          <textarea
            className={styles.customTextarea}
            name={name}
            id={name}
            placeholder={placeholder}
            rows={rows}
            cols={cols}
            maxLength={maxLength}
            onChange={onChange}
            value={value.trim()}
          />
          {value && isValid && <div>{`Осталось ${600 - value.length}/600 символов`}</div>}
          {!isValid && value && (
            <div className={styles.errorMessage}>Превышен лимит символов в поле</div>
          )}
          {!value.length && attemptingSubmit && (
            <div className={styles.errorMessage}> Поле 
            пустое. Заполните, пожалуйста.</div>
          )}
        </div>
      );

}   


export default Textarea;
