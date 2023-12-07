import React from "react";
import { Container, Nav, NavItem, NavLink } from "reactstrap";

function Footer() {
  return (
    <footer className="footer">
      <Container fluid>
        <Nav>          
        </Nav>
        <div className="copyright">
        <div className="copyright">
          Copyright © Designed & Developed by LIFELINE{" "}
          {new Date().getFullYear()}
        </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
