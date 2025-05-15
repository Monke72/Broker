import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../../../features/LoginForm/model/slice";
import { traiderSliceReduscer } from "@entities/Traid";
import tradersByDateReducer from "@features/CartFilter/model/dateFilterSlice";

import persistConfig from "@shared/config/peristConfig";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import cartFilterReducer from "@features/CartFilter/model/inputFilterslice";

const persistedUserReducer = persistReducer(persistConfig, userReducer);

const store = configureStore({
  reducer: {
    userReg: persistedUserReducer,
    traiders: traiderSliceReduscer,
    filterArray: cartFilterReducer,
    filterByDate: tradersByDateReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export type SS = {
  name: string;
};
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
