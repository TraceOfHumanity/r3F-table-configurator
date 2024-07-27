import {setLegs, setLegsColor, setTableWidth} from "../redux/slices/table";
import {useAppDispatch} from "./useReduxToolkit";

export const useTableControls = () => {
  const dispatch = useAppDispatch();

  const changeLegsType = (legs: number) => {
    dispatch(setLegs(legs));
  };

  const changeLegsColor = (color: string) => {
    dispatch(setLegsColor(color));
  };

  const changeTableWidth = (width: number) => {
    dispatch(setTableWidth(width));
  };

  return {changeLegsType, changeLegsColor, changeTableWidth};
};
