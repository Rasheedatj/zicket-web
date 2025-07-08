"use client";

import { useState, useRef } from "react";
import { ChevronLeft, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [nextStep, setNextStep] = useState(false);

  const inputLength = 5;
  const [code, setCode] = useState(Array(inputLength).fill(""));
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value.replace(/[^0-9]/g, ""); // allow only numbers
    if (!value) return;

    const updatedCode = [...code];
    updatedCode[index] = value;
    setCode(updatedCode);

    if (index < inputLength - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace") {
      const updatedCode = [...code];
      if (code[index]) {
        updatedCode[index] = "";
        setCode(updatedCode);
      } else if (index > 0) {
        inputsRef.current[index - 1]?.focus();
      }
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        backgroundImage: "url('/images/bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {nextStep ? (
        <div className="flex-1 flex flex-col items-center justify-center px-5 md:px-8">
          <Image
            src="/images/Logo2.png"
            alt="Zicket"
            width={120}
            height={120}
            className="pb-8"
          />
          <div className="w-full max-w-lg bg-[#11111166]/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 mb-8">
            <div className="text-center mb-8 border-[#E9E9E933] py-6 border-b-2">
              <h1 className="text-white text-xl md:text-2xl font-semibold mb-2 md:mb-3">
                Verify Your Mail
              </h1>
              <p className="text-slate-400 text-sm md:text-base">
                Enter Verification code sent to youxxx@email.com
              </p>
            </div>
            <div className="space-y-8">
              <div className="space-y-4 pb-4 md:space-y-5">
                <div className="flex gap-4 justify-center">
                  {code.map((digit, idx) => (
                    <input
                      key={idx}
                      ref={(el) => {
                        inputsRef.current[idx] = el;
                      }}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={digit}
                      placeholder="-"
                      onChange={(e) => handleChange(e, idx)}
                      onKeyDown={(e) => handleKeyDown(e, idx)}
                      className={`w-12 h-16 rounded-xl text-center text-white text-xl bg-transparent border caret-transparent
    ${
      digit ? "border-[#751AC6]" : "border-gray-500"
    } focus:outline-none focus:border-[#751AC6]`}
                    />
                  ))}
                </div>
              </div>
              <Button
                className="w-full text-lg cursor-pointer bg-[#751AC6] hover:from-purple-700 hover:to-purple-600 text-white h-14 rounded-lg font-medium"
                onClick={() => setNextStep(true)}
              >
                <Image
                  src="/images/security.png"
                  alt="Security"
                  width={24}
                  height={24}
                  className="w-6 h-6 mr-2"
                />
                Go To Dashboard
              </Button>
              <button
                className="flex items-center gap-2 justify-center w-full text-[#FFFFFF] text-[14px] font-bold transition-colors cursor-pointer"
                onClick={() => setNextStep(false)}
              >
                <ChevronLeft size={21} />
                Go Back
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center px-5 md:px-8">
          <Image
            src="/images/Logo2.png"
            alt="Zicket"
            width={120}
            height={120}
            className="pb-8"
          />
          <div className="w-full max-w-lg bg-[#11111166]/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 mb-8">
            <div className="text-center mb-8 border-[#E9E9E933] py-6 border-b-2">
              <h1 className="text-white text-xl md:text-2xl font-semibold mb-2 md:mb-3">
                Login with zkEmail
              </h1>
              <p className="text-slate-400 text-sm md:text-base">
                Enter your email to receive a secure, one-time login.
              </p>
            </div>
            <div className="space-y-8">
              <div className="space-y-4 md:space-y-5">
                <label
                  htmlFor="email"
                  className="text-slate-300 text-sm md:text-base block"
                >
                  Enter your zkEmail
                </label>
                <div className="relative">
                  <input
                    id="email"
                    type="email"
                    placeholder="e.g., you@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-transparent border border-[#751AC6] text-white placeholder:text-[#7D7C7C] pr-12 h-16 rounded-2xl px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                  <Mail className="absolute right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 text-[#CBD2EB]" />
                </div>
              </div>
              <Button
                className="w-full text-lg cursor-pointer bg-[#751AC6] hover:from-purple-700 hover:to-purple-600 text-white h-14 rounded-lg font-medium"
                onClick={() => {
                  setNextStep(true);
                }}
              >
                <Image
                  src="/images/security.png"
                  alt="Security"
                  width={24}
                  height={24}
                  className="w-6 h-6 mr-2"
                />
                Send Login Link
              </Button>
              <button className="flex items-center gap-2 justify-center w-full text-[#FFFFFF] cursor-pointer text-[14px] font-bold transition-colors">
                <ChevronLeft size={21} />
                Go Back
              </button>
            </div>
          </div>
          <Button
            variant="secondary"
            className="w-auto md:w-auto bg-[#FFFFFF] text-[#514A4A] hover:bg-slate-100 h-16 px-8 rounded-full font-medium text-lg"
          >
            {"Don't have an account? "}
            <span className="text-[#8F37DA] ml-1 font-bold">Sign Up</span>
          </Button>
        </div>
      )}
      {/* Bottom spacing for mobile */}
      <div className="pb-8 md:pb-0"></div>
    </div>
  );
}
