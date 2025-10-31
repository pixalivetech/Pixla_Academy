import React from "react";
import Hero from "../Components/Landing/hero";
import About from "../Components/Landing/about"
import University from "../Components/Landing/university"
import Location from "../Components/Landing/location"
import Journey from "../Components/Landing/journey"
import Logos from "../Components/Landing/logos"
import Program from "../Components/Landing/program"
import Leadhero from "../Components/Landing/leadhero"
import Test from "../Components/Landing/testimonials"
import Contact from "../Components/Landing/contact"
import Blog from "../Components/Landing/blog"
import Subscribe from "../Components/Landing/subscribe"


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
