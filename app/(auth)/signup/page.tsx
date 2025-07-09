import { SignupForm } from "@/app/components/Auth";
import Image from "next/image";
import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="min-h-screen flex flex-col"
    style={{
      backgroundImage: "url('/images/bg.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}>
      <div className="flex-1 flex flex-col items-center justify-center p-5 md:p-8">
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

        {/* Signup Form */}
        <SignupForm />

        <div className="flex items-center justify-center">
          <div className="text-center mt-6 w-fit bg-white rounded-full p-4">
            <span className="text-sm text-gray-500">
              Already Have an Account?{" "}
              <a href="#" className="text-purple-400 hover:underline">
                Log in
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
