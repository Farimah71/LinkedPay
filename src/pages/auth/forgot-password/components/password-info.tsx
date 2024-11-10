import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/button";
import { Input } from "../../../../components/input";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ForgotPasswordInputs } from "../forgot-password.types";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux-hooks";
import { ForgetPasswordRequest } from "../../../../redux/actions/auth/forget-password";
import { parsePhoneNumber } from "../../../../helper/parse-phone";
import { PhoneInput } from "../../../../components/phone-input";
import * as yup from "yup";

export const PasswordInfo = () => {
  const { isButtonLoading } = useAppSelector(
    (state) => state.buttonLoadingSlice
  );

  const dispatch = useAppDispatch();

  const passwordInfoSchema = yup.object().shape({
    phoneNumber: yup
      .string()
      .required("Telefon numarası gerekli")
      .matches(
        /^\+([1-9]{1})([0-9]{1,2})?([0-9]{10})$/,
        "Biçim: +901234567890"
      ),
    email: yup
      .string()
      .required()
      .matches(/^(?=.{8,50}$)[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/),
    lang: yup.string(),
    phoneCountry: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
    trigger,
  } = useForm<ForgotPasswordInputs>({
    defaultValues: {
      lang: localStorage.trpos__lng,
      phoneCountry: "",
      phoneNumber: "",
      email: "",
    },
    resolver: yupResolver(passwordInfoSchema),
    mode: "all",
  });

  const onSubmit: SubmitHandler<ForgotPasswordInputs> = (data) => {
    const parsePhone = parsePhoneNumber(data.phoneNumber);

    const dataToSend = {
      ...data,
      phoneNumber: parsePhone?.number!,
      phoneCountry: parsePhone?.country,
    };

    dispatch(ForgetPasswordRequest(dataToSend));
  };

  useEffect(() => {
    trigger();
  }, [trigger]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full sm:bg-actual-white sm:p-8 rounded-2.5xl sm:shadow-sm mt-[10%]"
    >
      <div>
        <h1 className="xl:text-2xl text-base-content font-semibold">
          فراموشی رمز عبور
        </h1>
        <p className="xl:text-sm text-[12px] text-base-content-light mt-1 pl-1 opacity-60">
          رمز عبور خود را بازنشانی کنید
        </p>
      </div>
      <div className="mt-6">
        <PhoneInput
          label="شماره تلفن"
          register={{ ...register("phoneNumber") }}
          error={errors.phoneNumber?.message}
          touched={touchedFields.phoneNumber}
        />
        <Input
          label="ایمیل"
          register={{ ...register("email") }}
          error={errors.email?.message}
          touched={touchedFields.email}
          className="mt-4"
        />
      </div>

      <Button
        type="submit"
        variant="primary"
        size="medium"
        shape="full"
        className="mt-6"
        isDisabled={Object.keys(errors).length > 0 ? true : false}
        isLoading={isButtonLoading}
      >
        ادامه
      </Button>

      <span className="opacity-40 text-sm my-6 w-full text-center flex">
        <div className="w-full border-b-2 -translate-y-2"></div>
        <span className="text-nowrap px-5">یا</span>
        <div className="w-full border-b-2 -translate-y-2"></div>
      </span>

      <Link
        state={{ token: "isValid" }}
        to={"/change-phone"}
        className="text-success block text-center font-medium text-sm"
      >
        تغییر شماره تلفن
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
