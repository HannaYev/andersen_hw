import React from "react";
import styles from "./Button.module.css"


class Button extends React.Component{

    render() {
        const {children,type="button"}=this.props
        return(
            <button type={type} className={styles.button}>{children}</button> 
        )
    }
}

export default Button