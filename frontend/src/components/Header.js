import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { ReactComponent as Logo } from "../Images/logo.svg";

const navbarStyle = {
  backgroundColor: "#eeeeee",
};

const Header = ({ title }) => {
  return (
    <Navbar style={navbarStyle} variant="light">
      <Container>
        <Logo alt={title} style={{ maxWidth: "30rem", maxHeight: "4rem" }} />
      </Container>
    </Navbar>
  );
};

export default Header;
