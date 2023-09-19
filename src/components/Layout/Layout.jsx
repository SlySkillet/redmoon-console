import React from "react";
import "./layout.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Header from "./Header";
import Primary from "./Primary";
import Secondary from "./Secondary";

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Header />
      <NavBar />
      <Primary />
      <Secondary />
      <Footer />
    </div>
  );
};

export default Layout;
