"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function OtpVerification() {
  const [otp, setOtp] = useState(["", "", "", "", ""]);
  const router = useRouter();

  const handleChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    const next = document.getElementById(`otp-${index + 1}`);
    if (value && next) next.focus();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredCode = otp.join("");
    // Handle OTP verification
    console.log("Verifying:", enteredCode);
  };

  return (
    <div className="bg-black/30 backdrop-blur-xl rounded-2xl p-8 glow-border">
      <div className="text-center pb-10">
        <h2 className="text-lg font-semibold text-white mb-1">
          Verify Your Mail
        </h2>
        <p className="text-sm text-gray-400 mb-6">
          Enter verification code sent to your@email.com
        </p>
        <hr className="border-gray-600" />
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex justify-between gap-2">
          {otp.map((digit, idx) => (
            <input
              key={idx}
              id={`otp-${idx}`}
              type="text"
              inputMode="numeric"
              maxLength={1}
              className="w-full text-center text-white bg-[#1a1a1a] border border-gray-600 rounded-lg py-4 focus:outline-none focus:ring-2 focus:ring-purple-600"
              value={digit}
              onChange={(e) => handleChange(e.target.value, idx)}
            />
          ))}
        </div>

        <button
          type="submit"
          className="w-full bg-[#751ac6] hover:bg-purple-700 text-white font-medium p-4 rounded-xl transition-all duration-200 mt-4 flex items-center justify-center gap-2"
        >
          <Image
            src="/svg/security-password.svg"
            alt=""
            width={24}
            height={24}
            className="text-white"
          />
          <span>Go to Dashboard</span>
        </button>

        <button
          type="button"
          className="w-full py-2 rounded text-sm text-gray-300"
          onClick={() => router.back()}
        >
          Go Back
        </button>
      </form>
    </div>
  );
}
