import React, {FC} from "react";
import {FaCheck} from "react-icons/fa";

type RadioProps = {
  name: string;
  checked: boolean;
  onChange: () => void;
};
export const RadioBtn: FC<RadioProps> = ({name, checked, onChange}) => {
  return (
    <label className="w-fit cursor-pointer">
      <input
        type="radio"
        name={name}
        checked={checked}
        onChange={onChange}
        className="w-4 h-4 hidden"
      />
      <span className="flex size-6 items-center justify-center rounded border border-black">
        {checked && <FaCheck className="h-4 w-4 text-white" />}
      </span>
    </label>
  );
};