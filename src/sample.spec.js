import React from "react";
import { render, screen } from "@testing-library/react";
import ProductSideBar from "./component/products/product-side-bar";
import "@testing-library/jest-dom";

test("renders selected items", () => {
  const selectedItems = [
    { name: "Item 1", kgs: 2, price: 10 },
    { name: "Item 2", kgs: 3, price: 15 },
  ];

  render(<ProductSideBar selectedItems={selectedItems} />);

  selectedItems.forEach((item) => {
    expect(screen.getByText(item.name)).toBeInTheDocument();
    expect(screen.getByDisplayValue(item.kgs)).toBeInTheDocument();
    expect(screen.getByDisplayValue(item.price)).toBeInTheDocument();
  });
});

test("calculates total price", () => {
  const selectedItems = [
    { name: "Item 1", kgs: 2, price: 10 },
    { name: "Item 2", kgs: 3, price: 15 },
  ];
  render(<ProductSideBar selectedItems={selectedItems} />);

  const totalPriceInput = screen.getByDisplayValue("25");
  expect(totalPriceInput).toBeInTheDocument();
});
