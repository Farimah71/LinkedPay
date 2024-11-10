import { ComponentBase } from "../types/component-base.type";

export type BadgeProps = Omit<ComponentBase, "isDisable" | "variant"> & {
  badgeColor: "primary" | "success" | "error";
  text?: string;
};
