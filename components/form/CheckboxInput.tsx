import React from "react";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";

interface CheckboxInputProps {
  defaultValue?: string;
  name?: string;
  label: string;
  defaultChecked?: boolean;
}

function CheckboxInput({
  name,
  label,
  defaultValue,
  defaultChecked,
}: CheckboxInputProps) {
  return (
    <div className="flex gap-2 items-center">
      <Checkbox
        id={name}
        name={name}
        defaultChecked={defaultChecked}
        defaultValue={defaultValue}
        className="w-5 h-5"
      />
      <Label className="leading-none" htmlFor={name}>
        {label}
      </Label>
    </div>
  );
}

export default CheckboxInput;
