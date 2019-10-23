import React from "react";
import SEO from "components/SEO";
import { PrivateRoute } from "components";
import { Router } from "@reach/router";
import Login from "components/Private/Login";
import Dashboard from "components/Private/pages/Dashboard.js";
import Personal from "components/Private/pages/Personal.js";
import {
  handleLogin,
  handleLogout,
  isLoggedIn
} from "services/authentication/auth.js";
import { navigate } from "gatsby";
import styles from "styles/pages/private.module.css";

const Logout = () => (
  <a
    href="/"
    onClick={event => {
      event.preventDefault();
      handleLogout();
      navigate("/prijava");
    }}
    className={styles.Logout}
  >
    Odjava
  </a>
);

export default () => (
  <>
    <SEO title="Private" />
    {isLoggedIn() ? (
      <Logout />
    ) : (
      <>
        <h1>Prijava</h1>
        <Login private="/" handleLogin={handleLogin} />
      </>
    )}

    <Router>
      <PrivateRoute
        path="/private/dashboard"
        render={Dashboard}
        redirect={"/private"}
      />

      <PrivateRoute
        path="/private/personal"
        render={Personal}
        redirect={"/private"}
      />
    </Router>
  </>
);


