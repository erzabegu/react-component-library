import React from "react";
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    color: "gray" | "primary" | "error" | "warning" | "success" | "violet";
    size: "sm" | "md" | "lg" | "xl" | "xxl";
    iconBefore?: React.ReactElement;
    iconAfter?: React.ReactElement;
}
