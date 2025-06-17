import { fetchData } from "./getTraidInfo";
import axios from "axios";
import { BrokerStat } from "../types/types";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

beforeEach(() => {
  jest.clearAllMocks();
});

describe("fetchData", () => {
  const mockResponse: BrokerStat[] = [
    {
      id: 1,
      date: "23.02.2020",
      clicks: 65,
      registrations: 6,
      ftd: 19,
      traders_count: 2,
      payouts: 2,
      deposit: 12.11,
      worked_bonuses: 1,
      dynamics: 3,
      revenue: 11.42,
      traders: [{ id: "T1004" }, { id: "T1005" }],
    },
  ];

  test("возвращает данные при успешном запросе", async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: mockResponse });

    const thunk = fetchData();
    const dispatch = jest.fn();
    const getState = jest.fn();
    const rejectWithValue = jest.fn();

    const result = await thunk(dispatch, getState, { rejectWithValue });

    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    expect(result.payload).toEqual(mockResponse);
  });

  test("обрабатывает ошибку", async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error("Network error"));

    const thunk = fetchData();
    const dispatch = jest.fn();
    const getState = jest.fn();
    const rejectWithValue = jest.fn((error) => error);

    const result = await thunk(dispatch, getState, { rejectWithValue });

    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    expect(result.payload).toEqual(new Error("Network error"));
  });
});
