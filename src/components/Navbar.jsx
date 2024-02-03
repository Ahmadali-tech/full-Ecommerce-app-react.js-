import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './Cartcontext';

const Navbar = () => {
  const { state } = useContext(CartContext);
  const qty = state.shoppingCart.length;

 
  const [showDropdown, setShowDropdown] = useState(false);


  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="navbar">
      <ul className="nav-list">
      <li>
          <Link to="/Product"><span>E</span> ShoppedHouse</Link>
        </li>
        <li>
          <Link to="/Product">Home</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
        <li>
          <Link to="/info">Info</Link>
        </li>
        <li>
          <Link to="/Menu">Menu</Link>
        </li>
        
      </ul>

      <div className="nav-search">
        <input type="text" placeholder="Search..." />
        <button type="button2">Search</button>
      </div>
      <div className="nav-dropdown">
        <button className="dropbtn" onClick={toggleDropdown}>
          Categories
        </button>
        {showDropdown && (
          <div className="dropdown-content">
            <Link to="/Electronics">Electronics</Link>
            <Link to="/clothing">Clothing</Link>
            <Link to="/books">Books</Link>
            
          </div>
        )}
      </div>
      <ul className="nav-list2">
        <li>
          <Link to="/LoginComponent">Login</Link>
        </li>
        <li className="nav-cart">
          <Link to="/Cart">
            <span className="shopping-cart">
              <i className="fas fa-cart-shopping"></i>
              <span className="cart-count">{qty}</span>
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
