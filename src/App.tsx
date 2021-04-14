import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import TodosPage from './Pages/Todos/TodosPage';
import AboutPage from './Pages/About/AboutPage';
import Navbar from './components/Navbar/Navbar';

import { Routes } from './const';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route component={TodosPage} path={Routes.MAIN} exact />
          <Route component={AboutPage} path={Routes.ABOUT} exact />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;
