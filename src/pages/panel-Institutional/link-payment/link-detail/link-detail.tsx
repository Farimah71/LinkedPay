import { useState } from "react";
import { Button } from "../../../../components/button";
import { Divider } from "../../../../components/divider";
import {
  IconArrowRight,
  IconDelete,
  IconPen,
} from "../../../../components/icons/icons";
import { Input } from "../../../../components/input";
import { SelectInput } from "../../../../components/select";
import { Link } from "react-router-dom";
import { EditLink } from "./modal/edit";
import { DeleteModal } from "../../../../components/actionModals/delete";

type ModalsType = "edit" | "delete" | "";

const LinkDetail: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<ModalsType>("");

  const closeModalHandler = () => {
    setIsModalOpen("");
  };
  return (
    <>
      <EditLink
        state={isModalOpen == "edit"}
        onCloseModal={closeModalHandler}
      />
      <DeleteModal
        state={isModalOpen == "delete"}
        onCloseModal={closeModalHandler}
        confirmLabel="Siteyi Sil"
        subTitle="Mayo spinach lasagna NY personal. Burnt lot Hawaiian olives Hawaiian white tomato tomato anchovies. Ricotta white and pan mouth."
      />
      <div className="container w-full flex items-center gap-6 text-sm text-base-content-40 p-4">
        <p>Trpos</p>
        <IconArrowRight width={20} height={20} viewBox="0 0 20 20" />
        <p>Ödeme Linkleri</p>
        <IconArrowRight width={20} height={20} viewBox="0 0 20 20" />
        <Link to={"/dashboard/Institutional/linkPayment"}>Liste</Link>
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
                  onClick={() => setIsModalOpen("edit")}
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
                  onClick={() => setIsModalOpen("delete")}
                >
                  <IconDelete width={20} height={20} viewBox="0 0 20 20" />
                  Sil
                </Button>
              </div>
            </div>
            <hr className="my-6" />
            <div className="w-full flex-grow">
              <Divider text="Genel Bilgiler" />
              <div className="grid grid-cols-3 gap-6 mt-4">
                <SelectInput label="Web Site" isSimple={true} />
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
    </>
  );
};

export default LinkDetail;
