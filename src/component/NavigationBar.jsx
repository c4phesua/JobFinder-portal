import React from "react";

export default class NavigationBar extends React.Component {
  render() {
    return (
      <>
        <div className="navbar">
          <div className="brand"><a href="/" className="brandName">Job Finder</a></div>
          <div className="search">
            <input type="text" className="keyword"/>
            <input type="text" className="title"/>
            <button title="Search" className="btnSearch">Search</button>
          </div>
          <div className="login"><a href="/login">Login</a></div>
        </div>
      </>
    );
  }
}