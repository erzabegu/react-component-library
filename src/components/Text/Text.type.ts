import React from "react";

interface defaultText extends React.HTMLAttributes<HTMLParagraphElement | HTMLHeadingElement> {
    children: string;
    weight?: "thin" | "extraLight" | "light" | "regular" | "medium" | "semiBold" | "bold" | "extraBold" | "black";
}

export interface DisplayHeadings extends defaultText {
    display?: "xxl" | "xl" | "lg" | "md" | "sm" | "xs";
    variant?: "h1"
        | "h2"
        | "h3"
        | "h4"
        | "h5"
        | "h6";
}

export interface DisplayText extends defaultText {
    display?: "xl" | "lg" | "md" | "sm" | "xs";
    variant?: "p"
        | "label"
        | "a"
        | "pre"
        | "span";
}
