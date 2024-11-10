import { Select } from "antd";
import { NumberSelectProps } from "./number-select.types";
import { Controller } from "react-hook-form";

export const NumberSelectInput = ({
  options,
  placeholder,
  isBorderless,
  register,
  control,
  name,
}: //   error,
//   touched,
NumberSelectProps) => {
  return (
    <Controller
    control={control}
    name={name}
    render={({field}) => (
      <div
          className={`h-[58px] w-20 rounded-2xl pr-2 pl-4 pt-2.5 ${
            isBorderless ? "borderless" : "border"
          }`}
        >
          <Select
          {...field}
            className="number_select"
            options={options}
            placeholder={placeholder}
            style={{ minWidth: 60 }}
            size="small"
            variant="borderless"
            listHeight={150}
          />
        </div>
    )}
     />
  );
};
