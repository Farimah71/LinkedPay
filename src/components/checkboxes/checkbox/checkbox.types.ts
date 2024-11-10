import { InputHTMLAttributes } from "react";
import { ComponentBase } from "../../types/component-base.type";

export type CheckBoxProps = Omit<ComponentBase, "variant"> &
  InputHTMLAttributes<HTMLInputElement> & {
    id: string;
    register?: any;
    label: string;
    error?: string;
    isChecked?: boolean;
    touched?: boolean;
  };
