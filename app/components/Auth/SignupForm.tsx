"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function SignupForm() {
  const [formData, setFormData] = useState({
    displayName: "",
    email: "",
  });
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic here
    router.push("/verify");
  };

  return (
    <div className="bg-black/30 backdrop-blur-xl rounded-2xl p-8 glow-border">
      <div className="text-center pb-10">
        <h2 className="text-lg font-semibold text-white mb-1">
          Create New Organizer Profile
        </h2>
        <p className="text-sm text-gray-400 mb-6">
          Zicket gives you full control and your guests full privacy.
        </p>
        <hr className="border-gray-600" />
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
        <label className="block text-sm mb-1">Enter Display Name (Public)</label>
          <input
            type="text"
            placeholder="e.g. Afrowave Labs"
            className="w-full p-3 bg-[#1a1a1a] text-white border border-gray-600 rounded-lg pr-10 focus:outline-none focus:ring-2 focus:ring-purple-600"
            value={formData.displayName}
            onChange={(e) =>
              setFormData({ ...formData, displayName: e.target.value })
            }
            required
          />
        </div>

        <div>
        <label className="block text-sm mb-1">Contact Email (Platform notifications only)</label>
          <input
            type="email"
            placeholder="e.g. you@email.com"
            className="w-full p-3 bg-[#1a1a1a] text-white border border-gray-600 rounded-lg pr-10 focus:outline-none focus:ring-2 focus:ring-purple-600"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
            minLength={8}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#751ac6] hover:bg-purple-700 text-white font-medium p-4 rounded-xl transition-all duration-200 mt-2 flex items-center justify-center gap-2"
        >
          <Image
            src="/svg/security-password.svg"
            alt=""
            width={30}
            height={30}
            className="text-white"
          />
          <span>Verify ZicketMail</span>
          
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
