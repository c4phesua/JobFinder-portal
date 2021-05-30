import React from "react";

export default class NavigationBar extends React.Component {
  handleLoginClick () {
    window.location.href = "/login";
  }

  render() {
    return (
      <>
        <header className="navbar-custom">
          <div className="brand"><a href="/" className="brandName">Job Finder</a></div>
          <div className="search">
            <input type="text" className="keyword" />
            <input type="text" className="title" />
            <button title="Search" className="btnSearch">Search</button>
          </div>
          <button className="login" onClick={this.handleLoginClick}>Login</button>
        </header>
      </>
    );
  }
}