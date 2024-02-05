import React from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from 'styled-components'
import { LinkComponent, SocialComponent } from "../utils/links";
const Navbar = () => {
  return <Wrapper className="nav">
    <div className="container nav-container">
      <header className="nav-header">
        <Link to='/' className="nav-brand">
          <h3>Wiki Drinks</h3>
        </Link>
        <div>
          <button className="icon-btn btn nav-toggler">
            <FaBars className="nav-icon" />
          </button>
        </div>
      </header>

      <LinkComponent classLink='nav-links' />
      <SocialComponent classSocial='socialTop' />

    </div>
  </Wrapper>;
};

const Wrapper = styled.nav`
.nav-links, .socialTop, h3, h5{
  margin-bottom: 0;
}
`

export default Navbar;
