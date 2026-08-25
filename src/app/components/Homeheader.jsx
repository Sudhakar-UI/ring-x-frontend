import React, { useEffect } from "react";
import Link from 'next/link';
import { Container, Navbar, Nav, Image, NavDropdown } from 'react-bootstrap';
import { usePathname } from 'next/navigation'
import '../../../public/assets/css/home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';


const Homeheader = () => {

  const pathname = usePathname()

  useEffect(() => {
    document.body.classList.remove('userpanelpage');
  })

  function nightMode() {
    document.body.classList.add('nightmode');
    var element = document.getElementById("daymode");
    element?.classList.remove("activemode");
    var element1 = document.getElementById("nightmode");
    element1?.classList.add("activemode");
  }

  function dayMode() {
    document.body.classList.remove('nightmode');
    var element2 = document.getElementById("daymode");
    element2?.classList.add("activemode");
    var element3 = document.getElementById("nightmode");
    element3?.classList.remove("activemode");
  }
  return (
    <header className="headermenu">
      <Navbar expand="lg" className="headbg">
        <Container>
          <Navbar.Brand>
            <Link href="/">
              <Image src="assets/images/ringx-logo.svg" width={100} height={57} className="logo" alt="logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navbar-nav leftheadbg mx-auto text-center">
              <Nav.Item><Link href="/" id="homelink" className={`nav-link ${pathname === '/home' ? 'active' : ''}`}>Features</Link></Nav.Item>
              <Nav.Item><Link href="/aboutus" id="aboutlink" className={`nav-link ${pathname === '/about' ? 'active' : ''}`}>Earn</Link></Nav.Item>
              <Nav.Item><Link href="/aboutus" id="aboutlink" className={`nav-link ${pathname === '/about' ? 'active' : ''}`}>Predict</Link></Nav.Item>
              <Nav.Item><Link href="/aboutus" id="aboutlink" className={`nav-link ${pathname === '/about' ? 'active' : ''}`}>Affiliate</Link></Nav.Item>
              <Nav.Item><Link href="/aboutus" id="aboutlink" className={`nav-link ${pathname === '/about' ? 'active' : ''}`}>RXT</Link></Nav.Item>
              {/* <Nav.Item><Link href="/#roadmap" id="roadmaplink" className="nav-link">How it Works</Link></Nav.Item> */}
              {/* <Nav.Item><Link href="/#howitworks" id="howitworkslink" className="nav-link">How it Works</Link></Nav.Item>
              <Nav.Item><Link href="/#token" id="tokenlink" className="nav-link">P2P Exchange</Link></Nav.Item>
              <Nav.Item><Link href="/#faq" id="faqlink" className="nav-link">FAQ</Link></Nav.Item> */}
            </Nav>
            <Nav className="navbar-nav rightheadbg">
              <Nav.Item><Link href="/signin" id="register" className="nav-link btn borderbtn me-1 ms-2">Login</Link></Nav.Item>
              <Nav.Item><Link href="/signup" id="login" className="nav-link btn sitebtn">Get Started →</Link></Nav.Item>
              {/* <Nav.Item><Link href="/signup" id="login" className="nav-link btn sitebtn">Register</Link></Nav.Item> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Homeheader