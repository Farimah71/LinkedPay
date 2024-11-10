import { InputType } from "./input.types";
import { useState } from "react";
import { InputErrorComponent } from "../inputError";
import {
  IconCheckCircle,
  IconEye,
  IconHide,
  IconRemoveCircle,
} from "../icons/icons";
import { Popover } from "antd";

export const Input: React.FC<InputType> = ({
  label,
  isDisabled,
  type = "text",
  className,
  isPassword,
  isPhoneOrEmail,
  isError,
  register,
  error,
  touched,
  isSimple = false,
  isCode = false,
  inputClassName,
  ...rest
}: InputType) => {
  const [inputType, setInputType] = useState<typeof type>(type);
  const [value, setValue] = useState("");

  const errorMessageSplitter = (message: string) => {
    return (
      <div className="flex flex-col">
        <span className="">{message.split("...")[0] + "..."}</span>
        <span className="">{message.split("...")[1]}</span>
      </div>
    );
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const numbers = value.replace(/[^\d]/g, ""); // Remove non-digit characters
    const formattedValue = numbers.replace(/(\d{3})(?=\d)/g, "$1-"); // Insert dash after every 3 digits
    setValue(formattedValue);
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      !/^\d$/.test(event.key) &&
      event.key != "Backspace" &&
      event.key != "Enter"
    ) {
      event.preventDefault();
    }
  };
  if (isSimple) {
    return (
      <div className={`w-full flex flex-col gap-2 ${className}`}>
        <label className="text-sm text-base-content-40" htmlFor={label}>
          {label}
        </label>
        <input
          type={inputType != "email" ? inputType : "text"}
          id={label}
          className={`h-14 border outline-none px-2 rounded-2.5xl ${inputClassName}`}
          disabled={isDisabled}
          placeholder=""
          {...register}
          {...rest}
        />
      </div>
    );
  }

  return (
    <div className="w-full">
      <div
        className={`form__group flex items-center ${className} ${
          error && type === "password" && touched && "border-error"
        }`}
      >
        <input
          style={{ appearance: type === "number" && "textfield" }}
          type={inputType != "email" ? inputType : "text"}
          maxLength={isPassword ? 6 : isCode ? 7 : null}
          id={label}
          className={`form__field ${inputClassName}`}
          disabled={isDisabled}
          placeholder=""
          onInput={isCode ? handleChange : undefined}
          onKeyDown={isCode ? handleKeyDown : undefined}
          value={isCode ? value : undefined}
          {...register}
          {...rest}
        />
        <label
          htmlFor={label}
          className={`form__label ${
            type === "password" && error && touched && "red__placeholder"
          }`}
        >
          {label}
        </label>
        <div>
          {isPassword ? (
            inputType === "text" ? (
              <IconEye
                className={`cursor-pointer w-6 mt-1 ${
                  error && touched && "text-error"
                }`}
                onClick={() => setInputType("password")}
              />
            ) : (
              <IconHide
                className={`cursor-pointer w-6 mt-1 ${
                  error && touched && "text-error"
                }`}
                onClick={() => setInputType("text")}
              />
            )
          ) : touched ? (
            error &&
            (isPhoneOrEmail &&
            error ==
              "Telefon formatı: (+90)1234567... E-posta Formatı: kullanıcı@example.com" ? (
              <Popover
                content={errorMessageSplitter(error)}
                title="E-posta/Telefon geçersiz."
              >
                <IconRemoveCircle className="w-6 mt-1 text-error" />
              </Popover>
            ) : (
              <IconRemoveCircle className="w-6 mt-1 text-error" />
            ))
          ) : null}
          {!error && !isPassword && (
            <IconCheckCircle className="w-6 mt-1 text-success" />
          )}
        </div>
      </div>
      {isPassword && touched && <InputErrorComponent text={error} />}
    </div>
  );
};
