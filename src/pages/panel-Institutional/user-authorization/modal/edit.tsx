import { Button } from "../../../../components/button";
import { Divider } from "../../../../components/divider";
import { Input } from "../../../../components/input";
import { Modal } from "../../../../components/modal";
import { SelectInput } from "../../../../components/select";
import { BaseModalProps } from "../../../../types/modal.types";

export const EditUserAuthentication: React.FC<BaseModalProps> = ({
  state,
  onCloseModal,
}) => {
  return (
    <Modal
      state={state}
      onCloseModal={onCloseModal}
      title="Kullanıcıyı Düzenle"
      subTitle="Lütfen formu doldurunuz."
      small
    >
      <form className="flex flex-col gap-3 pe-2">
        <Divider text="Genel Bilgiler" />
        <Input label="Adı - Soyadı" />
        <Input label="Telefonu" />
        <Input label="E-Posta Adresi" />
        <SelectInput placeholder="Görev" />
        <Button variant="primary" className="mt-2">
          Kaydet
        </Button>
      </form>
    </Modal>
  );
};
