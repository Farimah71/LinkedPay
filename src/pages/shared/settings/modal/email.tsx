import { Button } from "../../../../components/button";
import { Input } from "../../../../components/input";
import { Modal } from "../../../../components/modal";
import { SettingModalsProps } from "./setting-modals.types";

export const EditEmail: React.FC<SettingModalsProps> = ({
  state,
  onCloseModal,
}) => {
  return (
    <Modal
      title="E-Postamı Değiştir"
      subTitle="E-postanızı güncelleyebilirsiniz."
      state={state}
      onCloseModal={onCloseModal}
      small
    >
      <form className="flex flex-col gap-y-2 mt-4">
        <Input label="Yeni E-Posta Adresiniz" type="email" />
        <Button variant="primary" shape="full" className="my-2">
          Devam Et
        </Button>
      </form>
    </Modal>
  );
};
