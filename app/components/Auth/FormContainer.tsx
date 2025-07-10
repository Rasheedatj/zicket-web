import { ReactNode } from "react";

interface FormContainerProps {
  title: string;
  description: string;
  children: ReactNode;
}

export function FormContainer({ title, description, children }: FormContainerProps) {
  return (
    <div className="w-full max-w-lg bg-[#11111166]/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 mb-8">
      <div className="text-center mb-8 border-[#E9E9E933] py-6 border-b-2">
        <h1 className="text-white text-xl md:text-2xl font-semibold mb-2 md:mb-3">
          {title}
        </h1>
        <p className="text-slate-400 text-sm md:text-base">
          {description}
        </p>
      </div>
      <div className="space-y-8">
      {children}
      </div>
      
    </div>
  );
} 