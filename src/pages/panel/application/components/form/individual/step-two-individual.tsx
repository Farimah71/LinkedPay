import { useEffect, useState } from "react";
import { Button } from "../../../../../../components/button";
import { FileUploader } from "../../../../../../components/uploader";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../../hooks/redux-hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { customerVerify } from "../../../../../../redux/actions/application/customer-verify";
import * as yup from "yup";

interface StepTwoInputs {
  identitiyCard: FileList;
  receipt_Iban: FileList;
}

export const StepTwoIndividual = () => {
  const [fileNames, setFileNames] = useState({
    identitiyCard: "",
    receipt_Iban: "",
  });

  const { isButtonLoading } = useAppSelector(
    (state) => state.buttonLoadingSlice
  );
  const { info: customerApplicationInfo } = useAppSelector(
    (state) => state.customerApplicationSlice
  );

  const dispatch = useAppDispatch();

  const validate = yup.object().shape({
    identitiyCard: yup
      .mixed<FileList>()
      .test("fileExists", "Bir dosya yüklemelisiniz", (value) => {
        return value && value.length > 0;
      })
      .required(),
    receipt_Iban: yup
      .mixed<FileList>()
      .test("fileExists", "Bir dosya yüklemelisiniz", (value) => {
        return value && value.length > 0;
      })
      .required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
    trigger,
  } = useForm<StepTwoInputs>({
    resolver: yupResolver(validate),
    mode: "all",
  });

  useEffect(() => {
    trigger();
  }, [trigger]);

  const onSubmit: SubmitHandler<StepTwoInputs> = (data) => {
    const dataToSend = {
      "verifyTcIdentityTrPos.IdentityNumber":
        customerApplicationInfo.verifyTcIdentityTrPos.IdentityNumber,
      "verifyTcIdentityTrPos.BirthDate":
        customerApplicationInfo.verifyTcIdentityTrPos.BirthDate,
      address: customerApplicationInfo.address,
      iban: customerApplicationInfo.Iban,
      nameSurname: customerApplicationInfo.nameSurname,
      identitiyCard: data.identitiyCard[0],
      receipt_Iban: data.receipt_Iban[0],
    };
    dispatch(customerVerify(dataToSend));
  };

  return (
    <form className="pe-2 mt-3" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-y-3 mb-3">
        <FileUploader
          id="Kartı"
          title="Kimlik Kartı Ön Yüz"
          register={{
            ...register("identitiyCard", {
              onChange: (event) => {
                setFileNames({
                  ...fileNames,
                  identitiyCard: event.target.files[0].name,
                });
              },
            }),
          }}
          warning={touchedFields.identitiyCard && errors.identitiyCard?.message}
          fileName={fileNames.identitiyCard}
        />

        <FileUploader
          id="Mobil"
          title="Hesap Dekontu - Mobil Bankacılık Ekran Görüntüsü"
          register={{
            ...register("receipt_Iban", {
              onChange: (event) => {
                setFileNames({
                  ...fileNames,
                  receipt_Iban: event.target.files[0].name,
                });
              },
            }),
          }}
          warning={touchedFields.receipt_Iban && errors.receipt_Iban?.message}
          fileName={fileNames.receipt_Iban}
        />
      </div>

      <Button
        type="submit"
        variant="primary"
        shape="full"
        className="my-3"
        isLoading={isButtonLoading}
        isDisabled={Object.keys(errors).length > 0 ? true : false}
      >
        Devam Et
      </Button>
    </form>
  );
};
