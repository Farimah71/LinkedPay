import { Button } from "../../../../../components/button";
import { CheckBox } from "../../../../../components/checkboxes/checkbox";
import { Divider } from "../../../../../components/divider";
import { Input } from "../../../../../components/input";
import { Modal } from "../../../../../components/modal";
import { BaseModalProps } from "../../../../../types/modal.types";

export const EditLink: React.FC<BaseModalProps> = ({ state, onCloseModal }) => {
  return (
    <Modal
      state={state}
      title="Yeni Ödeme Linki Ekle"
      small={true}
      onCloseModal={onCloseModal}
      subTitle="Lütfen formu doldurunuz."
    >
      <Divider text="Genel Bilgiler" />
      <div className="p-1">
        <Input label="Web Site" />
        <Input label="Ürün Hizmet Adı" className="mt-3" />
        <Input label="Ürün Açıklaması" className="mt-3" />
      </div>

      <Divider text="Fiyatlar" />
      <div className="p-1">
        <Input label="Ürün Peşin Fiyatı" />
        <Input label="Taksit Seçeneği" className="mt-3" />
      </div>

      <Divider text="Daha Fazla Detay" />
      <div className="p-1">
        <Input label="Link Bitiş Tarihi" type="date" />
        <Input label="Ödeme Adedi" className="mt-3" />
        <Input label="Referans URL Adresi" className="mt-3" />
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
    </Modal>
  );
};
