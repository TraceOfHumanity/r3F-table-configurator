import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  legs: 0,
  legsColor: "#777777",
  tableWidth: 100,
};

const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    setLegs: (state, action) => {
      state.legs = action.payload;
    },
    setLegsColor: (state, action) => {
      state.legsColor = action.payload;
    },
    setTableWidth: (state, action) => {
      state.tableWidth = action.payload;
    },
  },
});

export const {setLegs, setLegsColor, setTableWidth} = tableSlice.actions;
export default tableSlice.reducer;
