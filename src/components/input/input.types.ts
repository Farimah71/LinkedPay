import { InputHTMLAttributes } from "react";
import { ComponentBase } from "../types/component-base.type";

export type InputType = InputHTMLAttributes<HTMLInputElement> &
  Omit<ComponentBase, "variant" | "size"> & {
    label?: string;
    isPassword?: boolean;
    isPhoneOrEmail?: boolean;
    isError?: boolean;
    register?: any;
    error?: string;
    touched?: boolean;
    classes?: string;
    isSimple?: boolean;
    isCode?: boolean;
    inputClassName?: string;
  };
