import { screen, render, fireEvent } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import Event from "./Event";
import React from "react";

describe("testing", () => {
  test("click event", () => {
    render(<Event />);
    const btn = screen.getByTestId("toggle-btn");
    expect(screen.queryByTestId("toggle-elem")).toBeNull(); //проверяем что элемента нету на странице
    fireEvent.click(btn); //клик по кнопке , добавлем элемент
    expect(screen.queryByTestId("toggle-elem")).toBeInTheDocument(); //проверка появился ли документ
    fireEvent.click(btn); //клик по кнопке , удалям элемент
    expect(screen.queryByTestId("toggle-elem")).toBeNull(); //проверяем что элемента нету на странице
  });
  test("input event", async () => {
    render(<Event />);
    const input = screen.getByPlaceholderText(/input value/i);
    expect(screen.queryByTestId("value-elem")).toContainHTML(""); //проверяем что элемент пустой
    // fireEvent.input(input, { target: { value: "sasa" } }); //ввели значене в инпут
    await userEvent.type(input, "sasa");
    expect(screen.queryByTestId("value-elem")).toContainHTML("sasa"); //проверка появился ли текст инпута
  });
});
