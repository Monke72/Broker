import { createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../getTraidInfo/getTraidInfo";
import { IInitialState } from "../types/types";

const initialState: IInitialState = {
  data: [],
  isLoading: false,
  error: null,
};

const traiderSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

const traiderSliceReduscer = traiderSlice.reducer;
export default traiderSliceReduscer;
