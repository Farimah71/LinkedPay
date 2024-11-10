import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../../../../components/button";
import { Input } from "../../../../components/input";
import { SelectInput } from "../../../../components/select/select";
import { yupResolver } from "@hookform/resolvers/yup";
import { SetPasswordInputs } from "../forgot-password.types";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux-hooks";
import { ResetPassword } from "../../../../redux/actions/auth/forget-password";
import * as yup from "yup";

export const SetPassword = () => {
  const { ip } = useAppSelector((state) => state.IpSlice);

  const dispatch = useAppDispatch();

  const setPasswordSchema = yup.object().shape({
    password: yup
      .string()
      .min(6, "Şifre 6 rakamdan oluşmalıdır")
      .max(6, "Maksimum 6 karakter")
      .required()
      .matches(
        /^(?!\d*(?:012|123|234|345|456|567|678|789|890|901|210|321|432|543|654|765|876|987|098|109))/,
        "Ardışık sayılardan oluşamaz"
      )
      .matches(/^\d{6}$/, "Yalnızca sayılara izin verilir")
      .matches(/^(?!.*(\d)(\1))\d+$/, "Tekrarlanan sayılardan oluşamaz"),
    confirmPassword: yup
      .string()
      .required("Şifre tekrarı zorunlu bir alandır")
      .oneOf([yup.ref("password")], "Şifre ve tekrar şifre eşleşmiyor"),
    passwordEndDate: yup.number().required(),
    ip: yup.string(),
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, touchedFields },
    control,
    trigger,
  } = useForm<SetPasswordInputs>({
    defaultValues: {
      ip: "",
    },
    resolver: yupResolver(setPasswordSchema),
    mode: "all",
  });

  useEffect(() => {
    trigger();
  }, [trigger]);
  useEffect(() => {
    ip && setValue("ip", ip);
  }, [ip]);

  const onSubmit: SubmitHandler<SetPasswordInputs> = (data) => {
    dispatch(ResetPassword(data));
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full sm:bg-actual-white sm:p-8 mt-[10%] rounded-2.5xl sm:shadow-sm"
    >
      <div>
        <h1 className="xl:text-2xl text-base-content font-semibold">
          Şifreni Belirle
        </h1>
        <p className="xl:text-sm text-[12px] text-base-content-light mt-1 pl-1 opacity-60">
          Lütfen yeni şifrenizi giriniz.
        </p>
      </div>
      <div className="mt-6">
        <div className="">
          <Input
            type="password"
            label="Yeni Şifreniz"
            className=""
            isPassword={true}
            register={{ ...register("password") }}
            error={errors.password?.message}
            touched={touchedFields.password}
          />
          <Input
            type="password"
            label="Yeni Şifreniz (Tekrardan)"
            className="mt-4"
            isPassword={true}
            register={{ ...register("confirmPassword") }}
            error={errors.confirmPassword?.message}
            touched={touchedFields.confirmPassword}
          />
          <SelectInput
            name="passwordEndDate"
            control={control}
            placeholder="Şifre Değiştirme Süresi"
            options={[
              { value: 3 * 30, label: "3 ay" },
              { value: 6 * 30, label: "6 ay" },
              { value: 12 * 30, label: "1 yıl" },
            ]}
            className="mt-4 w-full"
            error={errors.passwordEndDate?.message}
            touched={touchedFields.passwordEndDate}
            register={{ ...register("passwordEndDate") }}
          />
        </div>
      </div>

      <Button
        type="submit"
        variant="primary"
        size="medium"
        shape="full"
        className="mt-6"
        isDisabled={Object.keys(errors).length > 0 ? true : false}
      >
        Devam Et
      </Button>
    </form>
  );
};
