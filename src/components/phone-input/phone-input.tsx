import { PhoneInputType } from "./phone-input.types";
import { IconCheckCircle, IconRemoveCircle } from "../icons/icons";
import { Popover } from "antd";

export const PhoneInput: React.FC<PhoneInputType> = ({
  label,
  isDisabled,
  className,
  isError,
  register,
  error,
  touched,
  inputClassName,
  ...rest
}: PhoneInputType) => {

  return (
    <div className="w-full">
      <div className={`form__group flex items-center ${className} `}>
        <input
          type="text"
          id={label}
          className={`form__field ${inputClassName}`}
          disabled={isDisabled}
          placeholder=""
          {...register}
          {...rest}
        />
        <label htmlFor={label} className="form__label">
          {label}
        </label>
        <div>
          {touched && error ? (
            <Popover content={error}>
              <IconRemoveCircle className="w-6 mt-1 text-error" />
            </Popover>
          ) : (
            touched && <IconCheckCircle className="w-6 mt-1 text-success" />
          )}
        </div>
      </div>
    </div>
  );
};
