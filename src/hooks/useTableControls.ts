import {setLegs} from "../redux/slices/table";
import {useAppDispatch} from "./useReduxToolkit";

export const useTableControls = () => {
  const dispatch = useAppDispatch();

  const changeLegsType = (legs: number) => {
    dispatch(setLegs(legs));
  };

  return {changeLegsType};
};
