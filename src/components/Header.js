import React from "react";
import {Link} from 'react-router-dom';
import StyledHeader from '../StyledComponents/StyledHeader';
import {FaSearch} from 'react-icons/fa';
import { logo, cart } from "../data";
import { useState } from "react";



function Header(props) {
  const [value, setValue] = useState('');

  return (
    <StyledHeader>
      <div className="container">
        <Link to="/" className="logo">
          <img src={logo} alt="Flea Market" className="logo-img"/>
          <h1 className="logo-text">flea market</h1>
        </Link>
        <div className="search">
          <input type="text" className="search-input" value={value} onChange={(e)=>setValue(e.target.value)}/>
          <Link className="search-button" to={'/search/' + encodeURIComponent(value)}><FaSearch/></Link>
        </div>
        <Link to="/cart" className="cart">
          <img src={cart} alt="Flea Market" className="cart-img"/>
          <span className="cart-text">Cart</span>
        </Link>
      </div>
    </StyledHeader>
  );
}

export default Header;
