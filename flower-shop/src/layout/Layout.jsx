import { useState, createContext} from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

//import Banner from "../components/Banner/Banner";
export const searchContext = createContext("");

function Layout() {
  const [searchBar, setSearchBar] = useState("");
  
  const location = useLocation()
  const isOneProductPage = location.pathname.startsWith("/products/category/")
  // const isHome = location.pathname.includes('')
  
  return (
    <searchContext.Provider value={[searchBar, setSearchBar]}>
      <NavBar />
      {isOneProductPage ? null : <Header />}
      <Outlet />
      
  
    </searchContext.Provider>
  );
}

export default Layout;
