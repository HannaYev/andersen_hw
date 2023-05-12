import React from "react";
import styles from "./Input.module.css";

class Input extends React.Component {

  render() {
    const {children, name, type='text',placeholder, maxLength='40', pattern} = this.props
    return (
      <div className={styles.inputWrapper}>
        <label htmlFor={name}>  
        {children}          
        </label>
        <input className={styles.customInput}
            type={type}
            name={name}
            id={name}
            placeholder={placeholder}
            maxLength={maxLength}
            pattern={pattern}
            
            

          />
      </div>
    );
  }
}

export default Input;
