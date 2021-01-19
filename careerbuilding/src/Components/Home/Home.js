import React from "react";
import Connect from "./Connect";
import Footer from "./Footer";
import Quotes from "./Quotes";
import WhyUs from "./WhyUs";


function Home() {
  return (
    <div >
      <Connect />
      <WhyUs/> 
      <Quotes />
      <Footer />
    </div>
  );
}

export default Home;
