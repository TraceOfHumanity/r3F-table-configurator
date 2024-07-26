import React, {FC} from "react";
type RadioProps = {
  name: string;
  checked: boolean;
  onChange: () => void;
};
export const RadioBtn: FC<RadioProps> = ({name, checked, onChange}) => {
  return (
    <input
      type="radio"
      name={name}
      checked={checked}
      onChange={onChange}
      className="w-4 h-4"
    />
  );
};
