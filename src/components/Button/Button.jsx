import React from "react";
import styles from "./Button.module.css"

function Button(props){
    const {children,type="button",onClick} = props
    return(
        <button type={type} className={styles.button} onClick={onClick}>{children}</button> 
    )
}

export default Button