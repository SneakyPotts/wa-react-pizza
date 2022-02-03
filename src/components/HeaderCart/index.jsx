import React from 'react';
import CartIcon from "../../icons/CartIcon";
import {Link} from "react-router-dom";

const HeaderCart = () => {
  return (
    <div className="header__cart">
      <Link to="/cart" className="button button--cart">
        <span>520 ₽</span>
        <span className="button__delimiter"></span>
        <CartIcon/>
        <span>3</span>
      </Link>
    </div>
  );
};

export default HeaderCart;