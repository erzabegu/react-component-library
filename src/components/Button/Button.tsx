import React from "react";
import styles from './index.module.scss'

export interface ButtonProps {
    label: string;
}

const Button = ({label}: ButtonProps) => {
    return <button className={styles.button}>{label}</button>
}
export default Button
