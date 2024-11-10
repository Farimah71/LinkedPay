import { ReactNode } from "react";
import { BaseModalProps } from "../../../../types/modal.types";

export type CreateModalProps = BaseModalProps & {
  current: number;
  children: ReactNode;
  title: string;
  subTitle: string;
  hasCloseButton?: boolean;
};
