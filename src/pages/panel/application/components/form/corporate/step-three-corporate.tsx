import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../../../../../../components/button";
import { CheckBox } from "../../../../../../components/checkboxes";
import { Input } from "../../../../../../components/input";
import { PhoneInput } from "../../../../../../components/phone-input";
import { SelectInput } from "../../../../../../components/select";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../../hooks/redux-hooks";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  setAuthorizeInformation,
  setCompanyApplicationStep,
} from "../../../../../../redux/reducers/application/company-application";
import { InputErrorComponent } from "../../../../../../components/inputError";
import { parsePhoneNumber } from "../../../../../../helper/parse-phone";
import { getAllProfessions } from "../../../../../../redux/actions/settings/profession";
import * as yup from "yup";
import { convertArrayToSelectOptions } from "../../../../../../helper/convert-array-to-select-options";
import { SelectOption } from "../../../../../../types/select-option.types";

interface StepThreeInputsType {
  AuthName: string;
  AuthSurName: string;
  AuthEmail: string;
  AuthGsmNo: string;
  AuthProfessionId: string;
  identityNo: string;
  birthDate: string;
}

export const StepThreeCorporate = () => {
  const { info: userInfo } = useAppSelector((state) => state.userInfoSlice);
  const { info: professionInfo, loading: professionLoading } = useAppSelector(
    (state) => state.professionSlice
  );

  const [checkBoxValue, setCheckBoxValue] = useState<boolean>(false);
  const [professionOptions, setProfessionOptions] = useState<SelectOption[]>(
    []
  );

  const dispatch = useAppDispatch();

  const validate = yup.object().shape({
    AuthName: yup.string().required("Yetkili Adı zorunlu bir alandır"),
    AuthSurName: yup.string().required("Yetkili Soyadı zorunlu bir alandır"),
    AuthEmail: yup.string().required("Yetkili E-Posta zorunlu bir alandır"),
    AuthGsmNo: yup
      .string()
      .required("Yetkili Cep Numarası zorunlu bir alandır"),
    AuthProfessionId: yup.string().required("Meslek zorunlu bir alandır"),
    identityNo: yup
      .string()
      .required("Yetkili Kimlik Numarası zorunlu bir alandır"),
    birthDate: yup
      .string()
      .required("Yetkili Doğum Tarihi zorunlu bir alandır"),
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, touchedFields },
    trigger,
    reset,
  } = useForm<StepThreeInputsType>({
    resolver: yupResolver(validate),
    defaultValues: {
      AuthName: "",
      AuthSurName: "",
      AuthEmail: "",
      AuthGsmNo: "",
      identityNo: "",
      birthDate: "",
      AuthProfessionId: "",
    },
    mode: "all",
  });

  useEffect(() => {
    dispatch(getAllProfessions());
  }, []);
  useEffect(() => {
    trigger();
  }, [trigger]);
  useEffect(() => {
    if (professionInfo.length > 0) {
      const options: SelectOption[] = convertArrayToSelectOptions(
        professionInfo,
        ["id", "name"]
      );
      options && setProfessionOptions(options);
    }
  }, [professionInfo]);
  useEffect(() => {
    if (checkBoxValue) {
      reset({
        AuthName: userInfo.name,
        AuthSurName: userInfo.surName,
        AuthEmail: userInfo.email,
        AuthGsmNo: userInfo.phoneNumber,
        identityNo: "",
        birthDate: userInfo.birthDate,
        AuthProfessionId: userInfo.AuthProfessionId,
      });
    } else {
      reset({
        AuthName: "",
        AuthSurName: "",
        AuthEmail: "",
        AuthGsmNo: "",
        identityNo: "",
        birthDate: "",
        AuthProfessionId: "",
      });
    }
    trigger();
  }, [checkBoxValue]);

  const onSubmit: SubmitHandler<StepThreeInputsType> = (data) => {
    const parsedPhone = parsePhoneNumber("+" + data.AuthGsmNo);

    dispatch(
      setAuthorizeInformation({
        ...data,
        AuthGsmNo: parsedPhone?.number,
        AuthGsmCountry: parsedPhone?.country,
      })
    );
    dispatch(setCompanyApplicationStep(4));
  };

  return (
    <form className="pe-2 mt-3" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-y-3 mb-3">
        <CheckBox
          id="Başvuran"
          label="Başvuran kişi ile yetkili kişi aynı ise tıklayınız."
          className="mb-4"
          onChange={(event) => {
            setCheckBoxValue(event.target.checked);
          }}
        />
        <div className="flex gap-x-3">
          <div className="w-full">
            <Input
              label="Yetkili Adı"
              register={{ ...register("AuthName") }}
              readOnly={checkBoxValue ? false : false}
              error={errors.AuthName?.message}
              touched={touchedFields.AuthName}
            />
            {touchedFields.AuthName && errors.AuthName && (
              <InputErrorComponent text={errors.AuthName?.message} />
            )}
          </div>
          <div className="w-full">
            <Input
              label="Yetkili Soyadı"
              register={{ ...register("AuthSurName") }}
              readOnly={checkBoxValue ? false : false}
              error={errors.AuthSurName?.message}
              touched={touchedFields.AuthSurName}
            />
            {touchedFields.AuthSurName && errors.AuthSurName && (
              <InputErrorComponent text={errors.AuthSurName?.message} />
            )}
          </div>
        </div>
        <div>
          <Input
            label="Yetkili E-Posta"
            type="email"
            register={{ ...register("AuthEmail") }}
            readOnly={checkBoxValue ? true : false}
            error={errors.AuthEmail?.message}
            touched={touchedFields.AuthEmail}
            inputClassName={checkBoxValue ? "cursor-not-allowed" : ""}
          />
          {touchedFields.AuthEmail && errors.AuthEmail && (
            <InputErrorComponent text={errors.AuthEmail?.message} />
          )}
        </div>
        <div>
          <PhoneInput
            label="Yetkili Cep Numarası"
            register={{ ...register("AuthGsmNo") }}
            readOnly={checkBoxValue ? true : false}
            error={errors.AuthGsmNo?.message}
            touched={touchedFields.AuthGsmNo}
            inputClassName={checkBoxValue ? "cursor-not-allowed" : ""}
          />
          {touchedFields.AuthGsmNo && errors.AuthGsmNo && (
            <InputErrorComponent text={errors.AuthGsmNo?.message} />
          )}
        </div>
        <div>
          <Input
            label="Yetkili Kimlik Numarası"
            register={{ ...register("identityNo") }}
            readOnly={checkBoxValue ? false : false}
            error={errors.identityNo?.message}
            touched={touchedFields.identityNo}
          />
          {touchedFields.identityNo && errors.identityNo && (
            <InputErrorComponent text={errors.identityNo?.message} />
          )}
        </div>
        <div>
          <Input
            label="Yetkili Doğum Tarihi"
            type="date"
            register={{ ...register("birthDate") }}
            error={errors.birthDate?.message}
            touched={touchedFields.birthDate}
          />
          {touchedFields.birthDate && errors.birthDate && (
            <InputErrorComponent text={errors.birthDate?.message} />
          )}
        </div>
        <div>
          <SelectInput
            options={professionOptions}
            control={control}
            name="AuthProfessionId"
            placeholder="Meslek"
            searchable
            isLoading={professionLoading}
            register={{ ...register("AuthProfessionId") }}
            disabled={checkBoxValue ? false : false}
            error={errors.AuthProfessionId?.message}
            touched={touchedFields.AuthProfessionId}
          />
          {touchedFields.AuthProfessionId && errors.AuthProfessionId && (
            <InputErrorComponent text={errors.AuthProfessionId?.message} />
          )}
        </div>
      </div>

      <Button
        type="submit"
        variant="primary"
        shape="full"
        className="my-3"
        isDisabled={Object.keys(errors).length > 0 ? true : false}
      >
        Devam Et
      </Button>
    </form>
  );
};
