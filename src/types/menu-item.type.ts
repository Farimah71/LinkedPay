import { ReactNode } from "react";

export type MenuItem = {
  title: string;
  href?: string;
  iconActive?: ReactNode;
  iconDeactive?: ReactNode;
  isParent?: Boolean;
  children?:MenuItem[]
};
