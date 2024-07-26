import React, {FC} from "react";
import { RadioBtn } from "ui/RadioBtn";

type RadioGroupProps = {
  label: string;
  name: string;
  checked: boolean;
  onChange: () => void;
};

export const RadioGroup: FC<RadioGroupProps> = ({
  label,
  name,
  checked,
  onChange,
}) => {
  return (
    <label className="flex gap-2">
      <RadioBtn name={name} checked={checked} onChange={onChange} />
      <span className="text-lg font-bold">{label}</span>
    </label>
  );
};
