import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import TodoList from './TodoList';

describe('TodoList tests', () => {
  it('TodoList render correctly', () => {
  const onRemoveFake = jest.fn()
  const onToggleFake = jest.fn()
  const todosFake = [{
    completed: false,
    key: `1`,
    taskName: `First`
  },
  {
    completed: false,
    key: `2`,
    taskName: `Second`
  }]

  render(
    <TodoList todos={todosFake} onRemove={onRemoveFake} onToggle={onToggleFake}/>
  )

  expect(screen.getByTestId(`todo-list`)).toBeInTheDocument()
  expect(screen.getByText(`Second`)).toBeInTheDocument()
  expect(screen.getByText(`First`)).toBeInTheDocument()

  });
  it('Logic should be worked correctly', () => {
  const onRemoveFake = jest.fn()
  const onToggleFake = jest.fn()
  const todosFake = [{
    completed: false,
    key: `1`,
    taskName: ``
  }]

  render(
    <TodoList todos={todosFake} onRemove={onRemoveFake} onToggle={onToggleFake}/>
  )
    
    userEvent.click(screen.getByTestId(`todo-list-checkbox-1`))
    userEvent.click(screen.getByTestId(`todo-list-delete-1`))

  expect(onRemoveFake).toHaveBeenCalled()
  expect(onToggleFake).toHaveBeenCalled()
});

});



