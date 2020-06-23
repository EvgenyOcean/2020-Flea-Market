import React from "react";
import {Link} from 'react-router-dom';
import StyledHeader from '../StyledComponents/StyledHeader';
import {FaSearch} from 'react-icons/fa';
import { logo, cart } from "../data";



function Header(props) {
    return (
      <StyledHeader>
        <div className="container">
          <Link to="/" className="logo">
            <img src={logo} alt="Flea Market" className="logo-img"/>
            <span className="logo-text">flea market</span>
          </Link>
          <div className="search">
            <input type="text" className="search-input"/>
            <button type="button" className="search-button"><FaSearch/></button>
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
