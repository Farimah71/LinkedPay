import { SubmitHandler, useForm } from "react-hook-form"
import { Button } from "../../../../../components/button"
import { Divider } from "../../../../../components/divider"
import { Input } from "../../../../../components/input"
import { Modal } from "../../../../../components/modal"
import { SelectInput } from "../../../../../components/select"
import { BaseModalProps } from "../../../../../types/modal.types"
import { useAppDispatch, useAppSelector } from "../../../../../hooks/redux-hooks"
import { setTransactionReportFilterValue } from "../../../../../redux/reducers/reports/transaction"
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"
import { useEffect } from "react"
import { getBankList } from "../../../../../redux/actions/settings/bank"
import { convertArrayToSelectOptions } from "../../../../../helper/convert-array-to-select-options"

type FilterInputType = {
      "StartDate":string,
      "EndDate":string,
      "TransactionTypeId": string,
      "SiteId": string,
      "BankId": string,
      "CurrencyId": string,
      "SalesType": string,
}

export const FilterModal:React.FC<BaseModalProps> = ({
    state,
    onCloseModal
} : BaseModalProps) => {

  const { filterValue }=useAppSelector(state => state.transactionReportSlice);
  const { info:bankList , loading:bankLoading }=useAppSelector(state => state.bankListSlice);

  const dispatch=useAppDispatch();

  const validate=yup.object().shape({
     "StartDate":yup.string().required(),
      "EndDate":yup.string().required(),
      "TransactionTypeId":yup.string().required(),
      "SiteId":yup.string().required(),
      "BankId":yup.string().required(),
      "CurrencyId":yup.string().required(),
      "SalesType":yup.string().required(),
  })

  const { register , handleSubmit , control , formState:{errors} , trigger }=useForm<FilterInputType>({
    resolver:yupResolver(validate),
    mode:"all"
  });

  console.log(errors);

  const onSubmit : SubmitHandler<FilterInputType> = (data) => {
    dispatch(setTransactionReportFilterValue({
      ...filterValue,
      ...data
    }));
  };

  useEffect(() => {
    dispatch(getBankList());
  } , []);


  useEffect(() => {
    trigger();
  } , [trigger]);

    return (
        <Modal
        state={state}
        title="İşlem Detayları"
        small={true}
        onCloseModal={onCloseModal}
        subTitle="Lütfen formu doldurunuz."
      >
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <Divider text="Tarih Aralığı" />
          <div className="p-1">
            <Input label="Başlangıç Tarihi" type="date" register={{...register("StartDate")}} error={errors.StartDate?.message} />
            <Input label="Bitiş Tarihi" type="date" className="mt-3" register={{...register("EndDate")}} error={errors.EndDate?.message} />
          </div>

          <Divider text="Daha Fazla Filtre" />
          <div className="p-1">
            <SelectInput placeholder="İşlem Türü" control={control} name="TransactionTypeId" options={[{value:"1" , label:"1"}]} register={{...register("TransactionTypeId")}} />
            <SelectInput placeholder="İşlem Tipi" className="mt-3" control={control} name="" options={[{value:"1" , label:"1"}]} />
            <SelectInput placeholder="WEB Site" className="mt-3" control={control} name="SiteId" options={[{value:"1" , label:"1"}]} register={{...register("SiteId")}} />
            <SelectInput placeholder="İşlem Yapılan Banka" className="mt-3" control={control} name="BankId" options={bankList.length ? convertArrayToSelectOptions(bankList , ["id" , "name"]) : []} isLoading={bankLoading} register={{...register("BankId")}} />
            <SelectInput placeholder="Para Birimi" className="mt-3" control={control} name="CurrencyId" options={[{value:"1" , label:"1"}]} register={{...register("CurrencyId")}} />
            <SelectInput placeholder="Satış" className="mt-3" control={control} name="SalesType" options={[{value:"1" , label:"1"}]} register={{...register("SalesType")}} />
          </div>

          <Button
              variant="primary"
              shape="full"
              size="medium"
              className="mt-6 !text-base !font-medium"
              type="submit"
              isDisabled={Object.keys(errors).length > 0 ? true : false}
              >
                  Uygula
          </Button>
        </form>
      </Modal>
    )
}