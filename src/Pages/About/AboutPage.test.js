import React from 'react';
import { render, screen } from '@testing-library/react';

import AboutPage from './AboutPage';

 
  it('AboutPage render corrrectly', () => {

  render(
    <AboutPage />
  )
    
    expect(screen.getByText(`Страница информации`)).toBeInTheDocument()
    expect(screen.getByText(`Простой Todo List для закрепления навыков React в связке с Typescript`)).toBeInTheDocument()

});




