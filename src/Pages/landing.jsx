import React from "react";
import Hero from "../components/Landing/hero";
import About from "../components/Landing/about"
import University from "../components/Landing/university"
import Location from "../components/Landing/location"
import Journey from "../components/Landing/journey"
import Logos from "../components/Landing/logos"
import Program from "../components/Landing/program"
import Leadhero from "../components/Landing/leadhero"
import Test from "../components/Landing/testimonials"
import Contact from "../components/Landing/contact"
import Blog from "../components/Landing/blog"
import Subscribe from "../components/Landing/subscribe"


function App() {
  return (
    <div className="">
      
      <Hero />
      <About/>
      <University/>
      <Location/>
      <Journey/>
      <Logos/>
      <Program/>
      <Leadhero/>
      <Test/>
      <Contact/>
      <Blog/>
      <Subscribe/>

    </div>
  );
}

export default App;
