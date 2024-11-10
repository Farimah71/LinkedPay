import { PuffLoader } from "react-spinners";
import { sizeClasses } from "../types/size-classes";
import { ButtonProps, ButtonShape } from "./button.types";
import classNames from "classnames";

const shapeClasses: Record<ButtonShape, string> = {
  wide: "btn-wide",
  full: "btn-block",
  square: "btn-square",
  default: "",
};

export const Button: React.FC<ButtonProps> = ({
  variant,
  size = "normal",
  isDisabled = false,
  isOutline = false,
  shape = "default",
  isLoading = false,
  loadingType = "ring",
  type = "button",
  isLink = false,
  isInTop,
  animatedIcon = false,
  children,
  className,
  isLight = false,
  ...rest
}: ButtonProps) => {
  const classes = classNames(
    "btn",
    className,
    { "btn-outline": isOutline },
    { "btn-link": isLink },
    { "animated-icon": animatedIcon },
    { "pointer-events-none opacity-70": isLoading },
    { [`btn-${variant}`]: variant },
    { [`btn-${sizeClasses[size]}`]: size },
    { [`${shapeClasses[shape]}`]: shape },
    { "btn-light": isLight }
  );

  return (
    <button
      type={type}
      disabled={isDisabled}
      className={classes}
      {...rest}
    >
      {isLoading ? <PuffLoader color="#22B789" size={40} /> : children}
    </button>
  );
};
