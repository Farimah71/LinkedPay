import { useState } from "react";
import { Button } from "../../../../components/button";
import { CheckBox } from "../../../../components/checkboxes/checkbox";
import { Divider } from "../../../../components/divider";
import {
  IconArrowRight,
  IconDelete,
  IconPen,
} from "../../../../components/icons/icons";
import { Input } from "../../../../components/input";
import { Modal } from "../../../../components/modal";
import { Link } from "react-router-dom";
import { SelectInput } from "../../../../components/select";

const LinkDetail: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <div>
      <div className="container w-full flex items-center gap-6 text-sm text-base-content-40 p-4">
        <p>Trpos</p>
        <IconArrowRight width={20} height={20} viewBox="0 0 20 20" />
        <p>Ödeme Linkleri</p>
        <IconArrowRight width={20} height={20} viewBox="0 0 20 20" />
        <Link to={"/dashboard/personal/linkPayment"}>Liste</Link>
        <IconArrowRight width={20} height={20} viewBox="0 0 20 20" />
        <p className="text-primary">Link Detaylar</p>
      </div>
      <div className="w-full h-full container p-4 pb-8">
        <div className="w-full h-full bg-actual-white rounded-2.5xl p-6">
          <div className="w-full h-full flex flex-col">
            <div className="w-full flex justify-between items-end">
              <div>
                <p className="text-xs text-base-content-40 mt-2">Detaylar</p>
                <h1 className="text-[20px] text-base-content font-semibold">
                  Raven Soft Yazılım Şirketi
                </h1>
              </div>
              <div className="flex items-center gap-4">
                <Button
                  onClick={() => setIsModalOpen(true)}
                  variant="primary"
                  isLight={true}
                  className="!text-primary"
                  isInTop
                >
                  <IconPen width={20} height={20} viewBox="0 0 20 20" />
                  Düzenle
                </Button>
                <Button
                  variant="error"
                  isLight={true}
                  className="!text-error"
                  isInTop
                >
                  <IconDelete width={20} height={20} viewBox="0 0 20 20" />
                  Sil
                </Button>
              </div>
            </div>
            <hr className="my-6" />
            <div className="w-full flex-grow">
              <Divider text="Genel Bilgiler" />
              <div className="grid grid-cols-2 gap-6 mt-4">
                <Input label="Ürün Hizmet Adı" isSimple={true} />
                <Input label="Ürün Linki" isSimple={true} />
                <Input
                  label="Ürün Linki"
                  isSimple={true}
                  className="!col-span-3"
                />
              </div>

              <Divider text="Fiyatlar" />
              <div className="grid grid-cols-2 gap-6 mt-4">
                <Input label="Ürün Peşin Fiyatı" isSimple={true} />
                <SelectInput label="Taksit Seçeneği" isSimple={true} />
              </div>

              <Divider text="Daha Fazla Detay" />
              <div className="grid grid-cols-3 gap-6 mt-4">
                <Input label="Link Bitiş Tarihi" type="date" isSimple={true} />
                <Input label="Ödeme Adedi" value={100} isSimple={true} />
                <Input
                  label="Kalan Ödeme Adedi"
                  value={10}
                  className="!text-error"
                  isSimple={true}
                />
                <div className="col-span-3 flex gap-6">
                  <Input label="Link Durumu" isSimple={true} />
                  <Input label="Referans URL Adresi" isSimple={true} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        state={isModalOpen}
        title="Yeni Ödeme Linki Ekle"
        small={true}
        onCloseModal={() => setIsModalOpen(false)}
        subTitle="Lütfen formu doldurunuz."
      >
        <Divider text="Genel Bilgiler" />
        <div className="p-1">
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
    </div>
  );
};

export default LinkDetail;
