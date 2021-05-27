import React from "react";
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";

export default class NavigationBar extends React.Component {
  render() {
    return (
      <>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#home">Job Finder</Navbar.Brand>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Form>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Navbar>
      </>
    );
  }
}