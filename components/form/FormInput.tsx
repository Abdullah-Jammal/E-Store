import { FormInputProps } from "@/utils/types";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const FormInput = ({
  name,
  type,
  label,
  defaultValue,
  placeholder,
}: FormInputProps) => {
  return (
    <div className="mb-4">
      <Label htmlFor={name} className="mb-1">{label || name}</Label>
      <Input placeholder={placeholder} type={type} name={name}
      id={name} defaultValue={defaultValue} required
      />

    </div>
  )
};

export default FormInput;
