"use client";

import clsx from "clsx";

import { FieldValues, UseFormRegister, FieldErrors } from "react-hook-form";

interface InputProps {
  label?: string;
  id: string;
  type?: string;
  placeholder?: string;
  required?: boolean | string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  id,
  type,
  required = false,
  register,
  errors,
  disabled,
  placeholder,
}) => {
  return (
    <div>
      {" "}
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2 w-full">
        <input
          id={id}
          type={type}
          autoComplete="off"
          placeholder={placeholder ?? ""}
          disabled={disabled}
          {...register(id, { required })}
          className={clsx(
            `
          form-input
          block 
          w-full 
          rounded-sm
          border
          px-4
          py-4 text-gray-900
          shadow-sm
          ring-inset
          ring-gray-300
          border-light-gray
          placeholder:text-secondary
          focus:ring-2
          focus:ring-blue
          sm:text-base
          sm:leading-6
          outline-none
        `,
            errors[id] && "focus:ring-rose-500",
            disabled && "opacity-50 cursor-default"
          )}
        />
      </div>
    </div>
  );
};

export default Input;
