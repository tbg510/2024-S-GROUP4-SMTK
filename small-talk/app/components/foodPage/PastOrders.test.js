import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import PastOrders from './PastOrders';

// Mock data for orders
const mockOrders = [
  {
    date: '2023-04-15',
    meals: [
      { name: 'Chicken Caesar Salad', quantity: 1 },
      { name: 'Vegetable Soup', quantity: 2 }
    ]
  },
  {
    date: '2023-04-16',
    meals: [
      { name: 'Grilled Salmon', quantity: 1 },
      { name: 'Tomato Soup', quantity: 1 }
    ]
  }
];

describe('PastOrders Component', () => {
  beforeEach(() => {
    // Render the PastOrders component before each test
    render(<PastOrders orders={mockOrders} />);
  });

  it('renders correctly', () => {
    // Check if the component renders the first order date
    expect(screen.getByText('2023-04-15')).toBeInTheDocument();
    // Ensure both days are present initially without expanded details
    expect(screen.queryByText('Chicken Caesar Salad')).not.toBeInTheDocument();
    expect(screen.getByText('2023-04-16')).toBeInTheDocument();
  });

  it('toggles day details on day button click', () => {
    const dayButton = screen.getByText('2023-04-15');
    fireEvent.click(dayButton); // Toggle to show details
    expect(screen.getByText('Chicken Caesar Salad')).toBeInTheDocument(); // Details should show
    fireEvent.click(dayButton); // Toggle to hide details
    expect(screen.queryByText('Chicken Caesar Salad')).not.toBeInTheDocument(); // Details should be hidden
  });

  it('checks reorder functionality', () => {
    // Mocking console.log to test its call
    console.log = jest.fn();
    const dayButton = screen.getByText('2023-04-15');
    fireEvent.click(dayButton); // Open details
    const reorderButton = screen.getAllByText('Reorder')[0];
    fireEvent.click(reorderButton);
    // Check if console.log was called with the expected string
    expect(console.log).toHaveBeenCalledWith('Reorder functionality goes here.');
  });
});
