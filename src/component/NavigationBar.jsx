import React from "react";
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";

export default class NavigationBar extends React.Component {
  render() {
    return (
      <>
        <div className="navbar">
          <div className="inner-nav">
            <div className="brand">Job Finder</div>
          </div>
        </div>
      </>
    );
  }
}