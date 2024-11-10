import { BaseModalProps } from "../../types/modal.types";

export type ActionModalProps = BaseModalProps & {
  title?: string;
  subTitle?: string;
  description?: string;
  isTitleGreen?: boolean;
  isButtonOutlined?: boolean;
  confirmLabel?: string;
  shouldForceSignout?: boolean;
  isButtonOutline?: boolean;
  navigatePath?: string;
  onSubmit?: () => void;
};
