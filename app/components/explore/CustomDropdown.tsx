import React, { useState, useRef, useEffect } from "react";
import { ArrowRightIcon } from "@/public/svg/svg";

interface CustomDropdownProps {
  label: string;
  options: string[];
  value: string | null;
  onChange: (val: string | null) => void;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({ label, options, value, onChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        className={`flex items-center justify-between px-3 py-1 rounded min-w-[120px] transition-all select-none w-full ${value ? "text-[#7C3AED]" : "text-[#6B7280]"} cursor-pointer font-semibold`}
        onClick={() => setOpen((o) => !o)}
      >
        <span className="truncate text-left w-full">{label}</span>
        <span className={`ml-2 transition-transform ${open ? "-rotate-90" : "rotate-90"}`} style={{ display: 'flex', alignItems: 'center', height: 18 }}>
          <ArrowRightIcon isActive={value ? true : false} />
        </span>
      </button>
      {open && (
        <div className="absolute left-0 mt-1 w-full bg-white border border-[#E5E7EB] rounded shadow z-10"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <ul className="py-1">
            <li>
              <button
                className="w-full text-left px-3 py-1 text-[#6B7280] hover:bg-[#F3F0FF] text-sm cursor-pointer"
                onClick={() => { onChange(null); setOpen(false); }}
              >
                {label}
              </button>
            </li>
            {options.map(opt => (
              <li key={opt}>
                <button
                  className={`w-full text-left px-3 py-1 text-sm ${value === opt ? "text-[#7C3AED] font-semibold bg-[#F3F0FF]" : "text-[#6B7280] hover:bg-[#F3F0FF]"} cursor-pointer`}
                  onClick={() => { onChange(opt); setOpen(false); }}
                >
                  {opt}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CustomDropdown; 