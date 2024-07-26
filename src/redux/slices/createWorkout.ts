import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  trainingExercises: [],
};

const createWorkout = createSlice({
  name: 'createWorkout',
  initialState,
  reducers: {
    setTrainingExercises(state, action) {
      state.trainingExercises = action.payload;
    },
  },
});

export const { setTrainingExercises } = createWorkout.actions;
export default createWorkout.reducer;
