import React from 'react';
import {IconTypes} from "./Icon.types";

const Icon = ({children, size}: IconTypes) => {
    return React.cloneElement(children, {
        width: size,
        height: size
    });
}

export default Icon;