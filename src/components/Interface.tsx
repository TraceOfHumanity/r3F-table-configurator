import {legsInterfaceData} from "data/interfaceData";
import {useAppDispatch, useAppSelector} from "hooks/useReduxToolkit";
import {useTableControls} from "hooks/useTableControls";
import React from "react";

export const Interface = () => {
  const dispatch = useAppDispatch();
  const {legs} = useAppSelector((state) => state.table);
  const {changeLegsType} = useTableControls();

  return (
    <div className="fixed top-0 right-0 h-screen p-2 overflow-y-auto">
      <div className="">
        {/* <label htmlFor="">
          <input
            type="radio"
            name="legs"
            checked
            onChange={() => changeLegsType(0)}
          />
          <span>Standard</span>
        </label>
        <label htmlFor="">
          <input type="radio" name="legs" onChange={() => changeLegsType(1)} />
          <span>Solid</span>
        </label>
        <label htmlFor="">
          <input type="radio" name="legs" onChange={() => changeLegsType(2)} />
          <span>Design</span>
        </label> */}
        {legsInterfaceData.map((data) => (
          <label key={data.type}>
            <input
              type="radio"
              name="legs"
              checked={legs === data.type}
              onChange={() => changeLegsType(data.type)}
            />
            <span>{data.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};
