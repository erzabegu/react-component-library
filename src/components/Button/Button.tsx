import React from "react";
import styles from './index.module.scss'
import {ButtonProps} from "./Button.types";


const Button = ({color, children, size, iconBefore, iconAfter}: ButtonProps) => {
    return <button
        className={[styles.button, styles[`btn-${color}`], styles[size], (iconAfter || iconBefore) && !children && styles[`icon-${size}`]].join(" ")}>
        {iconBefore && iconBefore}{children}{iconAfter && iconAfter}
    </button>
}
export default Button
