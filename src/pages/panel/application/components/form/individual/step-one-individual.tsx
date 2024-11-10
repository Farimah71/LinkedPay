import { useEffect } from "react";
import { Button } from "../../../../../../components/button";
import { CheckBox } from "../../../../../../components/checkboxes";
import { Input } from "../../../../../../components/input";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputErrorComponent } from "../../../../../../components/inputError";
import { useAppDispatch } from "../../../../../../hooks/redux-hooks";
import { omit } from "lodash";
import {
  setCustomerApplicationInfo,
  setCustomerApplicationStep,
} from "../../../../../../redux/reducers/application/customer-application";
import * as yup from "yup";

interface StepOneInputs {
  verifyTcIdentityTrPos: { IdentityNumber: string; BirthDate: string };
  nameSurname: string;
  address: string;
  Iban: string;
  shouldAccept: boolean;
}

export const StepOneIndividual = () => {
  const dispatch = useAppDispatch();

  const validate = yup.object().shape({
    verifyTcIdentityTrPos: yup
      .object()
      .shape({
        IdentityNumber: yup
          .string()
          .required("Kimlik numarası zorunlu bir alandır"),
        BirthDate: yup.string().required("Doğum tarihi zorunlu bir alandır"),
      })
      .required(),
    nameSurname: yup.string().required("Ad ve soyad zorunlu bir alandır"),
    address: yup.string().required("Adres zorunlu bir alandır"),
    Iban: yup.string().required("IBAN zorunlu bir alandır"),
    shouldAccept: yup.boolean().required().oneOf([true]),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
    trigger,
  } = useForm<StepOneInputs>({
    resolver: yupResolver(validate),
    mode: "all",
  });

  useEffect(() => {
    trigger();
  }, [trigger]);

  const onSubmit: SubmitHandler<StepOneInputs> = (data) => {
    const dataToSave = omit(data, "shouldAccept");
    dispatch(setCustomerApplicationInfo(dataToSave));
    dispatch(setCustomerApplicationStep(2));
  };

  return (
    <form className="pe-2" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-y-3">
        <div>
          <Input
            label="Adı - Soyadı"
            register={{ ...register("nameSurname") }}
            touched={touchedFields.nameSurname}
            error={errors.nameSurname?.message}
          />
          {touchedFields.nameSurname && errors.nameSurname && (
            <InputErrorComponent text={errors.nameSurname.message} />
          )}
        </div>
        <div>
          <Input
            label="TCKN"
            register={{ ...register("verifyTcIdentityTrPos.IdentityNumber") }}
            touched={touchedFields.verifyTcIdentityTrPos?.IdentityNumber}
            error={errors.verifyTcIdentityTrPos?.IdentityNumber?.message}
          />
          {touchedFields.verifyTcIdentityTrPos?.IdentityNumber &&
            errors.verifyTcIdentityTrPos?.IdentityNumber && (
              <InputErrorComponent
                text={errors?.verifyTcIdentityTrPos?.IdentityNumber.message}
              />
            )}
        </div>
        <div>
          <Input
            label="Doğum Tarihi"
            type="date"
            register={{ ...register("verifyTcIdentityTrPos.BirthDate") }}
            touched={touchedFields.verifyTcIdentityTrPos?.BirthDate}
            error={errors.verifyTcIdentityTrPos?.BirthDate?.message}
          />
          {touchedFields.verifyTcIdentityTrPos?.BirthDate &&
            errors.verifyTcIdentityTrPos?.BirthDate && (
              <InputErrorComponent
                text={errors.verifyTcIdentityTrPos?.BirthDate.message}
              />
            )}
        </div>
        <div>
          <Input
            label="Adresiniz"
            register={{ ...register("address") }}
            touched={touchedFields.address}
            error={errors.address?.message}
          />
          {touchedFields.address && errors.address && (
            <InputErrorComponent text={errors.address.message} />
          )}
        </div>
        <div>
          <Input
            label="Hakediş IBAN No"
            register={{ ...register("Iban") }}
            touched={touchedFields.Iban}
            error={errors.Iban?.message}
          />
          {touchedFields.Iban && errors.Iban && (
            <InputErrorComponent text={errors.Iban.message} />
          )}
        </div>
      </div>

      <CheckBox
        id="other-info"
        label="Bilgilerin doğruluğunu onaylıyorum."
        register={{ ...register("shouldAccept") }}
        className="mt-4"
      />
      <Button
        type="submit"
        variant="primary"
        shape="full"
        className="my-3"
        isDisabled={Object.keys(errors).length > 0 ? true : false}
      >
        Onaya Gönder
      </Button>
    </form>
  );
};
