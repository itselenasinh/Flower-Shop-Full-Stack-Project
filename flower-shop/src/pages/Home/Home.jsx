import Layout from "../../layout/Layout";
import { Outlet } from "react-router-dom";
import "./Home.css";
import Footer from "../../components/footer/Footer";

function Home() {
  return (
    <>
      {" "}
      <Layout></Layout>
      <Outlet></Outlet>
      <Footer />
    </>
  );
}

export default Home;