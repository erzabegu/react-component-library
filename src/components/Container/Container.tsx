import React from "react";
import {ContainerProps} from "./Container.types";
import styles from './index.module.scss'

const Container = ({children, maxWidth, ...rest}: ContainerProps) => {
    return <div  {...rest} className={[styles.container, rest.className].join(" ")}>{children}</div>
}

export default Container;