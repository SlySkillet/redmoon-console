import React from "react";
import "./layout.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Header />
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
