import React from 'react';
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';
import styles from './Navbar.module.css'; // Import your custom CSS file

const Navbar = () => {
  return (
    <BootstrapNavbar className={`${styles.navbarCustom} justify-content-between px-4 py-3`}>
      <BootstrapNavbar.Brand href='/'>
        <img
          alt="Logo"
          src="/assets/images/logo.png"
          className={styles.logo}
        />
      </BootstrapNavbar.Brand>
      <Nav>
        <Nav.Link className={`${styles.navLinkCustom}`} href='/'>
          HOME
        </Nav.Link>
        <Nav.Link className={`${styles.navLinkCustom}`} href="/api/auth/login">
          Login
        </Nav.Link>
      </Nav>
    </BootstrapNavbar>
  );
};

export default Navbar;
