import { useEffect } from "react";
import { Button } from "../../../../components/button";
import { Input } from "../../../../components/input";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { LoginInput } from "../types/login.types";
import { Link } from "react-router-dom";
import { parsePhoneNumber } from "../../../../helper/parse-phone";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux-hooks";
import { login } from "../../../../redux/actions/auth/login";
import * as yup from "yup";

export const RequestLogin: React.FC = () => {
  const { ip } = useAppSelector((state) => state.IpSlice);
  const { isButtonLoading } = useAppSelector(
    (state) => state.buttonLoadingSlice
  );

  const dispatch = useAppDispatch();

  const phoneRegex = /^\+?([1-9]{1})?([0-9]{1,2})?([0-9]{10})$/;
  const emailRegex =
    /^(?=.{8,50}$)[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  const loginSchema = yup.object().shape({
    phoneOrEmail: yup
      .string()
      .required()
      .test(
        "is_phone_or_email",
        "فرمت شماره تلفن یا ایمیل درست نمی باشد",
        (value) => phoneRegex.test(value) || emailRegex.test(value)
      ),
    password: yup
      .string()
      .min(6, "رمز عبور باید ۶ کراکتر باشد")
      .max(6, "رمز عبور حداکثر باید ۶ کراکتر باشد")
      .required()
      .matches(
        /^(?!\d*(?:012|123|234|345|456|567|678|789|890|901|210|321|432|543|654|765|876|987|098|109))/,
        "رمز عبور نمیتواند از اعداد متوالی تشکیل شود"
      )
      .matches(/^\d{6}$/, "رمز عبور فقط باید شامل عدد باشد")
      .matches(/^(?!.*(\d)(\1))\d+$/, "رمز عبور نمیتواند از اعداد تکراری تشکیل شود"),
    phoneNumber: yup.string(),
    lang: yup.string().required(),
    phoneCountry: yup.string(),
    email: yup.string(),
    ip: yup.string(),
    version: yup.string(),
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, touchedFields },
    trigger,
  } = useForm<LoginInput>({
    defaultValues: {
      lang: localStorage.trpos__lng,
      ip: "",
      version: "1",
    },
    resolver: yupResolver(loginSchema),
    mode: "all",
  });

  useEffect(() => {
    trigger();
  }, [trigger]);

  useEffect(() => {
    ip && setValue("ip", ip);
  }, [ip]);

  const onSubmit: SubmitHandler<LoginInput> = (data) => {
    if (+data.phoneOrEmail && data.phoneOrEmail.length > 11) {
      const parsedPhone = parsePhoneNumber(data.phoneOrEmail);
      dispatch(
        login({
          ...data,
          phoneCountry: parsedPhone?.country,
          phoneOrEmail: parsedPhone?.number!,
        })
      );
    } else if (+data.phoneOrEmail) {
      dispatch(
        login({
          ...data,
          phoneCountry: localStorage.trpos__lng,
        })
      );
    } else {
      dispatch(login(data));
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full sm:bg-actual-white sm:p-8 rounded-2.5xl sm:shadow-sm"
    >
      <div>
        <h1 className="xl:text-2xl text-base-content font-semibold">
          ورود
        </h1>
        <p className="text-sm text-base-content-60 t mt-2">
          لطفا شماره تلفن یا ایمیل خود را وارد کنید
        </p>
      </div>
      <div className="mt-6">
        <Input
          label="شماره تلفن یا ایمیل"
          register={{ ...register("phoneOrEmail") }}
          error={errors.phoneOrEmail?.message}
          touched={touchedFields.phoneOrEmail}
          className="mb-4"
          isPhoneOrEmail
        />
        <Input
          type="password"
          label="رمز عبور"
          register={{ ...register("password") }}
          error={errors.password?.message}
          touched={touchedFields.password}
          isPassword={true}
          autoComplete="new-password"
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
      <div className="w-full flex justify-center items-center gap-6 text-sm text-base-content-80 mt-6">
        <Link state={{ token: "isValid" }} to={"/change-phone"}>
          تغییر شماره تلفن
        </Link>
        <div className="w-2 h-2 rounded-full bg-base-content/20"></div>
        <Link state={{ token: "isValid" }} to={"/forgot-password"}>
          فراموشی رمز عبور
        </Link>
      </div>
    </form>
  );
};
