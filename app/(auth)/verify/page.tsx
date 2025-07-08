import { OtpVerification } from "@/app/components/Auth/OtpVerification";
import Image from "next/image";
import Link from "next/link";

export default function OtpPage() {
  return (
    <div className="auth-gradient flex items-center justify-center px-4 pb-4 min-h-screen">
      <div className="w-full max-w-[520px] py-8">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Link href="/">
            <Image
              src="/images/zk-logo-white.png"
              alt="Zicket Logo"
              width={120}
              height={40}
              priority
              className="hover:opacity-90 transition-opacity"
            />
          </Link>
        </div>

        {/* OTP Form */}
        <OtpVerification />
      </div>
    </div>
  );
}
