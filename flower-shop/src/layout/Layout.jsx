import { useState, createContext } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

export const searchContext = createContext("");

function Layout() {
  const [searchBar, setSearchBar] = useState("");

  const location = useLocation();
  const isOneProductPage = location.pathname.startsWith("/products/category/");
  const isHome = location.pathname === "/";

  function renderHeader() {
    if (isOneProductPage || isHome) return null;
    return <Header />;
  }

  return (
    <searchContext.Provider value={[searchBar, setSearchBar]}>
      <NavBar />
      {renderHeader()}
      <Outlet />
    </searchContext.Provider>
  );
}

export default Layout;
