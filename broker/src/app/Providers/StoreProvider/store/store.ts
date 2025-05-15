import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "@features/LoginForm/model/slice";
import { traiderSliceReduscer } from "@entities/Traid";
import tradersByDateReducer from "@features/CartFilter/model/dateFilterSlice";
import cartFilterReducer from "@features/CartFilter/model/inputFilterslice";
import { navSectionReducer } from "@features/SliderSections/model/sliderSectionsSlice";

import persistConfig from "./peristConfig";
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

// Создаем rootReducer из всех слайсов
export const rootReducer = combineReducers({
  userReg: userReducer,
  traiders: traiderSliceReduscer,
  filterArray: cartFilterReducer,
  filterByDate: tradersByDateReducer,
  navSection: navSectionReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
export default store;
