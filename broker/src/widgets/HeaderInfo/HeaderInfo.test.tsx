import { render, screen } from "@testing-library/react";
import HeaderInfo from "./HeaderInfo";
import React from "react";

describe("<HeaderInfo Test />", () => {
  it("renders correctly", () => {
    render(<HeaderInfo title="Статистика" />);
    expect(screen.getByText(/Статистика/i)).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();
    expect(screen.queryByText(/Статтика/i)).not.toBeInTheDocument();
  });
});
