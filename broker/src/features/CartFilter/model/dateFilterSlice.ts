import { BrokerStat } from "@entities/Traid/model/types/types";
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface IFilterByDate {
  filterData: BrokerStat[];
}
const initialState: IFilterByDate = {
  filterData: [],
};

const traidersFilterByDate = createSlice({
  name: "traidersFilterByDate",
  initialState,
  reducers: {
    setTraidersByDate(state, action: PayloadAction<BrokerStat[]>) {
      state.filterData = action.payload;
    },
  },
});
const tradersByDateReducer = traidersFilterByDate.reducer;
export default tradersByDateReducer;
export const { setTraidersByDate } = traidersFilterByDate.actions;
