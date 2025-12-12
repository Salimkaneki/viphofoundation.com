interface SelectProps {
  label?: string;
  options: string[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
}

export default function Select({
  label = "Département",
  options,
  value,
  onChange,
  placeholder = "Sélectionnez une option"
}: SelectProps) {
    return (
        <div className="inline-flex w-full max-w-md">
            <label className="flex items-center justify-center px-4 py-2 bg-white border border-gray-300 rounded-l-md text-md
             text-gray-600 font-regular whitespace-nowrap">
                {label}
            </label>
            <div className="relative flex-1">
                <select
                  className="w-full h-full px-4 py-2 bg-white border border-l-0 border-gray-300 rounded-r-md text-md text-gray-700 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={value}
                  onChange={(e) => onChange?.(e.target.value)}
                >
                    <option value="">{placeholder}</option>
                    {options.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>
        </div>
    );
}