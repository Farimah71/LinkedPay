import { Button } from "../../button";
import { Modal } from "../../modal";
import { ActionModalProps } from "../action-modal.types";
import CheckCircleLight from "../../../assets/images/CheckCircleLight.svg";

export const SuccessModal: React.FC<ActionModalProps> = ({
  state,
  title,
  subTitle,
  confirmLabel,
  shouldForceSignout,
  isButtonOutline=true,
  onCloseModal,
  onSubmit,
}) => {
  return (
    <Modal
      state={state}
      title={title ? title : "Ön başvurunuzu aldık."}
      subTitle={subTitle}
      icon={<img src={CheckCircleLight} width={50} />}
      onCloseModal={onCloseModal}
      shouldForceSignout={shouldForceSignout}
      isActionModal
      small
    >
      <div className="flex gap-x-6 mt-3">
        <Button variant="primary" shape="full" isOutline={isButtonOutline} onClick={onSubmit}>
          {confirmLabel}
        </Button>
      </div>
    </Modal>
  );
};
