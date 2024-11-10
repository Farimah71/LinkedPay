import { useEffect, useState } from "react";
import { Button } from "../../../../components/button";
import { Input } from "../../../../components/input";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux-hooks";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { VerifyCode } from "../../../../types/verify-code.interface";
import {
  resendCode,
  verifyCode,
} from "../../../../redux/actions/auth/verify-code";
import { BeatLoader } from "react-spinners";
import { VerifyCodeActionTypes } from "../../../../types/verify-code-action-type.types";
import * as yup from "yup";

type ActionType = {
  actionType: VerifyCodeActionTypes;
  methodProviderName?: string;
};

export const VerifyEmail: React.FC<ActionType> = ({
  actionType,
  methodProviderName,
}) => {
  const [userEmail, setUserEmail] = useState();

  const { info: signupInfo } = useAppSelector((state) => state.signupSlice);
  const { info: forgetPassInfo } = useAppSelector(
    (state) => state.forgetPasswordSlice
  );
  const { isButtonLoading } = useAppSelector(
    (state) => state.buttonLoadingSlice
  );
  const { loading: resendCodeLoading } = useAppSelector(
    (state) => state.resendCodeSlice
  );

  const dispatch = useAppDispatch();

  const verifyCodeSchema = yup.object().shape({
    code: yup.string().required().min(7),
    version: yup.string().required(),
    methodProviderName: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors, touchedFields },
  } = useForm<VerifyCode>({
    defaultValues: {
      version: "1",
      methodProviderName: methodProviderName,
    },
    resolver: yupResolver(verifyCodeSchema),
    mode: "all",
  });

  useEffect(() => {
    trigger();
  }, [trigger]);
  useEffect(() => {
    if (actionType == "signup") {
      const userEmail = signupInfo?.email;
      setUserEmail(userEmail);
    } else if (actionType == "forgot-password") {
      const userEmail = forgetPassInfo?.email;
      setUserEmail(userEmail);
    }
  }, [signupInfo, forgetPassInfo]);

  const onSubmit = (values: VerifyCode) => {
    const numericCode = values.code.replace(/[^\d]/g, "");
    const dataToSend = { ...values, code: numericCode };
    dispatch(verifyCode(dataToSend, actionType, "email"));
  };

  return (
    <div className="w-full sm:bg-actual-white sm:p-8 rounded-2.5xl sm:shadow-sm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h1 className="xl:text-2xl text-base-content font-bold">
            E-Postanı Doğrula
          </h1>
          <p className="text-base-content-light mt-1 text-sm opacity-60">
            <span className="text-primary font-semibold">{userEmail}</span>{" "}
            e-posta adresine kod gönderdik. Kimliğinden emin olmalıyız.
          </p>
        </div>
        <div className="w-full h-full flex flex-col justify-center items-center mt-6">
          <Input
            label="Doğrulama Kodu"
            register={{ ...register("code") }}
            touched={touchedFields.code}
            error={errors.code?.message}
            isCode
            autoFocus
          />
          <div className="mt-6 w-full">
            <Button
              variant="primary"
              shape="full"
              type="submit"
              disabled={Object.keys(errors).length > 0 ? true : false}
              isLoading={isButtonLoading}
            >
              Devam Et
            </Button>
          </div>
        </div>
      </form>

      <p className="text-sm flex gap-x-2 justify-center mt-6">
        Kod Gelmediyse
        {resendCodeLoading ? (
          <BeatLoader size={7} color="#36d7b7" className="mt-1" />
        ) : (
          <span
            className="text-success font-semibold cursor-pointer"
            onClick={() => dispatch(resendCode())}
          >
            Tekrar Kod Gönder
          </span>
        )}
      </p>
    </div>
  );
};
