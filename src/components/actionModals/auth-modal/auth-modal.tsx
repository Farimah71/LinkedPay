import { Button } from "../../button";
import { Modal } from "../../modal";
import { ActionModalProps } from "../action-modal.types";
import CheckCircleLight from "../../../assets/images/CheckCircleLight.svg";

export const AuthModal: React.FC<ActionModalProps> = ({
  state,
  title,
  subTitle,
  description,
  isTitleGreen,
  isButtonOutlined,
  confirmLabel,
  shouldForceSignout,
  onCloseModal,
  onSubmit,
}) => {
  return (
    <Modal
      state={state}
      title={title ? title : "İşlem Başarılı"}
      subTitle={subTitle}
      description={description}
      isTitleGreen={isTitleGreen}
      icon={<img src={CheckCircleLight} width={50} />}
      onCloseModal={onCloseModal}
      shouldForceSignout={shouldForceSignout}
      isActionModal
      small
    >
      <div className="flex gap-x-6 mt-3">
        <Button
          variant="primary"
          shape="full"
          isOutline={isButtonOutlined}
          onClick={onSubmit}
        >
          {confirmLabel}
        </Button>
      </div>
    </Modal>
  );
};
