import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Authentication - Zicket',
  description: 'Sign up or log in to your Zicket account.',
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center auth-gradient text-white">
      <main className="w-full max-w-md px-4 py-8">
        {children}
      </main>
    </div>
  );
} 