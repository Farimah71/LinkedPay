import { useState } from "react";
import { Button } from "../../../../components/button";
import { Divider } from "../../../../components/divider";
import {
  IconArrowRight,
  IconDelete,
  IconPen,
} from "../../../../components/icons/icons";
import { Input } from "../../../../components/input";
import { Link } from "react-router-dom";
import { DeleteModal } from "../../../../components/actionModals/delete";
import { EditModal } from "./modal/edit";
import { BanksModal } from "./modal/banks";
import { CardModal } from "./modal/card";
import { InstallmentModal } from "./modal/installment";

type ModalsType = "edit" | "delete" | "banks" | "card" | "installment" | "";

const SiteDetail: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<ModalsType>("");

  function closeModalHandler() {
    setIsModalOpen("");
  }

  return (
    <>
      <div className="container w-full flex items-center gap-6 text-sm text-base-content-40 p-4">
        <p>Trpos</p>
        <IconArrowRight width={20} height={20} viewBox="0 0 20 20" />
        <p>Web Site Yönetimi</p>
        <IconArrowRight width={20} height={20} viewBox="0 0 20 20" />
        <Link to={"/dashboard/Institutional/webManagement"}>Liste</Link>
        <IconArrowRight width={20} height={20} viewBox="0 0 20 20" />
        <p className="text-primary">Site Detayları</p>
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
              <Divider text="Hesap Bilgileri" />
              <div className="flex items-center gap-6 mt-4">
                <Input label="Hakediş Hesap IBAN Numarası" isSimple={true} />
                <Input label="Hesap Sahibi Adı ve Soyadı" isSimple={true} />
              </div>

              <Divider text="WEB Site Bilgileri" />
              <div className="grid grid-cols-2 gap-6 mt-4">
                <Input
                  label="Web Site / İş Yeri / Mağaza Adı"
                  isSimple={true}
                />
                <Input label="Web Site URL Adresi" isSimple={true} />
                <Input label="Taksit Seçeneği" isSimple={true} />
                <Input label="MCC Kodu" isSimple={true} />
              </div>

              <Divider text="API Bilgileri" />
              <div className="grid grid-cols-2 gap-6 mt-4">
                <Input
                  label="Web Site / İş Yeri / Mağaza Adı"
                  isSimple={true}
                />
                <Input label="Web Site URL Adresi" isSimple={true} />
              </div>

              <Divider text="Kayıt Bilgileri" />
              <div className="grid grid-cols-2 gap-6 mt-4">
                <Input label="Kayıt Tarihi" isSimple={true} />
                <Input label="Durum" isSimple={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container w-full grid grid-cols-3 gap-6 p-4 mb-6">
        <div className="w-full bg-actual-white p-6 rounded-2.5xl">
          <h1 className="text-lg text-base-content font-medium">
            Banka Listesi
          </h1>
          <p className="text-sm text-base-content-60 mt-4">
            Mozzarella buffalo wing meatball style white extra. Peppers
            mozzarella tomatoes thin bell lot ipsum pan roll buffalo.
          </p>
          <Button
            onClick={() => setIsModalOpen("banks")}
            variant="primary"
            isLight={true}
            className="!text-primary mt-6"
          >
            İncele
            <IconArrowRight width={20} height={20} viewBox="0 0 20 20" />
          </Button>
        </div>
        <div className="w-full bg-actual-white p-6 rounded-2.5xl">
          <h1 className="text-lg text-base-content font-medium">
            Tanımlı Kart Listesi
          </h1>
          <p className="text-sm text-base-content-60 mt-4">
            Mozzarella buffalo wing meatball style white extra. Peppers
            mozzarella tomatoes thin bell lot ipsum pan roll buffalo.
          </p>
          <Button
            onClick={() => setIsModalOpen("card")}
            variant="primary"
            isLight={true}
            className="!text-primary mt-6"
          >
            İncele
            <IconArrowRight width={20} height={20} viewBox="0 0 20 20" />
          </Button>
        </div>
        <div className="w-full bg-actual-white p-6 rounded-2.5xl">
          <h1 className="text-lg text-base-content font-medium">
            Taksit / Komisyon Oranları
          </h1>
          <p className="text-sm text-base-content-60 mt-4">
            Mozzarella buffalo wing meatball style white extra. Peppers
            mozzarella tomatoes thin bell lot ipsum pan roll buffalo.
          </p>
          <Button
            onClick={() => setIsModalOpen("installment")}
            variant="primary"
            isLight={true}
            className="!text-primary mt-6"
          >
            İncele
            <IconArrowRight width={20} height={20} viewBox="0 0 20 20" />
          </Button>
        </div>
      </div>
      <DeleteModal
        state={isModalOpen === "delete"}
        confirmLabel="Siteyi Sil"
        subTitle="Mayo spinach lasagna NY personal. Burnt lot Hawaiian olives Hawaiian white tomato tomato anchovies. Ricotta white and pan mouth."
        onCloseModal={closeModalHandler}
      />
      <EditModal
        state={isModalOpen === "edit"}
        onCloseModal={closeModalHandler}
      />
      <BanksModal
        state={isModalOpen === "banks"}
        onCloseModal={closeModalHandler}
      />
      <CardModal
        state={isModalOpen === "card"}
        onCloseModal={closeModalHandler}
      />
      <InstallmentModal
        state={isModalOpen === "installment"}
        onCloseModal={closeModalHandler}
      />
    </>
  );
};

export default SiteDetail;
