// products.test.js

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Products from '../src/component/products/products-page'; // Import the component to be tested
import fetchData from '../data-fetching/fetching';
// Mock fetchData function
jest.mock('../data-fetching/fetching', () => jest.fn());

describe('Products Component', () => {
  beforeEach(() => {
    // Reset fetchData mock implementation before each test
    fetchData.mockReset();
  });

  it('renders products correctly', async () => {
    // Mock data for products
    const mockProducts = [
      { id: 1, name: 'Apple', category: 'fruits' },
      { id: 2, name: 'Banana', category: 'fruits' },
    ];

    // Mock fetchData to resolve with mock products
    fetchData.mockResolvedValue(mockProducts);

    // Render the component
    render(<Products />);

    // Wait for fetchData to be called
    await waitFor(() => expect(fetchData).toHaveBeenCalled());

    // Check if products are rendered
    expect(screen.getByText('Apple')).toBeInTheDocument();
    expect(screen.getByText('Banana')).toBeInTheDocument();
  });

  it('filters products by category', async () => {
    // Mock data for products
    const mockProducts = [
      { id: 1, name: 'Apple', category: 'fruits' },
      { id: 2, name: 'Broccoli', category: 'vegetables' },
    ];

    // Mock fetchData to resolve with mock products
    fetchData.mockResolvedValue(mockProducts);

    // Render the component
    render(<Products />);

    // Wait for fetchData to be called
    await waitFor(() => expect(fetchData).toHaveBeenCalled());

    // Check if all products are rendered
    expect(screen.getByText('Apple')).toBeInTheDocument();
    expect(screen.getByText('Broccoli')).toBeInTheDocument();

    // Select vegetables from filter
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'vegetables' } });

    // Wait for products to be filtered
    await waitFor(() => expect(screen.queryByText('Apple')).not.toBeInTheDocument());
    expect(screen.getByText('Broccoli')).toBeInTheDocument();
  });

  // Add more test cases as needed
});

// import React from 'react';
// import { render,screen } from '@testing-library/react';
// import ProductSideBar from '../src/component/products/product-side-bar';
// import "@testing-library/jest-dom"
// describe('ProductSideBar', () => {
//   test('renders selected items correctly', () => {
//     const selectedItems = [
//       { name: 'Item 1', kgs: 2, price: 10 },
//       { name: 'Item 2', kgs: 3, price: 15 },
//     ];

//     const { getByText, getByDisplayValue } = render(<ProductSideBar selectedItems={selectedItems} />);

//     selectedItems.forEach(item => {
//       expect(screen.getByText(item.name)).toBeInTheDocument();
//       expect(screen.getByDisplayValue(item.kgs)).toBeInTheDocument();
//       expect(screen.getByDisplayValue(item.price)).toBeInTheDocument();
//     });
//   });

//   test('calculates total price correctly', () => {
//     const selectedItems = [
//       { name: 'Item 1', kgs: 2, price: 10 },
//       { name: 'Item 2', kgs: 3, price: 15 },
//     ];

//     // const { getByDisplayValue } = render(<ProductSideBar selectedItems={selectedItems} />);

//     // const totalPriceInput = screen.getByDisplayValue('25');
//     // expect(totalPriceInput).toBeInTheDocument();
//   });
// });

// products.test.js

