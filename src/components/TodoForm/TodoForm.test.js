import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import TodoForm from './TodoFrom';


it('TodoForm render correctly', () => {
  const fakeCallback = jest.fn()

  render(
    <TodoForm onAdd={fakeCallback}/>
  )

  expect(screen.getByTestId(`todo-form`)).toBeInTheDocument()
  expect(screen.getByText(`Введите название дела`)).toBeInTheDocument()

  userEvent.type(screen.getByTestId(`todo-form-input`), `Wash the car`);
  expect(screen.getByDisplayValue(`Wash the car`)).toBeInTheDocument();

});
