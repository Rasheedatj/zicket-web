
import { SignupForm } from '@/app/components/Auth';
import Image from 'next/image';
import Link from 'next/link';



export default function SignupPage() {
  

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
        

        {/* Signup Form */}
        <SignupForm />

<div className="flex items-center justify-center">
        <div className="text-center mt-6 w-fit bg-white rounded-full p-4">
          <span className="text-sm text-gray-500">
            Already Have an Account?{' '}
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