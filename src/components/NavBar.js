import React from "react"
import { Navbar } from "react-bootstrap";

function NavBar(){
    const [activeLink, setActiveLink] = React.useState("home");
    const [scrolled, setScrolled] = React.useState(false);

    useE

    return(
        <Navbar expand="lg">
        <Container>
        <Navbar.Brand href="#home">
            AmirahYusof
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#skilld">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>
        );
}