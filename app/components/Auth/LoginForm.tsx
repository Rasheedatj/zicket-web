"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sending magic link to:", email);    
    // router.push("/verify-magic-link");
  };

  

  return (
    <div className="bg-black/30 backdrop-blur-xl rounded-2xl p-8 glow-border">
      <div className="text-center pb-10">
        <h2 className="text-lg font-semibold text-white mb-1">
          Login with zkEmail
        </h2>
        <p className="text-sm text-gray-400 mb-6">
          Enter your email to receive a secure, one-time login.
        </p>
        <hr className="border-gray-600" />
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <input
            type="email"
            placeholder="e.g. you@email.com"
            required
            minLength={8}
            className="w-full p-3 bg-[#1a1a1a] text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#751ac6] hover:bg-purple-700 text-white font-medium p-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
        >
          <Image
            src="/svg/security-password.svg"
            alt=""
            width={24}
            height={24}
          />
          <span>Send Magic Link</span>
        </button>

        <button
          type="button"
          className="w-full py-2 rounded text-sm text-gray-300"
          onClick={() => router.push("/")}
        >
          Go Back
        </button>
      </form>
    </div>
  );
}
