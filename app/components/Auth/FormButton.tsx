import Image from "next/image";

interface FormButtonProps {
  type: "submit" | "button";
  onClick?: () => void;
  variant: "primary" | "secondary";
  icon?: string;
  iconSize?: number;
  children: React.ReactNode;
}

export function FormButton({
  type,
  onClick,
  variant = "primary",
  icon,
  iconSize = 24,
  children
}: FormButtonProps) {
  const baseStyles = "w-full transition-all duration-200";
  const variantStyles = {
    primary: "bg-[#751ac6] hover:bg-purple-700 text-white font-medium p-4 rounded-xl flex items-center justify-center gap-2",
    secondary: "py-2 rounded text-sm text-gray-300"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]}`}
    >
      {icon && (
        <Image
          src={icon}
          alt=""
          width={iconSize}
          height={iconSize}
        />
      )}
      {children}
    </button>
  );
} 