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

  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <input
      type="range"
      min={min}
      max={max}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="appearance-none rounded-2xl h-2"
      style={{
        background: `linear-gradient(to right, #b2d9af 0%, #b2d9af ${percentage}%, #e2e8f0 ${percentage}%, #e2e8f0 100%)`,
      }}
    />
  );
};
