import React from "react";

export interface TextTypes extends React.HTMLAttributes<HTMLParagraphElement | HTMLHeadingElement> {
    children: string;
    variant:
        | "h1"
        | "h2"
        | "h3"
        | "h4"
        | "h5"
        | "h6"
        | "p"
        | "label"
        | "a"
        | "pre"
        | "span";
    weight: "thin" | "extraLight" | "light" | "regular" | "medium" | "semiBold" | "bold" | "extraBold" | "black";
    display: "xxl" | "xl" | "lg" | "md" | "sm" | "xs";
}
