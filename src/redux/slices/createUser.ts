import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type CreateUserState = {
  activeStep: 1 | 2;
  selectedAvatarGender: 'male' | 'female' | '';
  nickname: string;
};

const initialState: CreateUserState = {
  activeStep: 1,
  selectedAvatarGender: '',
  nickname: '',
};

const createUserSlice = createSlice({
  name: 'createUser',
  initialState,
  reducers: {
    setSelectedAvatarGender: (
      state,
      action: PayloadAction<CreateUserState['selectedAvatarGender']>,
    ) => {
      state.selectedAvatarGender = action.payload;
    },
    setNickname: (state, action: PayloadAction<string>) => {
      state.nickname = action.payload;
    },
    setActiveStep: (
      state,
      action: PayloadAction<CreateUserState['activeStep']>,
    ) => {
      state.activeStep = action.payload;
    },
  },
});

export const { setSelectedAvatarGender, setNickname, setActiveStep } =
  createUserSlice.actions;
export default createUserSlice.reducer;
