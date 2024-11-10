import { useState } from "react";
import { Select } from "antd";
import { SelectProps } from "./select.types";
import { Controller } from "react-hook-form";

export const SelectInput = ({
  className,
  options,
  placeholder,
  register,
  error,
  touched,
  size = "middle",
  isSimple = false,
  name,
  control,
  label,
  disabled = false,
  searchable,
  isLoading = false,
}: SelectProps) => {
  const [value, setValue] = useState<string | number | undefined>(undefined);
  const [searchValue, setSearchValue] = useState("");

  if (isSimple) {
    return (
      <div className={`w-full flex flex-col gap-2 ${className}`}>
        <label className="text-sm text-base-content-40" htmlFor={label}>
          {label}
        </label>
        <Select
          options={options}
          onSelect={(value) => setValue(value)}
          size={size}
          className="h-full border !outline-none !rounded-2.5xl"
          variant="borderless"
          listHeight={150}
          disabled={disabled}
          loading={isLoading}
          {...register}
        />
      </div>
    );
  }
  return (
    <div
      className={`select_field ${value ? "value_selected" : ""} ${
        searchValue ? "is_searching" : ""
      } ${touched && error && "error"} ${className}`}
    >
      <Controller
        control={control}
        name={name!}
        render={({ field }) => (
          <>
            <div className={`placeholder_top ${touched && error && "error"}`}>
              {placeholder}
            </div>
            <Select
              {...field}
              className={"select"}
              options={options}
              onSelect={(value) => setValue(value)}
              size={size}
              variant="borderless"
              listHeight={150}
              showSearch={searchable}
              filterOption={(input, option: any) =>
                (option?.label?.toLowerCase() ?? "").includes(input)
              }
              onSearch={(value) => setSearchValue(value)}
              loading={isLoading}
              disabled={isLoading || disabled}
            />
          </>
        )}
      />
    </div>
  );
};
