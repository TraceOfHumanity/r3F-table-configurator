import {useAppSelector} from "hooks/useReduxToolkit";
import {useTableControls} from "hooks/useTableControls";
import {GlassPanel} from "ui/GlassPanel";
import {RangeInput} from "ui/RangeInput";

export const TableWidthInterface = () => {
  const {tableWidth} = useAppSelector((state) => state.table);
  const {changeTableWidth} = useTableControls();
  return (
    <GlassPanel>
      <h2>Table width</h2>
      <RangeInput
        min={50}
        max={200}
        value={tableWidth}
        onChange={(value) => changeTableWidth(value)}
      />
      <h1>{tableWidth}</h1>
    </GlassPanel>
  );
};
