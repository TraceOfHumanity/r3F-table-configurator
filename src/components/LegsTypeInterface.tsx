import {legsTypeInterfaceData} from "data/interfaceData";
import {useAppSelector} from "hooks/useReduxToolkit";
import {useTableControls} from "hooks/useTableControls";
import React from "react";
import {GlassPanel} from "ui/GlassPanel";
import { RadioGroup } from "./RadioGroup";

export const LegsTypeInterface = () => {
  const {legs} = useAppSelector((state) => state.table);
  const {changeLegsType} = useTableControls();

  return (
    <GlassPanel>
      {legsTypeInterfaceData.map((data) => (
        <RadioGroup
          key={data.label}
          label={data.label}
          name="legs"
          checked={legs === data.type}
          onChange={() => changeLegsType(data.type)}
        />
      ))}
    </GlassPanel>
  );
};
