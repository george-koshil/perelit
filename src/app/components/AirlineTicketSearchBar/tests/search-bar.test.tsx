import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import AirlineTicketSearchBar from '../index';

// Mock the useMediaQuery hook to return a specific value
jest.mock('@/app/hooks/useMediaQuery', () => (query) => {
  if (query === 'md') {
    return true; // Mocking it as true for testing purposes
  } else if (query === 'lg') {
    return false; // Mocking it as false for testing purposes
  }
});

// Mock the useTickets hook and its savePassengers function
jest.mock('@/app/hooks/useTickets', () => {
  return {
    useTickets: () => ({
      savePassengers: jest.fn(),
    }),
  };
});

describe('AirlineTicketSearchBar', () => {
  it('renders without crashing', () => {
    render(<AirlineTicketSearchBar />);
  });

  it('calls savePassengers when passengers are updated', () => {
    const { rerender } = render(<AirlineTicketSearchBar />);
    
    const savePassengers = jest.fn();

    const newPassengers = [
      { type: 'ADT', number: 2 },
      { type: 'CNN', number: 1 },
      { type: 'INS', number: 1 },
    ];

    // Mock useTickets to return the newPassengers array
    jest.mock('@/app/hooks/useTickets', () => {
      return {
        useTickets: () => ({
          savePassengers,
        }),
      };
    });

    rerender(<AirlineTicketSearchBar />);

    expect(savePassengers).toHaveBeenCalledWith(newPassengers);
  });

  it('handles input changes correctly', () => {
    const { container } = render(<AirlineTicketSearchBar />);

    const departureDateInput = screen.getByLabelText('when');
    const originLocationInput = screen.getByLabelText('From');
    const destinationLocationInput = screen.getByLabelText('Where');

    fireEvent.change(departureDateInput, { target: { value: '2023-11-01' } });
    fireEvent.change(originLocationInput, { target: { value: 'New York' } });
    fireEvent.change(destinationLocationInput, { target: { value: 'Los Angeles' } });

    expect(departureDateInput.value).toBe('2023-11-01');
    expect(originLocationInput.value).toBe('New York');
    expect(destinationLocationInput.value).toBe('Los Angeles');
  });

  it('calls onSubmit function when the search button is clicked', () => {
    const { container } = render(<AirlineTicketSearchBar withSearchButton />);
    const searchButton = screen.getByText('search');

    const onSubmit = jest.fn();
    jest.spyOn(ticketsService, 'getTickets');

    fireEvent.click(searchButton);

    expect(onSubmit).toHaveBeenCalled();
    expect(ticketsService.getTickets).toHaveBeenCalled();
  });
});
