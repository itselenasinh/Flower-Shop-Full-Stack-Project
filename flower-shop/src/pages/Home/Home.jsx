import Layout from "../../layout/Layout";
import { Outlet } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <>
      {" "}
      <Layout></Layout>
      <Outlet></Outlet>
    </>
  );
}

export default Home;