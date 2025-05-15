import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BrokerStat } from "../types/types";

export const fetchData = createAsyncThunk<
  BrokerStat[],
  void,
  {
    rejectValue: string;
  }
>("data/fetchData", async (_, thunkAPI) => {
  try {
    const res = await axios.get<BrokerStat[]>(
      "https://6821e49db342dce8004c3c69.mockapi.io/broker",
    );
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
