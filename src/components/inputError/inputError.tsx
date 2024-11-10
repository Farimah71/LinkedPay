import classNames from "classnames";
import { InputError } from "./inputError.types";

export const InputErrorComponent: React.FC<InputError> = ({
  className,
  text,
}: InputError) => {
  const classes = classNames("inputError", className);

  return <span className={classes}>{text}</span>;
};
