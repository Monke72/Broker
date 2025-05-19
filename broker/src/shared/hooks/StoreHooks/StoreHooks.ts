import {
  type TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from "react-redux";
import type { RootState } from "@app/Providers/StoreProvider/index";
import { AppDispatch } from "@app/Providers/StoreProvider/store/store";

// Кастомные хуки с типами
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
