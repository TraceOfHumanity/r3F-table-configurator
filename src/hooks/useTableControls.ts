import {setLegs, setLegsColor} from "../redux/slices/table";
import {useAppDispatch} from "./useReduxToolkit";

export const useTableControls = () => {
  const dispatch = useAppDispatch();

  const changeLegsType = (legs: number) => {
    dispatch(setLegs(legs));
  };

  const changeLegsColor = (color: string) => {
    dispatch(setLegsColor(color));
  };

  return {changeLegsType, changeLegsColor};
};
