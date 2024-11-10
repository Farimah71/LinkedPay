import { InputHTMLAttributes } from "react";
import { ComponentBase } from "../types/component-base.type";

export type PhoneInputType = InputHTMLAttributes<HTMLInputElement> &
  Omit<ComponentBase, "variant" | "size"> & {
    label?: string;
    isError?: boolean;
    register?: any;
    error?: string;
    touched?: boolean;
    classes?: string;
    inputClassName?:string;
  };
