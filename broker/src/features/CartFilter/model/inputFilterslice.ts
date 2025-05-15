import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BrokerStat } from "@entities/Traid/model/types/types";
interface IInitialState {
  filterArray: BrokerStat[];
}

const initialState: IInitialState = {
  filterArray: [],
};
const cartFilter = createSlice({
  name: "cartFilter",
  initialState,
  reducers: {
    setArray(state, action: PayloadAction<BrokerStat[]>) {
      state.filterArray = action.payload;
    },
    clearArray(state) {
      state.filterArray = [];
    },
  },
});
export const { setArray, clearArray } = cartFilter.actions;
const cartFilterReducer = cartFilter.reducer;
export default cartFilterReducer;
