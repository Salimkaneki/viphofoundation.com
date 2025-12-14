interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
  required?: boolean;
}

export default function Input({
  label,
  placeholder = "Entrez votre texte",
  required = false,
  className = "",
  ...props
}: InputProps) {
  return (
    <div>
      {label && (
        <label className="block text-lg font-medium text-gray-700 mb-1">
          {label}
          {required && <span className="text-red-400 ml-1">*</span>}
        </label>
      )}
      <input
        className={`w-full px-4 py-2 bg-white border border-gray-300 rounded-md text-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-300 ${className}`}
        placeholder={placeholder}
        required={required}
        {...props}
      />
    </div>
  );
}