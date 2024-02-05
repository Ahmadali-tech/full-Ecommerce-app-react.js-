import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Product from './components/Product';
import Cart from './components/Cart';
import Notfound from './components/Notfound';
import CartcontextProvider from './components/Cartcontext';
import Showproductprovider from './components/Showproduct';
import LoginComponent from './components/LoginComponent';
import Register from './components/Register';
import Electronics from './components/Electronics';
import './App.css';

function App() {
 
  return (
 
    <div className="main-class">
      <Router>
        <CartcontextProvider>
          <Showproductprovider>
            <Navbar />
            <Switch>
               <Route path="/LoginComponent" exact component={LoginComponent}/>
              <Route path="/Cart" exact component={Cart} />
              <Route path="/Product" exact component={Product} />
              <Route path="/Electronics" exact component={Electronics}/>
              <Route path="/Notfound" exact component={Notfound} />
              <Route path="/Register" exact component={Register} />
              <Route component={Notfound} />
            </Switch>
          </Showproductprovider>
        </CartcontextProvider>
      </Router>
    </div>
  );
}

export default App;

