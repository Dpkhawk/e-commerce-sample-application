import React from "react";
import { render, screen } from "@testing-library/react";
import ProductSideBar from "./component/products/product-side-bar";
import "@testing-library/jest-dom";

test("renders selected items", () => {
  const selectedItems = [
    { name: "Apple", kgs: 2, price: 10 },
    { name: "Orange", kgs: 3, price: 15 },
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
    { name: "Apple", kgs: 2, price: 10 },
    { name: "Orange", kgs: 3, price: 15 },
  ];
  render(<ProductSideBar selectedItems={selectedItems} />);

  const totalPriceInput = screen.getByDisplayValue("25");
  expect(totalPriceInput).toBeInTheDocument();
});

// import React from 'react';
// import { render, waitFor,screen } from '@testing-library/react';
// import store from "../src/component/redux/index"
// import Products from '../src/component/products/products-page';
// import { Provider } from 'react-redux';


// jest.mock('../src/component/services/fetching', () => ({
//   __esModule: true,
//   default: jest.fn(() => Promise.resolve([
//     { id: 1, name: 'Carrot', category: 'vegetables' },
//     { id: 2, name: 'Apple', category: 'fruits' },
//     { id: 3, name: 'Chicken', category: 'meats' },
//   ])),
// }));

// describe('Products component', () => {
//   it('renders product items', async () => {
//     render(<Provider store={store}><Products /></Provider>);
//     await waitFor(() => {
//       expect(screen.getByText('Carrot')).toBeInTheDocument();
//     });
//   });

//   it('filters products by category', async () => {
//     render(<Products />);
//     await waitFor(() => {
//       expect(screen.queryByText('Carrot')).not.toBeInTheDocument();
     
//     });
//   });

//   it('adds product to cart', async () => {
//      render(<Products />);
//     await waitFor(() => {
//       expect(screen.getByText('Selected Products and their quantity:')).toBeInTheDocument();
//     });
//   });

//   it('searches products', async () => {
//      render(<Products />);
//     await waitFor(() => {
//       expect(screen.queryByText('Carrot')).not.toBeInTheDocument();
      
//     });
//   });
// });
