import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Passengers from '../page';

jest.mock('../hooks/useTickets', () => {
  return {
    useTickets: () => ({
      passengers: [
        {
          name: 'John',
          surname: 'Doe',
          dateOfBirth: '1990-01-01',
          sex: 'Male',
          passport: 'ABC123',
          passportFrom: 'USA',
          passportTo: 'Canada',
        },
        {
          name: 'Jane',
          surname: 'Smith',
          dateOfBirth: '1995-03-15',
          sex: 'Female',
          passport: 'XYZ789',
          passportFrom: 'Canada',
          passportTo: 'USA',
        },
      ],
      savePassengers: jest.fn(),
    }),
  };
});

describe('Passengers', () => {
  it('renders the component without crashing', () => {
    render(<Passengers />);
  });

  it('displays passenger forms with correct data', () => {
    render(<Passengers />);
    
    const johnDoeNameInput = screen.getByLabelText('Name 0');
    const janeSmithNameInput = screen.getByLabelText('Name 1');
    
    expect(johnDoeNameInput).toHaveValue('John');
    expect(janeSmithNameInput).toHaveValue('Jane');
  });

  it('updates passenger data when form inputs change', () => {
    render(<Passengers />);
    
    const johnDoeNameInput = screen.getByLabelText('Name 0');
    const janeSmithNameInput = screen.getByLabelText('Name 1');
    
    fireEvent.change(johnDoeNameInput, { target: { value: 'Updated John' } });
    fireEvent.change(janeSmithNameInput, { target: { value: 'Updated Jane' } });
    
    expect(johnDoeNameInput).toHaveValue('Updated John');
    expect(janeSmithNameInput).toHaveValue('Updated Jane');
  });

  it('calls savePassengers when passenger data is updated', () => {
    const { rerender } = render(<Passengers />);
    
    const savePassengers = jest.fn();

    jest.mock('../hooks/useTickets', () => {
      return {
        useTickets: () => ({
          passengers: [
            {
              name: 'Updated John',
              surname: 'Doe',
              dateOfBirth: '1990-01-01',
              sex: 'Male',
              passport: 'ABC123',
              passportFrom: 'USA',
              passportTo: 'Canada',
            },
            {
              name: 'Updated Jane',
              surname: 'Smith',
              dateOfBirth: '1995-03-15',
              sex: 'Female',
              passport: 'XYZ789',
              passportFrom: 'Canada',
              passportTo: 'USA',
            },
          ],
          savePassengers,
        }),
      };
    });

    rerender(<Passengers />);

    expect(savePassengers).toHaveBeenCalled();
  });
});
