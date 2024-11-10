import { useForm } from "react-hook-form";
import { Button } from "../../../../../components/button";
import { Divider } from "../../../../../components/divider";
import { Input } from "../../../../../components/input";
import { Modal } from "../../../../../components/modal";
import { useAppSelector } from "../../../../../hooks/redux-hooks";
import { DetailModalProps } from "./types/detail.types";
import LoadingBar from "react-top-loading-bar";
import { useEffect } from "react";

export const DetailModal: React.FC<DetailModalProps> = ({
  state,
  onCloseModal,
  cancelModalHandler,
  refundModalHandler,
}) => {
  const { editInfo , loading }=useAppSelector(state => state.transactionReportSlice);

  const { register , handleSubmit , reset }=useForm();

  useEffect(() => {
    if(editInfo) {
      reset({

      })
    }
  } , [editInfo]);


  return (
    <Modal
      state={state}
      title="İşlem Detayları"
      onCloseModal={onCloseModal}
      subTitle="Lütfen formu doldurunuz."
    >
      {
        loading ? <LoadingBar /> : (
          <form action="" className="mb-6">
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
                <Input label="Brüt Tutar" value="₺ 60.078,90" />
                <Input
                  label="Komisyon Tutarı"
                  value="₺ 40,00"
                  inputClassName="!text-error"
                />
                <Input
                  label="Net Tutar"
                  value="₺ 60.078,90"
                  inputClassName="!text-success"
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
                onClick={cancelModalHandler}
              >
                İptal Et
              </Button>
              <Button
                variant="secondary"
                shape="full"
                size="medium"
                className="mt-6 !text-base !font-medium"
                isOutline={true}
                onClick={refundModalHandler}
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
          </form>
        )
      }
    </Modal>
  );
};
