interface FormInputProps {
  type: "text" | "email";
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  minLength?: number;
  label?: string;
}

export function FormInput({
  type,
  placeholder,
  value,
  onChange,
  required = false,
  minLength,
  label
}: FormInputProps) {
  return (
    <div>
      {label && <label className="block text-sm mb-1">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        className="w-full p-3 bg-[#1a1a1a] text-white border border-gray-600 rounded-lg pr-10 focus:outline-none focus:ring-2 focus:ring-purple-600"
        value={value}
        onChange={onChange}
        required={required}
        minLength={minLength}
      />
    </div>
  );
} 