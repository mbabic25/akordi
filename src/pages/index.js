import React from "react";
import { graphql } from "gatsby";
import logo from "./LogoMa.png";
import Search from "../components/Search/Search";

export default ({
  data: {
    site: {
      siteMetadata: { title, description },
    },
  },
}) => {
  return (
    <>
      <img src={logo} alt="logo" />
      <div id="pretrazivanje">
        <Search />
      </div>
    </>
  );
};

export const query = graphql`
  query SiteMetadata {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
