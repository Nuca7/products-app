import React from "react";
import { ContextProvider } from "./Context";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Products from "./components/Products";
import Product from "./components/Product";
import Error from "./components/Error";
import Cart from "./components/Cart";

function App() {
  return (
    <ContextProvider>
      <Router>
        <ul className="navigation">
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route exact path="/products/:id">
            <Product />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </ContextProvider>
  );
}

export default App;
