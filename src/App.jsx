import './App.css'
import NavbarComponent from './components/navbar'
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomeComponent from './components/Home'
import ShopComponent from './components/Shop'
import ContactoComponent from './components/Contacto'
import CartComponent from './components/Cart'
import ItemDetailComponent from './Container/ItemDetailContainer'
import CartProvider from './context/CartContext'

const App = () => {
  return (
    <BrowserRouter>
    <CartProvider>
    <NavbarComponent/>
      <Switch>
        <Route exact path="/">
          <HomeComponent/>
        </Route>
        <Route exact path="/tienda">
          <ShopComponent/>
        </Route>
        <Route path="/tienda/:nombreProducto">
          <ItemDetailComponent/>
        </Route>
        <Route exact path="/contacto">
          <ContactoComponent/>
        </Route>
        <Route exact path="/carrito">
          <CartComponent/>
        </Route>
      </Switch>
    {/* FOOTER */}
    </CartProvider>
    </BrowserRouter>
  );
}

export default App;
