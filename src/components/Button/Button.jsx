import React from "react";
import styles from "./Button.module.css"


class Button extends React.Component{

    render() {
        const {children,type="button",onClick}=this.props
        return(
            <button type={type} className={styles.button} onClick={onClick}>{children}</button> 
        )
    }
}

export default Button