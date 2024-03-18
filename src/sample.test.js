import { render, screen } from "@testing-library/react";
import TestFile from "./sample";
import React from "react";
import "@testing-library/jest-dom";
test("having welcome", () => {
  render(<TestFile />);
  expect(screen.getByRole("heading")).toHaveTextContent("Welcome");
});
