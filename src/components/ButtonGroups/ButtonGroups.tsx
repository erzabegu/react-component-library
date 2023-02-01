import React from "react";
import styles from './index.module.scss'
import {ButtonGroupTypes} from "./ButtonGroup.types";

const ButtonGroups = ({children, ...rest}: ButtonGroupTypes) => {
    return <div className={styles.buttonGroups} {...rest}>
            <button>erza</button>
        {children}
    </div>;

};

export default ButtonGroups;