interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  icon?: React.ReactNode;
  bgColor?: string;
  textColor?: string;
}

export default function Button({
  label,
  icon,
  bgColor = "bg-primary-500",
  textColor = "text-white",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        px-4 py-2
        rounded-md
        font-medium
        inline-flex items-center
        transition-all duration-200
        ${bgColor} ${textColor}
        hover:rounded-none
        ${className}
      `}
      {...props}
    >
      {icon && <span className={`mr-2 flex items-center ${textColor}`}>{icon}</span>}
      {label}
    </button>
  );
}
