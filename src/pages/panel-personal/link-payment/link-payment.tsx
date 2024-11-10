import { useState } from "react";
import { Badge } from "../../../components/badge/badge";
import { BadgeProps } from "../../../components/badge/badge.type";
import { Button } from "../../../components/button";
import {
  IconArrowRight,
  IconEyeComplete,
  IconPen,
  IconPlus,
  IconSearch,
} from "../../../components/icons/icons";
import { TableColumn } from "react-data-table-component";
import { Table } from "../../../components/table";
import { Link } from "react-router-dom";
import { NumberSelectInput } from "../../../components/number-select";
import { Divider } from "../../../components/divider";
import { Input } from "../../../components/input";
import { CheckBox } from "../../../components/checkboxes";
import { Modal } from "../../../components/modal";

const badgeText: Record<BadgeProps["badgeColor"], string> = {
  primary: "Onay Bekliyor",
  success: "Aktif",
  error: "Kapandı",
};

const LinkPayment = () => {
  type DataType = {
    id: number;
    product: string;
    installment: string;
    expiration: string;
    moq: string;
    badge: BadgeProps["badgeColor"];
  };
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const columns: TableColumn<DataType>[] = [
    {
      name: "Sıra",
      selector: (row) => row.id,
      grow: 1,
    },
    {
      name: "Ürün / Hizmet Adı",
      selector: (row) => row.product,
      grow: 4,
      style: { color: "black", fontWeight: "500" },
    },
    {
      name: "Taksit",
      selector: (row) => row.installment,
      grow: 2,
    },
    {
      name: "Link Bitiş Tarihi",
      selector: (row) => row.expiration,
      grow: 2,
    },
    {
      name: "Ö. Adedi",
      selector: (row) => row.moq,
      grow: 2,
    },
    {
      name: "Durum",
      cell: (row) => (
        <Badge badgeColor={row.badge} text={badgeText[row.badge]} />
      ),
      grow: 4,
    },
    {
      name: "",
      cell: () => (
        <div className="flex flex-col gap-1 2xl:flex-row 2xl:gap-0 items-center">
          <Button isLink={true} className="hover:no-underline">
            <IconEyeComplete
              width={24}
              height={24}
              viewBox="0 0 24 24"
              className="text-primary"
            />
            <Link to="/dashboard/personal/linkDetail/1">Görüntüle</Link>
          </Button>
          <Button isLink={true} className="hover:no-underline !text-orange">
            <IconPen
              width={24}
              height={24}
              viewBox="0 0 24 24"
              className="text-orange"
            />
            Düzenle
          </Button>
        </div>
      ),
      grow: 5,
    },
  ];

  const data: DataType[] = [
    {
      id: 1,
      product: "Arçelik Televizyon QHD",
      installment: "Peşin",
      expiration: "01.02.2024",
      moq: "10",
      badge: "primary",
    },
    {
      id: 2,
      product: "Arçelik Televizyon QHD",
      installment: "3 Taksit",
      expiration: "01.02.2024",
      moq: "16",
      badge: "success",
    },
    {
      id: 3,
      product: "Vestel Klima",
      installment: "6 Taksit",
      expiration: "16.06.2024",
      moq: "90",
      badge: "error",
    },
  ];

  return (
    <>
      <div className="container w-full flex items-center gap-6 text-sm text-base-content-40 p-4">
        <p>Trpos</p>
        <IconArrowRight width={20} height={20} viewBox="0 0 20 20" />
        <p className="text-primary">Ödeme Linkleri</p>
      </div>
      <div className="outlet w-full h-full container p-4 pb-8">
        <div className="w-full h-full bg-actual-white rounded-2.5xl p-6">
          <div className="w-full h-full flex flex-col">
            <div className="w-full flex justify-between items-center">
              <div>
                <h1 className="text-[18px] text-base-content font-rubik font-medium">
                  Linkleriniz
                </h1>
                <p className="subTitle_text text-xs text-base-content-40 mt-2">
                  Lorem, ipsum.
                </p>
              </div>
              <div className="flex items-center gap-6">
                <Button
                  isOutline={true}
                  className="text-sm !rounded-2xl !border-[#e5e7eb] !text-base-content-20"
                >
                  <IconSearch
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    className="text-base-content"
                  />
                  Ara...
                </Button>

                <NumberSelectInput
                  placeholder="Se..."
                  options={[
                    { value: 5, label: "5" },
                    { value: 6, label: "6" },
                    { value: 7, label: "7" },
                  ]}
                />

                <Button
                  variant="primary"
                  className="text-sm !rounded-2xl"
                  onClick={() => setIsModalOpen(true)}
                  isInTop
                >
                  <IconPlus width={24} hanging={24} viewBox="0 0 24 24" />
                  Yeni Link Oluştur
                </Button>
              </div>
            </div>
            <div className="w-full flex-grow mt-6">
              <Table columns={columns} data={data} />
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
          <Input label="Ürün Hizmet Adı" />
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
    </>
  );
};

export default LinkPayment;
