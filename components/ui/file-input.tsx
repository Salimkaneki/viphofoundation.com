import { Upload } from "lucide-react";

interface FileInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  required?: boolean;
  maxSizeText?: string;
}

export default function FileInput({
  label,
  required = false,
  maxSizeText = "(La taille du fichier ne doit pas dépasser 10MB)",
  ...props
}: FileInputProps) {
  return (
    <div>
      {label && (
        <label className="block text-lg font-medium text-gray-700 mb-1">
          {label}
          {required && <span className="text-red-400 ml-1">*</span>}
        </label>
      )}
      <label className="border-2 border-dashed border-gray-400 rounded-md p-4 hover:border-primary-400 transition-colors cursor-pointer block">
        <input
          type="file"
          className="hidden"
          required={required}
          {...props}
        />
        <div className="flex flex-col gap-2 items-center">
          <div className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors w-fit">
            <Upload size={20} />
            <span className="text-sm font-medium">Choisir un fichier</span>
          </div>
          <div className="flex flex-col gap-1 items-center">
            <span className="text-sm text-gray-500">Aucun fichier n&apos;est sélectionné</span>
            {maxSizeText && (
              <p className="text-xs text-gray-500">{maxSizeText}</p>
            )}
          </div>
        </div>
      </label>
    </div>
  );
}