interface FormInputProps {
  type: "text" | "email";
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  minLength?: number;
  label?: string;
  endIcon?: React.ReactNode;
}

export function FormInput({
  type,
  placeholder,
  value,
  onChange,
  required = false,
  minLength,
  label,
  endIcon
}: FormInputProps) {
  return (
    <div>
      {label && <label className="block text-sm mb-1">{label}</label>}
      <div className="relative">
        <input
          type={type}
          placeholder={placeholder}
          className="w-full p-3 bg-[#1a1a1a] text-white border border-gray-600 rounded-lg pr-10 focus:outline-none focus:ring-2 focus:ring-purple-600"
          value={value}
          onChange={onChange}
          required={required}
          minLength={minLength}
        />
        {endIcon && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            {endIcon}
          </div>
        )}
      </div>
    </div>
  );
} 