import {useAppSelector} from "hooks/useReduxToolkit";
import {useTableControls} from "hooks/useTableControls";
import React from "react";
import {GlassPanel} from "ui/GlassPanel";
import {RangeInput} from "ui/RangeInput";

export const TableWidthInterface = () => {
  const {tableWidth} = useAppSelector((state) => state.table);
  const {changeTableWidth} = useTableControls();
  return (
    <GlassPanel>
      <span>TableWidthInterface</span>
      <RangeInput
        min={50}
        max={200}
        value={tableWidth}
        onChange={(value) => changeTableWidth(value)}
      />
      <h1>
        {tableWidth}
      </h1>
    </GlassPanel>
  );
};
