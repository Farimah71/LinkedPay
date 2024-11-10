import { ReactNode } from "react";
import { BaseModalProps } from "../../types/modal.types";

export type StepperModalProps = BaseModalProps & {
  title: string;
  children?: ReactNode;
  current: number;
  small?: boolean;
  subTitle?: string;
  titlesList: { title: string }[];
  hasCloseButton?: boolean;
};
