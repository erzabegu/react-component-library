import React from "react";

interface IconProps extends React.SVGAttributes <SVGElement> {
}

const useGenerateIcon = ({...props}: IconProps) => {

    return React.createElement("svg", {...props})
}
export default useGenerateIcon;