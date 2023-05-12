import React from "react";
import styles from "./Textarea.module.css";

class Textarea extends React.Component {
  render() {
    const {
      children,
      name,
      placeholder,
      rows = "7",
      cols = "50",
      maxLength = "357", //maxLength ставила ориентировочно для 7ми строк, чтобы не было бесконечного ввода.
    } = this.props;

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
        />
      </div>
    );
  }
}

export default Textarea;
