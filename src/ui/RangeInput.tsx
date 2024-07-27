import React, {FC} from "react";

type RangeInputProps = {
  min?: number;
  max?: number;
  value: number;
  onChange: (value: number) => void;
};

export const RangeInput: FC<RangeInputProps> = ({
  min = 0,
  max = 100,
  value,
  onChange,
}) => {
  return (
    <input
      type="range"
      min={min}
      max={max}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="appearance-none rounded-2xl"
      style={{
        background: `linear-gradient(to right, #ff0000 0%, #ff0000 ${value}%, #e2e8f0 ${value}%, #e2e8f0 100%)`,
      }}
    />
  );
};
