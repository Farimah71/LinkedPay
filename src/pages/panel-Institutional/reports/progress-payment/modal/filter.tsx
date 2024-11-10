import React from "react";
import { BaseModalProps } from "../../../../../types/modal.types";
import { Divider } from "../../../../../components/divider";
import { Input } from "../../../../../components/input";
import { Button } from "../../../../../components/button";
import { Modal } from "../../../../../components/modal";

export const FilterProgressPaymentModal : React.FC<BaseModalProps> = ({
    state,
    onCloseModal
}) => {
    return (
        <Modal
        state={state}
        title="İşlem Detayları"
        onCloseModal={onCloseModal}
        subTitle="Lütfen formu doldurunuz."
      >
        <Divider text="Web Site Bilgileri" />
        <div className="p-1">
          <Input label="Web Site URL Adresi" />
        </div>

        <Divider text="İşlem Bilgileri" />
        <div className="grid grid-cols-2 gap-4 p-1">
          <Input label="İşlem No" />
          <Input label="Sipariş No" />
          <Input label="İşlem Tarihi" />
          <Input label="Valör Tarihi" />
          <div className="col-span-2 grid grid-cols-3 gap-4">
            <Input label="Brüt Tutar" value="60.078,90" />
            <Input
              label="Brüt Tutar"
              value="40,00"
              inputClassName="!text-primary"
            />
            <Input
              label="Brüt Tutar"
              value="60.078,90"
              inputClassName="!text-error"
            />
          </div>
        </div>

        <Divider text="Durum Bilgileri" />
        <div className="p-1 grid grid-cols-2 gap-4">
          <Input label="Satış Tipi" />
          <Input label="İşlem Tipi" />
        </div>

        <Divider text="Hakediş Bilgileri" />
        <div className="p-1 grid grid-cols-2 gap-4">
          <Input label="Hakediş Tutarı" />
          <Input
            label="Hakediş Ödeme Durumu"
            value="Yapıldı"
            inputClassName="!text-blue"
          />
        </div>

        <Divider text="Müşteri Bilgileri" />
        <div className="p-1 grid grid-cols-2 gap-4">
          <Input label="Kart Numarası" />
          <Input label="IP Numarası" />
        </div>

        <div className="grid grid-cols-3 gap-4">
          <Button
            variant="error"
            shape="full"
            size="medium"
            className="mt-6 !text-base !font-medium hover:!text-actual-white"
            isOutline={true}
          >
            İptal Et
          </Button>
          <Button
            variant="secondary"
            shape="full"
            size="medium"
            className="mt-6 !text-base !font-medium"
            isOutline={true}
          >
            İade Yap
          </Button>
          <Button
            variant="primary"
            shape="full"
            size="medium"
            className="mt-6 !text-base !font-medium"
          >
            Dekont Al
          </Button>
        </div>
      </Modal>
    )
}