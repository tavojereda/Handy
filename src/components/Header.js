import React from "react";
import "../styles/styles.scss";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

const HeaderModal = () => {
  return <div>Some Text</div>;
};

const Header = props => {
  return (
    <div className="Header">
      <Navbar className="navbar" expand="lg">
        <Navbar.Brand className="navbar-brand" href="/">
          Handy
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Form inline>
            <FormControl
              classname="form-control"
              type="text"
              placeholder="Search"
            />
            <Button className="button" variant="outline-success">
              Busqueda
            </Button>
          </Form>
          <Form inline>
            <Button className="button" variant="outline-success">
              Ingresar
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

Header.defaultProps = {
  title: "Handy",
  subtitle: "at hand"
};

export default Header;
