import React from "react"

function NavBar(){
    
    return(
        <nav className="navbar">
          <a href="/">Amirah Yusof</a>
          <div className="navbar--content">
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact Me</a></li>
            </ul>
          </div>
        </nav>
        );
}

export default NavBar;