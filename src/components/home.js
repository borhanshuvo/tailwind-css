import React from "react";
import Header from "./header";
import Laptop from "./laptop";
import MobilePhone from "./mobilePhone";
import Navbar from "./navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <MobilePhone />
      <Laptop />
    </>
  );
};

export default Home;
