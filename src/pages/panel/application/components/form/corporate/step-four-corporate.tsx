import { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../../../../../../components/button";
import { FileUploader } from "../../../../../../components/uploader";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../../hooks/redux-hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { createCorporateApp } from "../../../../../../redux/actions/settings/request";
import * as yup from "yup";

interface StepFourInputType {
  identityCardFile: FileList;
  Tax_Plate?: any;
  Circular_of_Signuture?: any;
  Recepit_lban?: any;
}

export const StepFourCorporate = () => {
  const [fileNames, setFileNames] = useState({
    identityCardFile: "",
    Tax_Plate: "",
    Circular_of_Signuture: "",
    Recepit_lban: "",
  });

  const { authorizeInformation, identityTax } = useAppSelector(
    (state) => state.companyApplicationSlice
  );
  const { isButtonLoading } = useAppSelector(
    (state) => state.buttonLoadingSlice
  );

  const dispatch = useAppDispatch();

  const validate = yup.object().shape({
    identityCardFile: yup
      .mixed<FileList>()
      .test("fileExists", "Kimlik Kartı Ön Yüz gereklidir", (value) => {
        return value && value.length > 0;
      })
      .required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
    trigger,
  } = useForm<StepFourInputType>({
    resolver: yupResolver(validate),
    mode: "all",
  });

  useEffect(() => {
    trigger();
  }, [trigger]);

  const onSubmit: SubmitHandler<StepFourInputType> = (data) => {
    dispatch(
      createCorporateApp({
        identityCardFile: data.identityCardFile[0],
        "RegistrationFile.Circular_of_Signuture": data.Circular_of_Signuture[0],
        "RegistrationFile.Tax_Plate": data.Tax_Plate[0],
        "RegistrationFile.Receipt_Iban": data.Recepit_lban[0],
        "RegistrationAddContractVerified.ContractVerified[0].IsConfirmed": true,
        "RegistrationAddContractVerified.ContractVerified[0].ContractTypeId":
          "1",
        ...identityTax,
        ...authorizeInformation,
      })
    );
  };

  return (
    <form className="pe-2 mt-3" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-y-3 mb-3">
        <FileUploader
          id="Kartı"
          title="Kimlik Kartı Ön Yüz"
          register={{
            ...register("identityCardFile", {
              onChange: (event) => {
                setFileNames({
                  ...fileNames,
                  identityCardFile: event.target.files[0].name,
                });
              },
            }),
          }}
          fileName={fileNames.identityCardFile}
          warning={
            touchedFields.identityCardFile && errors.identityCardFile?.message
          }
        />
        <FileUploader
          id="Levhası"
          title="Vergi Levhası"
          register={{
            ...register("Tax_Plate", {
              onChange: (event) => {
                setFileNames({
                  ...fileNames,
                  Tax_Plate: event.target.files[0].name,
                });
              },
            }),
          }}
          fileName={fileNames.Tax_Plate}
        />
        <FileUploader
          id="İmza"
          title="İmza Sirküsü"
          register={{
            ...register("Circular_of_Signuture", {
              onChange: (event) => {
                setFileNames({
                  ...fileNames,
                  Circular_of_Signuture: event.target.files[0].name,
                });
              },
            }),
          }}
          fileName={fileNames.Circular_of_Signuture}
        />
        <FileUploader
          id="Mobil"
          title="Hesap Dekontu - Mobil Bankacılık Ekran Görüntüsü"
          register={{
            ...register("Recepit_lban", {
              onChange: (event) => {
                setFileNames({
                  ...fileNames,
                  Recepit_lban: event.target.files[0].name,
                });
              },
            }),
          }}
          fileName={fileNames.Recepit_lban}
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
