import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserState, SourceTraffic } from "@shared/types/globalTypes";

const initialState: IUserState = {
  mail: "",
  password: "",
  entry: false,
  name: "",
  tel: "",
  tg: "",
  traffic: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setMailReg(state, action: PayloadAction<string>) {
      if (state.mail !== action.payload) state.mail = action.payload;
    },
    setPasswordReg(state, action: PayloadAction<string>) {
      if (state.password !== action.payload) state.password = action.payload;
    },
    setEntry(state, action: PayloadAction<boolean>) {
      if (state.entry !== action.payload) state.entry = action.payload;
    },
    setName(state, action: PayloadAction<string>) {
      if (state.name !== action.payload) state.name = action.payload;
    },
    setTel(state, action: PayloadAction<string>) {
      if (state.tel !== action.payload) state.tel = action.payload;
    },
    setTg(state, action: PayloadAction<string>) {
      if (state.tg !== action.payload) state.tg = action.payload;
    },
    setTraffic(state, action: PayloadAction<SourceTraffic>) {
      if (state.traffic !== action.payload) state.traffic = action.payload;
    },
    deleteAll(state) {
      state.entry = false;
      state.mail = "";
      state.name = "";
      state.password = "";
      state.tel = "";
      state.tg = "";
      state.traffic = "";
    },
  },
});
const userReducer = userSlice.reducer;
export default userReducer;
export const {
  setMailReg,
  setPasswordReg,
  setEntry,
  setName,
  setTel,
  setTg,
  setTraffic,
  deleteAll,
} = userSlice.actions;
