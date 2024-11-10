import classNames from "classnames";
import { BadgeProps } from "./badge.type";

export const Badge: React.FC<BadgeProps> = ({
  badgeColor,
  className,
  text,
}) => {
  const classes = classNames("badge", className, {
    [`badge-${badgeColor}`]: badgeColor,
  });

  return <span className={classes}>{text}</span>;
};
