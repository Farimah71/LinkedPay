import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/button";
import { Input } from "../../../../components/input";
import { PhoneInput } from "../../../../components/phone-input";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { changePhoneInputs } from "../change-phone.types";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux-hooks";
import { ChangePhoneRequest } from "../../../../redux/actions/auth/change-phone";
import { parsePhoneNumber } from "../../../../helper/parse-phone";
import * as yup from "yup";

export const PhoneInfo = () => {
  const { ip } = useAppSelector((state) => state.IpSlice);
  const { isButtonLoading } = useAppSelector(
    (state) => state.buttonLoadingSlice
  );

  const dispatch = useAppDispatch();

  const registerSchema = yup.object().shape({
    lang: yup.string().required(),
    phoneCountry: yup.string(),
    phoneNumber: yup
      .string()
      .required("Telefon numarası gerekli")
      .matches(/^\+([1-9]{1})([0-9]{1,2})?([0-9]{10})$/, "Biçim: +901234567890")
      .notOneOf([yup.ref("currentPhoneNumber")], "Aynı numarayı giremezsiniz"),
    currentPhoneNumber: yup
      .string()
      .required("Telefon numarası gerekli")
      .matches(
        /^\+([1-9]{1})([0-9]{1,2})?([0-9]{10})$/,
        "Biçim: +901234567890"
      ),
    currentPhoneCountry: yup.string(),
    email: yup
      .string()
      .required()
      .matches(/^(?=.{8,50}$)[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/),
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
    ip: yup.string(),
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, touchedFields },
    trigger,
  } = useForm<changePhoneInputs>({
    defaultValues: {
      lang: localStorage.trpos__lng,
      phoneCountry: "",
      phoneNumber: "",
      ip: "",
      currentPhoneNumber: "",
      currentPhoneCountry: "",
      email: "",
      password: "",
    },
    resolver: yupResolver(registerSchema),
    mode: "all",
  });

  useEffect(() => {
    trigger();
  }, [trigger]);
  useEffect(() => {
    ip && setValue("ip", ip);
  }, [ip]);

  const onSubmit: SubmitHandler<changePhoneInputs> = (data) => {
    const parsePhone = parsePhoneNumber(data.phoneNumber);
    const parseCurrentPhone = parsePhoneNumber(data.currentPhoneNumber);

    const dataToSend = {
      ...data,
      phoneNumber: parsePhone?.number,
      phoneCountry: parsePhone?.country,
      currentPhoneNumber: parseCurrentPhone?.number,
      currentPhoneCountry: parseCurrentPhone?.country,
    };

    dispatch(ChangePhoneRequest(dataToSend));
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full sm:bg-actual-white sm:p-8 rounded-2.5xl sm:shadow-sm"
    >
      <div>
        <h1 className="xl:text-2xl text-base-content font-semibold">
          تغییر شماره تلفن
        </h1>
        <p className="xl:text-sm text-[12px] text-base-content-light mt-1 pl-1 opacity-60">
          شماره تلفن خود را بازنشانی کنید
        </p>
      </div>
      <div className="mt-6">
        <div className="lg:grid grid-cols-2 gap-x-3 justify-between">
          <PhoneInput
            label="شماره تلفن فعلی"
            register={{ ...register("currentPhoneNumber") }}
            touched={touchedFields.currentPhoneNumber}
            error={errors.currentPhoneNumber?.message}
          />
          <PhoneInput
            label="شمراه تلفن جدید"
            register={{ ...register("phoneNumber") }}
            className="mt-4 lg:mt-0"
            touched={touchedFields.phoneNumber}
            error={errors.phoneNumber?.message}
          />
        </div>
        <Input
          type="email"
          label="ایمیل"
          className="mt-4"
          register={{ ...register("email") }}
          touched={touchedFields.email}
          error={errors.email?.message}
        />
        <Input
          type="password"
          label="رمز عبور"
          className="mt-4"
          isPassword={true}
          register={{ ...register("password") }}
          autoComplete="new-password"
          touched={touchedFields.password}
          error={errors.password?.message}
        />
      </div>

      <Button
        type="submit"
        variant="primary"
        size="medium"
        shape="full"
        className="mt-6"
        isLoading={isButtonLoading}
        isDisabled={Object.keys(errors).length > 0 ? true : false}
      >
        ادامه
      </Button>

      <span className="opacity-40 text-sm my-6 w-full text-center flex">
        <div className="w-full border-b-2 -translate-y-2"></div>
        <span className="text-nowrap px-5">یا</span>
        <div className="w-full border-b-2 -translate-y-2"></div>
      </span>

      <Link
        to={"/forgot-password"}
        state={{ token: "isValid" }}
        className="text-success block text-center font-medium text-sm"
      >
        فراموشی رمز عبور
      </Link>
      <Link
        to={"/"}
        className="text-primary block text-center mt-2 font-medium text-sm"
      >
        ورود
      </Link>
    </form>
  );
};
