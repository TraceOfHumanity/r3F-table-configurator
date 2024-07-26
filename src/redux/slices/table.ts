import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  legs: 0,
};

const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    setLegs: (state, action) => {
      state.legs = action.payload;
    },
  },
});

export const { setLegs } = tableSlice.actions;
export default tableSlice.reducer;