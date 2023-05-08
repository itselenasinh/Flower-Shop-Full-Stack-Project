import React from "react";
import { useLocation } from "react-router-dom";

function Header() {

    const location = useLocation()
    const currentPath = location.pathname.replace(/%20/g, '-')
    const currentPage = currentPath.split('/').pop().replace('-', ' ')

  return (
    <header>
      <h1>{currentPage}</h1>
    </header>
  );
}

export default Header;
