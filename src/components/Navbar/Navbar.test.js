import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';

import Navbar from './Navbar';


it('Navbar render correctly', () => {
  const history = createMemoryHistory()
  render(
    <Router history={history}>
      <Navbar />
    </Router>
  )

  expect(screen.getByText(`Список дел`)).toBeInTheDocument();
  expect(screen.getByText(`Информация`)).toBeInTheDocument();
});
