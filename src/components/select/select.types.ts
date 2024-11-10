import { SelectOption } from "../../types/select-option.types";

export type SelectProps = {
  className?: string;
  options?: SelectOption[];
  placeholder?: string;
  isError?: boolean;
  register?: any;
  error?: string;
  touched?: boolean;
  size?: "large" | "middle" | "small";
  isSimple?: boolean;
  label?: string;
  name?: string;
  control?: any;
  disabled?: boolean;
  searchable?: boolean;
  isLoading?: boolean;
};
