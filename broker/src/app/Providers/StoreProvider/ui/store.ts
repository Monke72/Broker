import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./../../../../features/LoginForm/model/slice";

const store = configureStore({
  reducer: {
    userReg: userReducer,
  },
});
export type SS = {
  name: string;
};
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
