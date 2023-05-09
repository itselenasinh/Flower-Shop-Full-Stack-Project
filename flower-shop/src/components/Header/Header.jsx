import React from "react";
import { useLocation } from "react-router-dom";
import './Header.css'

function Header() {

    const location = useLocation()
    const currentPage = location.pathname.split('/').pop().replace('-', ' ')

  return (
    <header>
      <h1>{currentPage.toUpperCase()}</h1>
    </header>
  );
}

export default Header;
