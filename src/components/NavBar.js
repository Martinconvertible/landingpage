import { useEffect, useState } from "react";
import { Navbar, Container, NavLink, NavbarBrand, NavbarToggle, NavbarCollapse } from "react-bootstrap"; 
import navIcon1 from '../images/nav-icon1.svg';
import navIcon2 from '../images/nav-icon2.svg';
import navIcon3 from '../images/nav-icon3.svg';
import logo from '../images/logo.jpg';


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
        <NavbarToggle aria-controls="basic-navbar-nav"></NavbarToggle>
        <NavbarCollapse id="basic-navbar-nav">
            <nav className="me-auto">
            <NavLink href="#home" className={activeLink === "home"? 'active navbar-link':'navbar-link'} onClick={()=> cambiarExpresionBotones ('home')}> Home </NavLink>
            <NavLink href="#skills" className={activeLink === "skills"? 'active navbar-link':'navbar-link'} onClick={()=> cambiarExpresionBotones ('skills')}> Educations </NavLink>
            <NavLink href="#project" className={activeLink === "projects"? 'active navbar-link':'navbar-link'} onClick={()=> cambiarExpresionBotones ('projects')}> Projects </NavLink>
            </nav>
            <span className="navbar-text">
                <div className="social-icon">
                    <a href="https://es.linkedin.com/in/martin-cardone-arquitecto"> <img src={navIcon1} alt=""/></a>
                    <a href="https://www.facebook.com/martin.cardone.3"> <img src={navIcon2} alt=""/></a>
                    
                </div>
                <NavLink href="#footer">
               <button  className="vvd"> <span>Let's Connect</span></button> </NavLink>
               
            </span>
        </NavbarCollapse>
      <h1></h1>
    </Container>
</Navbar>
)


}