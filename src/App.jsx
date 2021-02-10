import './App.css';
import NavbarComponent from './components/navbar';
import ItemListContainer from './Container/ItemListContainer';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <NavbarComponent/>
      <Switch>
        <Route exact path="/">
          <ItemListContainer greeting="Pagina en proceso"/>
        </Route>
      </Switch>
    {/* FOOTER */}
    </BrowserRouter>
    </>
  );
}

export default App;
