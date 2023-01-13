import React from "react";
import styles from './index.module.scss'
import {useDarkMode} from "../../hooks";

export interface ButtonProps {
    label: string;
}

const Button = ({label}: ButtonProps) => {
    const {toggleTheme} = useDarkMode();
    return <button className={styles.button} onClick={() => toggleTheme()}>{label}</button>
}
export default Button
