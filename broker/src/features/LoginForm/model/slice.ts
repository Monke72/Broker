import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUserState {
  mail: string;
  password: string;
}
const initialState: IUserState = {
  mail: "",
  password: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setMail(state, action: PayloadAction<IUserState>) {
      return action.payload;
    },
    setPassword(state, action: PayloadAction<IUserState>) {
      return action.payload;
    },
  },
});
const userReducer = userSlice.reducer;
export default userReducer;
export const { setMail, setPassword } = userSlice.actions;
