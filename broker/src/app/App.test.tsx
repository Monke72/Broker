import { render, screen } from "@testing-library/react";
import { RegistrPage } from "@pages/RegistrPage";
import HomePage from "@pages/HomePage";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@features/LoginForm/model/slice";
import userEvent from "@testing-library/user-event";
import { navSectionReducer } from "@features/SliderSections/model/sliderSectionsSlice";
import { traiderSliceReduscer } from "@entities/Traid";

test("Переход с страницы регистрации на домашнюю страницу", async () => {
  // создаем тестовый store
  const store = configureStore({
    reducer: {
      navSection: navSectionReducer,
      userReg: userReducer,
      traiders: traiderSliceReduscer,
    },
    preloadedState: {
      userReg: {
        entry: false,
        mail: "",
        password: "",
      },
      navSection: {
        section: "",
      },
      traiders: {
        isLoading: false,
      },
    },
  });

  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={["/Broker/reg"]}>
        <Routes>
          <Route path="/Broker/reg" element={<RegistrPage />} />
          <Route path="/Broker/" element={<HomePage />} />
        </Routes>
      </MemoryRouter>
    </Provider>
  );
  const user = userEvent.setup();
  const inputMail = screen.getByPlaceholderText(/E-mail/i);
  const inputPassword = screen.getByPlaceholderText(/Пароль/i);
  const inputCheckbox = screen.getByTestId("checkbox-input");
  const subMitButton = screen.getByTestId("submit-button");

  await user.type(inputMail, "wera16307@gmail.com");
  await user.type(inputPassword, "Abrakadabra152!");
  await user.click(inputCheckbox);
  await user.click(subMitButton);

  expect(await screen.findByText("Главная/Статистика")).toBeInTheDocument();
});
