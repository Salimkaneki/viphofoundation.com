interface SelectProps {
  label?: string;
  options: string[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  leftElement?: React.ReactNode;
}

export default function Select({
  label,
  options,
  value,
  onChange,
  placeholder = "Sélectionnez une option",
  required = false,
  leftElement
}: SelectProps) {
  return (
    <div>
      {label && (
        <label className="block text-lg font-medium text-gray-700 mb-1">
          {label}
          {required && <span className="text-red-400 ml-1">*</span>}
        </label>
      )}
      <div className="relative">
        {leftElement && (
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            {leftElement}
          </div>
        )}
        <select
          className={`w-full ${leftElement ? 'pl-10' : 'px-4'} py-2 bg-white border border-gray-300 rounded-md text-md text-gray-700 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-300`}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          required={required}
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