"use client";

import { use, useEffect, useRef, useState } from "react";
import { set, useForm } from "react-hook-form";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

const Search = () => {
  const [isInputFocused, setIsInputFocused] = useState(false);  

  const {
    register,
    handleSubmit,
  } = useForm({
    defaultValues: {
      search: "",
    },
  });

  const onSubmit = (data: any) => console.log(data);
  return (
    <div
      className={`rounded-xl h-12 w-full flex items-center px-6 gap-6 ${
        isInputFocused
          ? "bg-white shadow-sm shadow-black/30 border-black/5 border"
          : "bg-[#f1f3f4]"
      }`}
    >
      <MagnifyingGlassIcon className="h-6 w-6 text-[#87888a]" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="outline-none bg-inherit w-full"
          placeholder="Search"
          type="text"
          {...register("search", { required: true })}
          onFocus={() => {
            setIsInputFocused(true);
          }}
          onBlur={() => {
            setIsInputFocused(false);
          }}
        />
      </form>
    </div>
  );
};

export default Search;
