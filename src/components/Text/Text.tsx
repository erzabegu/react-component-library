import React from "react";
import {TextTypes} from "./Text.type";
import styles from './Text.scss';

const Text = ({variant, weight, display, children, ...rest}: TextTypes) => {

    const classNames = `${styles[display]} ${styles[weight]}`;

    return React.createElement(variant, {...rest, className: [classNames, rest.className].join(" ")}, children)
}

export default Text;