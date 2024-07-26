import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  availableExercises: [],
  activeExercise: 't-pose',
};

const availableExercises = createSlice({
  name: 'exercises',
  initialState,
  reducers: {
    setAvailableExercises(state, action) {
      state.availableExercises = action.payload;
    },
    setActiveExercise(state, action) {
      state.activeExercise = action.payload;
    },
  },
});

export const { setAvailableExercises, setActiveExercise } = availableExercises.actions;
export default availableExercises.reducer;
