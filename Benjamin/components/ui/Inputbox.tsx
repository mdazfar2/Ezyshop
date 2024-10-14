import { Field, Input, Label } from '@headlessui/react';
import clsx from 'clsx';

interface InputboxProps {
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  data: string;
}

const Inputbox: React.FC<InputboxProps> = ({
  label,
  onChange,
  data,
}) => {
  return (
    <div className="w-full max-w-md px-4">
      <Field>
        <Label className="text-sm font-medium text-gray-800">{label}</Label>
        {/* <Description className="text-sm text-gray-600">Use your real name so people will recognize you.</Description> */}
        <Input
          type="text"
          value={data}
          onChange={onChange}
          className={clsx(
            'mt-3 block w-full rounded-lg border-none bg-white py-2 px-3 text-sm text-gray-800', // Changed from white/5 to white
            'focus:outline-none focus:ring-2 focus:ring-blue-500' // Added focus ring for visibility
          )}
        />
      </Field>
    </div>
  );
};

export default Inputbox;
