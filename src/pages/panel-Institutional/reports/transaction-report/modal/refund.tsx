import { Button } from "../../../../../components/button";
import { Modal } from "../../../../../components/modal";
import { BaseModalProps } from "../../../../../types/modal.types";
import DeleteIcon from "../../../../../assets/images/DeleteFillOrange.svg";

export const RefundModal: React.FC<BaseModalProps> = ({
  state,
  onCloseModal,
}) => {
  return (
    <Modal
      state={state}
      title="İade Et"
      icon={<img src={DeleteIcon} width={50} />}
      onCloseModal={onCloseModal}
      isActionModal
      small
    >
      <div className="text-center">
        <span className="text-secondary font-medium text-sm">
          Bu işlemin geri dönüşü olmamaktadır.
        </span>
        <div className="border py-4 px-2 rounded-2xl mt-6 mb-4">
          <p className="text-base-content-60 text-sm mb-2">İptal Sebebi</p>
          <p>
            Garlic green mozzarella party olives marinara tomato buffalo.
            Chicken beef Chicago bbq mayo pie. Anchovies Philly style pork
            white. Broccoli hand crust pie white large. Red pie rib sausage
            garlic thin.
          </p>
        </div>
      </div>

      <div className="flex gap-x-6 mt-3">
        <Button variant="neutral" shape="wide" isOutline onClick={onCloseModal}>
          Vazgeç
        </Button>
        <Button variant="secondary" shape="wide" className="!text-white">
          İadeyi Onayla
        </Button>
      </div>
    </Modal>
  );
};
