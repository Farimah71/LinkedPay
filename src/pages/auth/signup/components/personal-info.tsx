// @ts-nocheck
import { useEffect, useMemo, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "../../../../components/button";
import { Input } from "../../../../components/input";
import { SignupInput } from "../types/signup.types";
import { yupResolver } from "@hookform/resolvers/yup";
import { CheckBoxModal } from "../../../../components/checkboxes";
import { RuleModal } from "./modal/rules";
import { PhoneInput } from "../../../../components/phone-input";
import { parsePhoneNumber } from "../../../../helper/parse-phone";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux-hooks";
import { register as registerUser } from "../../../../redux/actions/auth/signup";
import { getAllContractTypes } from "../../../../redux/actions/settings/contract-type";
import { getContract } from "../../../../redux/actions/settings/contract";
import { ContentLoading } from "../../../../components/content-loading";
import {
  ContractType,
  NewContractType,
} from "../../../../types/contract-type.interface";
import { omit } from "lodash";
import * as yup from "yup";

export const PersonalInfo: React.FC = () => {
  const [contractTypes, setContractTypes] = useState<ContractType[]>();
  const [isModalOpen, setIsModalOpen] = useState("");

  const { isButtonLoading } = useAppSelector(
    (state) => state.buttonLoadingSlice
  );
  const { errors: registerErrors } = useAppSelector(
    (state) => state.errorsSlice
  );
  const { info: contractTypeInfo, loading: contractTypeLoading } =
    useAppSelector((state) => state.contractTypeSlice);
  const { info: contractContentInfo, loading: contractContentLoading } =
    useAppSelector((state) => state.contractSlice);
  const { ip } = useAppSelector((state) => state.IpSlice);

  const dispatch = useAppDispatch();

  useEffect(() => {
    ip && setValue("ip", ip);
  }, [ip]);

  const validate = {
    name: yup.string().min(2).max(50).required(),
    surname: yup.string().min(2).max(50).required(),
    phoneNumber: yup
      .string()
      .required("شماره تلفن الزامی است")
      .matches(
        /^\+([1-9]{1})([0-9]{1,2})?([0-9]{10})$/,
        "فرمت شماره ی تلفن درست نمی باشد"
      ),
    email: yup
      .string()
      .required()
      .matches(/^(?=.{8,50}$)[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/),
    password: yup
      .string()
      .min(6, "رمز عبور باید حداقل ۶ کاراکتر باشد")
      .max(6, "رمز عبور حداکثر باید ۶ کاراکتر باشد")
      .required()
      .matches(
        /^(?!\d*(?:012|123|234|345|456|567|678|789|890|901|210|321|432|543|654|765|876|987|098|109))/,
        "رمز عبور نمی تواند از اعداد متوالی تشکیل شود"
      )
      .matches(/^\d{6}$/, "رمز عبور فقط باید شامل عدد باشد")
      .matches(/^(?!.*(\d)(\1))\d+$/, "رمز عبور نمیتواند از اعداد تکراری تشکیل شود"),
    passwordRepeat: yup
      .string()
      .required("تکرار رمز عبور الزامی است")
      .oneOf([yup.ref("password")], "رمز عبور و تکرار آن مطابقت ندارند"),
    ip: yup.string(),
    lang: yup.string().required(),
  };

  const registerSchema = useMemo(() => {
    let checkBoxValidationObject = {};

    const checkBoxValidation = contractTypes?.map((contractType) => {
      return {
        [`check-box-${contractType.id}`]: yup
          .boolean()
          .required()
          .oneOf([true]),
      };
    });

    checkBoxValidation?.forEach((item) => {
      checkBoxValidationObject = {
        ...checkBoxValidationObject,
        ...item,
      };
    });

    return yup.object().shape({
      ...validate,
      // ...checkBoxValidationObject,
    });
  }, [contractTypes]);

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    trigger,
    formState: { errors, touchedFields },
  } = useForm({
    defaultValues: {
      lang: localStorage.trpos__lng,
      ip: "",
    },
    resolver: yupResolver(registerSchema),
    mode: "all",
    reValidateMode: "onChange",
  });
  const values = getValues();

  useEffect(() => {
    trigger();
  }, [trigger, registerSchema]);

  useEffect(() => {
    if (contractTypeInfo.length > 0) {
      const filteredContractTypes = contractTypeInfo
        .filter((contractType: ContractType) => contractType.productId == 5)
        .map((contractType: ContractType) => {
          return {
            ...contractType,
            checkboxName: `checkbox_rule_${contractType.id}`,
          };
        });
      setContractTypes(filteredContractTypes);
    }
  }, [contractTypeInfo]);

  const onSubmit: SubmitHandler<SignupInput> = (data) => {
    const parsedPhone = parsePhoneNumber(data.phoneNumber);

    const omitData = Object.keys(data).filter((item) => {
      return item.includes("check-box");
    });

    const clone = omit(data, omitData);

    const dataToSend = { ...clone, phoneNumber: parsedPhone?.number };
    dispatch(registerUser(dataToSend));
  };

  return (
    <>
      {/* begin:: Terms modal */}
      {contractTypes &&
        contractTypes.map((contractType, index) => {
          return (
            <RuleModal
              key={contractType.id}
              state={isModalOpen === `rule_${contractType.id}`}
              title={
                contractContentInfo.count &&
                contractContentInfo.data[0]?.contractType?.title
              }
              content={{
                title: `Madde ${index + 1}`,
                text:
                  contractContentInfo.count &&
                  contractContentInfo.data[0]?.content,
              }}
              isLoading={contractContentLoading}
              handleRuleAccept={() => {
                setValue(`check-box-${contractType.id}`, true);
                setIsModalOpen("");
                trigger();
              }}
              handleCloseModal={() => setIsModalOpen("")}
            />
          );
        })}
      {/* end:: Terms modal */}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full sm:bg-actual-white sm:p-8 rounded-2.5xl sm:shadow-sm"
      >
        <div>
          <h1 className="xl:text-2xl text-base-content font-semibold">
            ثبت نام
          </h1>
          <p className="xl:text-sm text-[12px] text-base-content-light mt-1 pl-1 opacity-60">
            لطفا اطلاعات خود را وارد کنید
          </p>
        </div>
        {registerErrors.length > 0 && (
          <ul className="flex flex-col gap-y-1 p-4 bg-red-50 border-red-100 list-none mt-3 rounded-xl">
            {registerErrors.map(
              (err, index) =>
                !+err && (
                  <li key={index} className="text-error text-sm">
                    {err}
                  </li>
                )
            )}
          </ul>
        )}
        <div className="mt-6">
          <div className="lg:flex gap-x-3 justify-between">
            <Input
              label="نام"
              register={{ ...register("name") }}
              touched={touchedFields.name}
              error={errors.name?.message}
            />
            <Input
              label="نام خانوادگی"
              register={{ ...register("surname") }}
              className="mt-4 lg:mt-0"
              touched={touchedFields.surname}
              error={errors.surname?.message}
            />
          </div>
          <PhoneInput
            label="شماره تلفن"
            className="mt-4"
            register={{ ...register("phoneNumber") }}
            touched={touchedFields.phoneNumber}
            error={errors.phoneNumber?.message}
          />
          <Input
            type="email"
            label="ایمیل"
            className="mt-4"
            register={{ ...register("email") }}
            touched={touchedFields.email}
            error={errors.email?.message}
          />
          <div className="lg:flex gap-x-3 justify-between lg:mt-4">
            <Input
              type="password"
              label="رمز عبور"
              className="mt-4 lg:mt-0"
              isPassword={true}
              register={{ ...register("password") }}
              touched={touchedFields.password}
              error={errors.password?.message}
              autoComplete="new-password"
            />
            <Input
              type="password"
              label="رمز عبور ( تکرار )"
              className="mt-4 lg:mt-0"
              isPassword={true}
              register={{ ...register("passwordRepeat") }}
              touched={touchedFields.passwordRepeat}
              error={errors.passwordRepeat?.message}
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
          isLoading={isButtonLoading}
        >
          ادامه
        </Button>
      </form>
    </>
  );
};
