"use client";

import Input from "@/app/components/common/Input";
import { useForm } from "react-hook-form";

export default function Auth() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { email: "", password: "" },
  });

  return (
    <main className="h-screen">
      <div className="h-full w-full flex items-center justify-center">
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          {/* <Input id="email" label="Email" register={register("email")} /> */}
        </form>
      </div>
    </main>
  );
}
