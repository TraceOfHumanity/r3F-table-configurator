import {configureStore} from "@reduxjs/toolkit";

import createUserSlice from "./slices/createUser";
import createWorkout from "./slices/createWorkout";
import exercises from "./slices/availableExercises";
import themeSlice from "./slices/theme";

const store = configureStore({
  reducer: {
    themeSlice,
    createUserSlice,
    exercises,
    createWorkout,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
