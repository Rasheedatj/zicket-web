import { ReactNode } from "react";

interface FormContainerProps {
  title: string;
  description: string;
  children: ReactNode;
}

export function FormContainer({ title, description, children }: FormContainerProps) {
  return (
    <div className="bg-black/30 backdrop-blur-xl rounded-2xl p-8 glow-border">
      <div className="text-center pb-10">
        <h2 className="text-lg font-semibold text-white mb-1">
          {title}
        </h2>
        <p className="text-sm text-gray-400 mb-6">
          {description}
        </p>
        <hr className="border-gray-600" />
      </div>
      {children}
    </div>
  );
} 