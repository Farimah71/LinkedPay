import { Button } from "../../button";
import { Modal } from "../../modal";
import { ActionModalProps } from "../action-modal.types";
import { useAppDispatch } from "../../../hooks/redux-hooks";
import { setShowModal } from "../../../redux/reducers/show-modal";
import DeleteIcon from "../../../assets/images/RemoveCircleLight.svg";
import { useNavigate } from "react-router-dom";

export const ErrorModal: React.FC<ActionModalProps> = ({
  state,
  title,
  subTitle,
  confirmLabel,
  navigatePath,
  onCloseModal,
}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <Modal
      state={state}
      title={title ? title : "Bir hata oluştu."}
      subTitle={subTitle}
      icon={<img src={DeleteIcon} width={50} />}
      onCloseModal={onCloseModal}
      isActionModal
      small
      shouldForceSignout
    >
      <div className="flex gap-x-6 mt-3">
        <Button
          variant="primary"
          shape="full"
          isOutline
          onClick={() => {
            dispatch(setShowModal({ isShow: false, type: "error" }));
            navigatePath && navigate(navigatePath);
          }}
        >
          {confirmLabel ? confirmLabel : "Tamam"}
        </Button>
      </div>
    </Modal>
  );
};
