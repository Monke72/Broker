import { render, screen } from "@testing-library/react";
import Async from "./Async";
import axios from "axios";
import React from "react";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("<ComponentName />", () => {
  let response;
  beforeEach(() => {
    response = {
      data: [
        {
          id: 1,
          name: "Leanne Graham",
        },
        {
          id: 2,
          name: "Ervin Howell",
        },
        {
          id: 3,
          name: "Clementine Bauch",
        },
      ],
    };
  });
  test("render usersList", async () => {
    mockedAxios.get.mockReturnValue(response);
    render(<Async />);
    const users = await screen.findAllByTestId("user-item");
    expect(users.length).toBe(3);
    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    screen.debug();
  });
});
