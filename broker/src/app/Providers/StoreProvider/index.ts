import store from "./store";
import AppRouter from "./ui/AppRouter";
import { persistor } from "./store";

export { store, AppRouter as StoreProvider, persistor };
