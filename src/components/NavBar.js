import { useEffect, useState } from "react";
import { Navbar, Container, NavLink, NavbarBrand, NavbarToggle, NavbarCollapse } from "react-bootstrap"; 
import navIcon1 from '../images/nav-icon1.svg';
import navIcon2 from '../images/nav-icon2.svg';
import navIcon3 from '../images/nav-icon3.svg';
import logo from '../images/logo.svg';


export const NavBar = () => {
    const [activeLink, setActiveLink] = useState ('home');
    const [scrolled , setScrolled] = useState ('false');

    useEffect( ()=> {
        const onScroll = ()=> {
        if (window.scrollBy >50) {
            setScrolled (true);
        } else {
            setScrolled (false);
        }}
            window.addEventListener("scroll", onScroll );
            return () => window.removeEventListener ("scroll", onScroll)
    }, [])

    const cambiarExpresionBotones = (value) => {
        setActiveLink (value);
    }

return ( 
<Navbar expand="lg" className={scrolled ? "scrolled" : ""}> 
    <Container> 
        <NavbarBrand href="#home"><img src={logo} alt="logo"/> </NavbarBrand>
        <NavbarToggle aria-controls="basic-navbar-nav"> Pepe</NavbarToggle>
        <NavbarCollapse id="basic-navbar-nav">
            <nav className="me-auto">
            <NavLink href="#home" className={activeLink === "home"? 'active navbar-link':'navbar-link'} onClick={()=> cambiarExpresionBotones ('home')}> Home </NavLink>
            <NavLink href="#home" className={activeLink === "skills"? 'active navbar-link':'navbar-link'} onClick={()=> cambiarExpresionBotones ('skills')}> Skills </NavLink>
            <NavLink href="#home" className={activeLink === "projects"? 'active navbar-link':'navbar-link'} onClick={()=> cambiarExpresionBotones ('projects')}> Projects </NavLink>
            </nav>
            <span className="navbar-text">
                <div className="social-icon">
                    <a href="#"> <img src={navIcon1} alt=""/></a>
                    <a href="#"> <img src={navIcon2} alt=""/></a>
                    <a href="#"> <img src={navIcon3} alt=""/></a>
                </div>
               <button className="vvd" onClick={()=> alert ("Todo bioen")}> <span>Let's Connect</span></button> 
            </span>
        </NavbarCollapse>
      <h1>Pepe</h1>
    </Container>
</Navbar>
)


}