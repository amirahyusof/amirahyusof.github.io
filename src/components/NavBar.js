import React from "react"
import { Routes, Route, Link } from "react-router-dom";
import Hero from "./Hero";
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

function NavBar(){
    return(
      <div>
        <nav className="w-full flex items-center justify-center">
          <div className ="h-14 p-2 rounded sm:mt-4 text-white bg-[#765827] bg-opacity-25 backdrop-filter backdrop-blur-md">
            <ul className="flex sm:text-lg my-2">
            <li className="mx-6  mr-[60px] sm:mr-[100px] hover:text-[#EAC696]">
                <Link to="/">Amirah Yusof</Link>
              </li>
              <li className="mr-2 sm:mr-6  underline hover:underline-offset-4">
                <Link to="/about">About</Link>
              </li>
              <li className="mr-2 sm:mr-6 underline hover:underline-offset-4">
                <Link to="/projects">Projects</Link>
              </li>
              <li className="mr-2 w-[80px] px-2 sm:mr-6 border-[#C8AE7D] bg-[#C8AE7D] bg-opacity-50 rounded-xl hover:bg-opacity-30">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
      </nav>

      <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>

      </div>
      
        );
}

export default NavBar;