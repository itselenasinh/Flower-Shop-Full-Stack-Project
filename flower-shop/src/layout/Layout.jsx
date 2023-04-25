import { useState, createContext } from "react";
import NavBar from "../components/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
export const searchContext = createContext("");

function Layout() {
  const [searchBar, setSearchBar] = useState("");
  return (
    <searchContext.Provider value={[searchBar, setSearchBar]}>
      <NavBar />
      <Outlet />
      <Footer />
    </searchContext.Provider>
  );
}

export default Layout;
