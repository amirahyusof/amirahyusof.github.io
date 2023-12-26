import React from "react"
import styles from "../../src/css/Navbar.module.css"

function NavBar(){
    
    return(
        <nav className={styles.navbar}>
          <a className={styles.title} href="/">AmirahYusof</a>
          <div className ={styles.menu}>
            <ul className={styles.menuItems}>
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