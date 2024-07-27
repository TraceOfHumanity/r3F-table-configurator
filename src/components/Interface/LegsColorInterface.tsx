import {legsColorInterfaceData} from "data/interfaceData";
import {useAppSelector} from "hooks/useReduxToolkit";
import React from "react";
import {GlassPanel} from "ui/GlassPanel";
import {RadioGroup} from "../RadioGroup";
import {useTableControls} from "hooks/useTableControls";

export const LegsColorInterface = () => {
  const {legsColor} = useAppSelector((state) => state.table);
  const {changeLegsColor} = useTableControls();

  return (
    <GlassPanel>
      <h2>Legs color</h2>
      {legsColorInterfaceData.map((data) => (
        <RadioGroup
          key={data.label}
          label={data.label}
          name="legsColor"
          checked={legsColor === data.color}
          onChange={() => changeLegsColor(data.color)}
        />
      ))}
    </GlassPanel>
  );
};
