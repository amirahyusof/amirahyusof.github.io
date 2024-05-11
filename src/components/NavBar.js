import React from "react"

function NavBar(){
    
    return(
        <nav className="w-full flex items-center justify-center">
          <div className ="my-6 bg-[#C8AE7D] h-10 p-2 rounded text-xl text-[#65451F]">
            <ul className="flex">
              <li className="mx-6 underline underline-offset-4">
                <a href="#about">About</a>
              </li>
              <li className="mr-6 underline underline-offset-4">
                <a href="#projects">Projects</a>
              </li>
              <li className="mr-6 underline underline-offset-4">
                <a href="#contact">Contact Me</a>
              </li>
            </ul>
          </div>
        </nav>
        );
}

export default NavBar;