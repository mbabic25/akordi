import React from "react";
import { Container } from "components";
import Nav from "./Nav";
import NavLink from "./NavLink";
import styles from "./styles.module.css";
import navLinks from "config/menu.js";

export default () => {
  const nav = navLinks.map(link => (
    <NavLink key={link.path} to={link.path}>
      {link.text}
    </NavLink>
  ));

  return (
    <header className={styles.Header}>
      <Container className={styles.Container}>
        <span className={styles.Logo}>Akordi.com</span>
        <Nav>{nav}</Nav>
      </Container>
    </header>
  );
};
