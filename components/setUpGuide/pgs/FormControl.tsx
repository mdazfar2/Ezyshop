import React from "react";

// Define the type for the props
interface FormControlProps {
  type: string;
  id: string;
  label: string;
  placeholder: string;
  value: string;
  onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  valid: boolean;
}

const FormControl: React.FC<FormControlProps> = ({
  type,
  id,
  label,
  placeholder,
  value,
  onchange,
  valid,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex">
        <div className="mr-auto">
          <label className="text-primary-marineBlue font-medium" htmlFor={id}>
            {label}
          </label>
        </div>
        {valid ? null : (
          <div>
            <label
              className="text-primary-strawberryRed font-medium"
              htmlFor={id}
            >
              This field is required
            </label>
          </div>
        )}
      </div>
      <input
        id={id}
        className={
          valid
            ? "w-full p-2 rounded-lg text-lg text-primary-marineBlue outline-none focus:border-primary-purplishBlue duration-700 border border-secondary-lightGray"
            : "w-full p-2 rounded-lg text-lg text-primary-strawberryRed outline-none focus:border-primary-strawberryRed duration-700 border border-primary-strawberryRed"
        }
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onchange}
      />
    </div>
  );
};

export default FormControl;
