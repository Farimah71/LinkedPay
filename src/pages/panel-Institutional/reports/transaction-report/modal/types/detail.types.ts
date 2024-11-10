import { BaseModalProps } from "../../../../../../types/modal.types";

export type DetailModalProps = BaseModalProps & {
  cancelModalHandler: () => void;
  refundModalHandler: () => void;
};
