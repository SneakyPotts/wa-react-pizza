import React from 'react';
import Logo from "../Logo";
import HeaderCart from "../HeaderCart";
import {useLocation} from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <div className="header">
      <div className="container">
        <Logo/>
        { !location?.pathname?.includes('cart') && <HeaderCart/> }
      </div>
    </div>
  );
};

export default Header;