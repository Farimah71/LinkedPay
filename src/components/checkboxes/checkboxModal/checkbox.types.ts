import { InputHTMLAttributes } from "react";
import { ComponentBase } from "../../types/component-base.type";

export type CheckBoxModalProps = Omit<ComponentBase, "variant"> &
  InputHTMLAttributes<HTMLInputElement> & {
    id: string;
    register?: any;
    label: string;
    linkLabel?: string;
    error?: string;
    isChecked?: boolean;
    touched?: boolean;
    handleClick?: () => void;
  };
