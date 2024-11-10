import { Modal } from "../../../../../components/modal";
import { BaseModalProps } from "../../../../../types/modal.types";
import { Divider } from "../../../../../components/divider";
import { InstallmentRow } from "../../../../../components/installment-row/installment-row";

export const InstallmentModal: React.FC<BaseModalProps> = ({
  state,
  onCloseModal,
}: BaseModalProps) => {
  return (
    <Modal
      state={state}
      title="Taksit / Komisyon Oranları"
      small={true}
      onCloseModal={onCloseModal}
      subTitle="Mayo spinach lasagna NY personal. Burnt lot Hawaiian olives Hawaiian white tomato tomato anchovies. Ricotta white and pan mouth."
    >
      <>
        <div className="p-1 border-t">
          <Divider text="Peşin Ödemeler" />
          <InstallmentRow title="Kredi Kartı" data="%1" />
          <InstallmentRow title="Debit (Banka) Kartı" data="%2 + 10 TL" />
          <InstallmentRow title="Yurt Dışı Kartı" data="%3" />

          <Divider text="Taksitli Ödemeler" className="!mt-10" />
          <InstallmentRow title="2 Taksit" data="%2 + 10 TL" />
          <InstallmentRow title="3 Taksit" data="%3" />
          <InstallmentRow title="4 Taksit" data="%6" />
          <InstallmentRow title="6 Taksit" data="%10 + 50 TL" />
          <InstallmentRow title="9 Taksit" data="%10 + 50 TL" />
          <InstallmentRow title="12 Taksit" data="%10 + 50 TL" isLast={true} />
        </div>
      </>
    </Modal>
  );
};
