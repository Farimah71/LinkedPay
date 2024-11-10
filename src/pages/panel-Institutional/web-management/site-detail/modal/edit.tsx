import { Button } from "../../../../../components/button";
import { CheckBox } from "../../../../../components/checkboxes";
import { Divider } from "../../../../../components/divider";
import { Input } from "../../../../../components/input";
import { Modal } from "../../../../../components/modal";
import { BaseModalProps } from "../../../../../types/modal.types";

export const EditModal: React.FC<BaseModalProps> = ({
  state,
  onCloseModal,
}: BaseModalProps) => {
  return (
    <Modal
      state={state}
      title="Düzenle"
      small={true}
      onCloseModal={onCloseModal}
      subTitle="Lütfen formu doldurunuz."
    >
      <>
        <Divider text="Hesap Bilgileri" />
        <div className="p-1">
          <Input label="Hakediş Hesap IBAN Numarası" />
          <Input label="Hesap Sahibi Adı Soyadı" className="mt-3" />
          <Input label="Banka Hesabı Başlığı" className="mt-3" />
        </div>

        <Divider text="Web Site Bilgileri" />
        <div className="p-1">
          <Input label="Web Site Başlığı" />
          <Input label="Web Site / İş Yeri / Mağaza Adı" className="mt-3" />
          <Input label="Web Site URL Adresi" className="mt-3" />
          <Input label="Başarılı İşlem Yönelnedirme Adresi" className="mt-3" />
          <Input label="Hatalı İşlem Yönlendirme Adresi" className="mt-3" />
          <Input label="Web Site IP Adresi" className="mt-3" />
        </div>

        <Divider text="Diğer Bilgiler" />
        <div className="p-1">
          <Input label="Taksit Seçeneği" />
          <Input label="E-Ticaret Altyapı Sağlayıcı" className="mt-3" />
        </div>

        <CheckBox
          id="checkbox"
          isChecked={false}
          label="Bilgilerin doğruluğunu onaylıyorum."
          className="mt-4 !text-sm !font-normal"
        />

        <Button
          variant="primary"
          shape="full"
          size="medium"
          className="mt-6 !text-base !font-medium"
        >
          Onaya Gönder
        </Button>
      </>
    </Modal>
  );
};
