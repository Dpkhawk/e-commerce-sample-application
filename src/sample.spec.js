// import { render, screen, fireEvent, waitFor } from "@testing-library/react";
// // import "@testing-library/jest-dom/extend-expect";
// import React from "react";
// import "@testing-library/react";
// // import Products from '../src/component/products/products-page';
// import fetchData from "./component/data-fetching/fetching";
// import Products from "./component/products/products-page";
// jest.mock("axios");
// // jest.mock('../src/component/data-fetching/fetching', () => jest.fn());

// describe("Products Component", () => {
//   beforeEach(() => {
//     fetchData.mockReset();
//   });

//   it("renders products correctly", async () => {
//     const mockProducts = [
//       { id: 1, name: "Apple", category: "fruits" },
//       { id: 2, name: "Banana", category: "fruits" },
//     ];

//     fetchData.mockResolvedValue(mockProducts);

//     render(<Products />);

//     await waitFor(() => expect(fetchData).toHaveBeenCalled());

//     expect(screen.getByText("Apple")).toBeInTheDocument();
//     expect(screen.getByText("Banana")).toBeInTheDocument();
//   });

//   it("filters products by category", async () => {
//     const mockProducts = [
//       { id: 1, name: "Apple", category: "fruits" },
//       { id: 2, name: "Broccoli", category: "vegetables" },
//     ];

//     fetchData.mockResolvedValue(mockProducts);

//     render(<Products />);

//     await waitFor(() => expect(fetchData).toHaveBeenCalled());

//     expect(screen.getByText("Apple")).toBeInTheDocument();
//     expect(screen.getByText("Broccoli")).toBeInTheDocument();

//     fireEvent.change(screen.getByRole("combobox"), {
//       target: { value: "vegetables" },
//     });

//     await waitFor(() =>
//       expect(screen.queryByText("Apple")).not.toBeInTheDocument()
//     );
//     expect(screen.getByText("Broccoli")).toBeInTheDocument();
//   });
// });

import React from "react";
import { render, screen } from "@testing-library/react";
import ProductSideBar from "./component/products/product-side-bar";
import "@testing-library/jest-dom";

test("renders selected items correctly", () => {
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

test("calculates total price correctly", () => {
  const selectedItems = [
    { name: "Item 1", kgs: 2, price: 10 },
    { name: "Item 2", kgs: 3, price: 15 },
  ];
  render(<ProductSideBar selectedItems={selectedItems} />);

  const totalPriceInput = screen.getByDisplayValue("25");
  expect(totalPriceInput).toBeInTheDocument();
});
