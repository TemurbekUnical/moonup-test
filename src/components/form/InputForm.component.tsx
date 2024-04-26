import { useCallback, useState } from "react";
import { Control, Controller, Path } from "react-hook-form";
import Error from "./Error.component";
import Label from "./Label.component";
import { TRules } from "@/types";
import Input from "../ui/Input.component";
interface IInputProps<FormNames extends Record<string, any>> {
  rules?: TRules<FormNames>;
  control: Control<FormNames>;
  name: Path<FormNames>;
  label?: string;
  disabled?: boolean;
  required?: boolean;
  className?: string;
  placeholder?: string;
  type?: MainInputTypes;
}
export enum MainInputTypes {
  PASSWORD = "password",
  TEXT = "text",
  NUMBER = "number",
}

function InputForm<FormNames extends Record<string, any>>({
  label = "",
  disabled = false,
  placeholder = "Введите информацию",
  className = "",
  control,
  name,
  required,
  type = MainInputTypes.TEXT,
  rules = {
    required: {
      value: true,
      message: "Kiriting!",
    },
  },
}: IInputProps<FormNames>) {
  const [inputType, setInputType] = useState(type);

  const onEyeIconClick = useCallback(
    () =>
      setInputType((prev) =>
        prev === MainInputTypes.PASSWORD
          ? MainInputTypes.TEXT
          : MainInputTypes.PASSWORD
      ),
    []
  );

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error }, formState }) => (
        <div>
          {label && <Label htmlFor={name}>{label}</Label>}
          <div className="relative">
            <Input
              placeholder={placeholder}
              id={name}
              autoComplete="off"
              required={required}
              type={inputType}
              className={` ${className}`}
              {...field}
              disabled={disabled || formState.disabled}
            />
          </div>
          {!!error && <Error>{error.message}</Error>}
        </div>
      )}
    />
  );
}

export default InputForm;
