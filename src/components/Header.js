/* @flow */
import React, { Component } from "react";
import { Link } from "react-router";

export default class Header extends Component {
  render () {
    return (
      <header>
        <p>Surf Contest</p>
        <div className="spacer" />
        <Link to="/">Home</Link>
        <Link to="contest">Contest</Link>
      </header>
    );
  }
}
