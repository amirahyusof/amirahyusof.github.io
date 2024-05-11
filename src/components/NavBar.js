import React from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Hero from "./Hero";
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

function NavBar(){
    
    return(
      <BrowserRouter>
        <nav className="w-full flex items-center justify-center">
          <div className ="h-10 p-2 rounded text-xl text-[#65451F] backdrop-opacity-100">
            <ul className="flex">
            <li className="mx-6 underline hover:underline-offset-4">
                <Link to="/">Intro</Link>
              </li>
              <li className="mr-6 underline hover:underline-offset-4">
                <Link to="/about">About</Link>
              </li>
              <li className="mr-6 underline hover:underline-offset-4">
                <Link to="/projects">Projects</Link>
              </li>
              <li className="mr-6 underline hover:underline-offset-4">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>

        <Routes>
          <Route exact path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
        
        );
}

export default NavBar;