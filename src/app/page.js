"use client";
// import { useUser } from "@/context/userContext";
import { userLogin } from "@/utils/axiosInstance";
import images from "@/utils/images";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  // const { user, setUser } = useUser();

  const handleSubmit = async (e) => {
    console.log("hello world");
    // e.preventDefault();
    // setIsSubmitting(true);
    // setFormError("");
    // try {
    //   const response = await userLogin(username, password);
    //   console.log("Login successful:", response);
    //   setUser(response.body);
    //   router.push("/home");
    // } catch (error) {
    //   setFormError(error.response?.data?.message || "Login failed");
    // } finally {
    //   setIsSubmitting(false);
    // }
    router.push("/dashboard");
  };

  return (
    <div className="bg-white items-center w-full">
      <div className="h-screen flex items-center justify-center">
        <div className="h-[810px] flex flex-col justify-start items-center overflow-hidden">
          <div className="flex flex-col justify-center items-center grow w-full px-8">
            <div className="flex flex-col justify-start items-center w-full gap-8 h-[502px]">
              <div className="flex flex-col justify-start items-center w-full gap-6">
                <div className="text-center flex flex-col justify-start items-center gap-6">
                  <div className="w-[200px]">
                    <Image src={images.logo} className="" alt="" />
                  </div>

                  <p className="text-[#475467] text-base">
                    Welcome back! Please enter your details.
                  </p>
                </div>
              </div>

              <form
                onSubmit={handleSubmit}
                className="flex flex-col w-full gap-6 rounded-xl"
              >
                <div className="flex flex-col">
                  <label className="text-[#344054] text-sm font-medium">
                    Username
                  </label>
                  <input
                    type="text"
                    className="w-[500px] px-3.5 py-2.5 mt-1 bg-white rounded-lg border border-[#d0d5dd] shadow-sm text-[#667085] text-base"
                    placeholder="Enter Your Username"
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label className="text-[#344054] text-sm font-medium">
                    Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-3.5 py-2.5 mt-1 bg-white rounded-lg border border-[#d0d5dd] shadow-sm text-[#667085] text-base"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full text-white px-4 py-2.5 bg-gray-500 rounded-lg shadow-md border-2 border-white text-base font-medium ${
                    isSubmitting
                      ? "opacity-50 cursor-not-allowed"
                      : "cursor-pointer"
                  }`}
                >
                  {isSubmitting ? "Signing in..." : "Sign in"}
                </button>

                {formError && <div className="text-red-500">{formError}</div>}
              </form>
            </div>
          </div>

          <footer className="w-1/2 absolute h-24 p-8 flex bottom-0 justify-start items-end">
            <p className="text-[#475467] text-sm font-medium">
              Company © All Rights Reserved 2018-2025
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
