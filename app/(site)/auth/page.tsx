"use client";

import { useEffect, useRef, useState } from "react";
import Button from "@/app/components/common/Button";
import Input from "@/app/components/common/Input";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { IoAlertCircle } from "react-icons/io5";
import LinearLoader from "@/app/components/common/LinearLoader";
import Overlay from "@/app/components/common/Overlay";
import authServices from "@/app/services/auth.service";
import Pill from "@/app/components/common/Pill";
import { useRouter } from "next/navigation";

export default function Auth() {
  const [loading, setLoading] = useState(false);
  const [activeSection, setActiveSection] = useState("email");
  const ref = useRef<HTMLDivElement | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: { email: "", password: "", show: false },
  });

  const router = useRouter();

  const onSubmitEmail = async (data: any) => {
    setLoading(true);
    // call an api and wait for the response
    await authServices
      .checkEmail(data.email)
      .then((res) => {
        if (res === true) {
          setActiveSection("password");
        } else {
          setError("email", { message: "Couldn't find your email" });
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (activeSection === "email") {
      if (ref.current) {
        ref.current.style.transform = "translateX(25%)";
      }
    } else {
      if (ref.current) {
        ref.current.style.transform = "translateX(-25%)";
      }
    }
  }, [activeSection]);

  const onSubmitPassword = async (data: any) => {
    if (data.password === "") {
      setError("password", { message: "Password is required" });
      return;
    }
    console.log(data.password);
    router.push("/document");
  };

  console.log(ref);

  return (
    <main className="h-screen">
      <div className="h-full w-full flex items-center justify-center">
        <div className="relative flex flex-col items-center space-y-6 sm:border border-light-gray pt-12 pb-16 rounded-md w-[450px] overflow-hidden">
          {loading && (
            <div className="absolute top-0 left-0 w-full z-[1]">
              <LinearLoader />
              <Overlay />
            </div>
          )}
          <div className="flex flex-col items-center gap-2">
            <Image
              src="/google.svg"
              alt="google"
              width={80}
              height={50}
              className="mb-2"
            />
          </div>
          <div
            className="flex w-[200%] transition-transform duration-500"
            ref={ref}
          >
            <div className="w-full px-10">
              <div className="flex flex-col items-center gap-2">
                <h3 className="text-2xl text-primary">Sign In</h3>
                <p className="text-primary">to continue to Docs</p>
              </div>
              <form
                onSubmit={handleSubmit(onSubmitEmail)}
                className="flex flex-col w-full gap-8"
              >
                <div className="flex flex-col w-full gap-2">
                  <Input
                    id="email"
                    placeholder="Email"
                    type="email"
                    required={"Enter an email"}
                    // @ts-ignore
                    register={register}
                    errors={errors}
                    // disabled={isLoading}
                  />
                  {errors["email"] && (
                    <p className="text-xs text-red-600 flex items-center gap-1">
                      <IoAlertCircle className="text-base" />
                      {errors["email"]?.message}
                    </p>
                  )}
                  <a href="#" className="text-blue text-sm font-semibold mt-1">
                    <span className="mt-2">Forgot Email?</span>
                  </a>
                </div>
                <div className="my-2">
                  <p className="text-secondary text-[14px]">
                    Don{"'"}t want to sign in? Use Guest mode.
                  </p>
                  <a href="#" className="text-blue text-sm font-semibold">
                    Guest mode
                  </a>
                </div>
                <div className="flex w-full justify-between items-center">
                  <a href="#" className="text-blue text-sm font-semibold">
                    Create account
                  </a>
                  <Button type="submit">
                    <span className="px-3">Next</span>
                  </Button>
                </div>
              </form>
            </div>
            <div className="w-full px-10">
              <div className="flex flex-col items-center gap-2">
                <h3 className="text-3xl text-primary">Welcome</h3>
                <Pill
                  chevron
                  icon
                  text={"kunalvish17360@gmail.com"}
                  onClick={() => setActiveSection("email")}
                />
              </div>
              <form
                onSubmit={handleSubmit(onSubmitPassword)}
                className="flex flex-col w-full gap-8 mt-14"
              >
                <div className="flex flex-col w-full gap-2">
                  <Input
                    id="password"
                    placeholder="Enter your password"
                    type={watch("show") ? "text" : "password"}
                    // @ts-ignore
                    register={register}
                    errors={errors}
                  />
                  {errors["password"] && (
                    <p className="text-xs text-red-600 flex items-center gap-1">
                      <IoAlertCircle className="text-base" />
                      {errors["password"]?.message}
                    </p>
                  )}
                  <p className="text-sm mt-1 flex items-center">
                    <span className="flex border border-secondary rounded-[3px] mr-4">
                      <input type="checkbox" {...register("show")} />
                    </span>
                    <span>Show password</span>
                  </p>
                </div>
                <div className="flex w-full justify-between items-center mt-4">
                  <a href="#" className="text-blue text-sm font-semibold">
                    Forgot password?
                  </a>
                  <Button type="submit">
                    <span className="px-3">Next</span>
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
