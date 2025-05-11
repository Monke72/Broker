import storage from "redux-persist/lib/storage"; // localStorage
import { PersistConfig } from "redux-persist";
import { IUserState } from "@shared/types/globalTypes";

const persistConfig: PersistConfig<IUserState> = {
  key: "user",
  storage,
  whitelist: ["entry", "mail", "password"], // Сохраняем только поле `entry`
};

export default persistConfig;
