import { ReactNode } from "react";
import { BaseModalProps } from "../../types/modal.types";

export type ModalProps = BaseModalProps & {
  title: string;
  children?: ReactNode;
  small?: boolean;
  subTitle?: string;
  description?: string;
  icon?: ReactNode;
  isActionModal?: boolean;
  isTitleGreen?: boolean;
  shouldForceSignout?: boolean;
  stepper?: boolean;
};
