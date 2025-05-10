import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserState } from "@shared/types/globalTypes";

const initialState: IUserState = {
  mail: "",
  password: "",
  entry: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setMailReg(state, action: PayloadAction<string>) {
      state.mail = action.payload;
    },
    setPasswordReg(state, action: PayloadAction<string>) {
      state.password = action.payload;
    },
    setEntry(state, action: PayloadAction<boolean>) {
      state.entry = action.payload;
    },
  },
});
const userReducer = userSlice.reducer;
export default userReducer;
export const { setMailReg, setPasswordReg } = userSlice.actions;
